#!/usr/bin/env node

import { promisify } from "node:util";
import { execFile } from "node:child_process";
import { readdir, writeFile, stat } from "node:fs/promises";
import path from "node:path";

const EXIFTOOL = "exiftool";
const RAW_DIR = "./images"
const FULL_DIR = path.join("public", "art", "full");
const RAW_JSON = path.join("src", "data", "artworks.raw.json");

type ExifResult = {
  ImageWidth?: number;
  ImageHeight?: number;
  Parameters?: string;
};

type LoraInfo = { name: string; strength: number };

export type ArtworkTech = {
  model?: string;
  modelHash?: string;
  sampler?: string;
  steps?: number;
  cfgScale?: number;
  distilledCfgScale?: number;
  seed?: number;
  sizeGenerated?: string;
  loras?: LoraInfo[];
  version?: string;
};

export type ArtworkRaw = {
  fileBase: string;
  id: string;
  slug: string;
  title: string;
  thumb: string;
  full: string;
  originalWidth: number | null;
  originalHeight: number | null;
  alt: string;
  shortDescription: string;
  longDescription: string;
  tech: ArtworkTech;
};

const exiftoolExec = promisify(execFile) as (
  file: string,
  args: readonly string[]
) => Promise<{ stdout: string; stderr: string }>;

async function listImages(dir: string): Promise<string[]> {
  const entries = await readdir(dir);
  return entries.filter((file) =>
    file.match(/\.(png|jpg|jpeg|webp)$/i)
  );
}

async function getExifData(filePath: string): Promise<ExifResult> {
  const { stdout } = await exiftoolExec(EXIFTOOL, [
    "-j",
    "-ImageWidth",
    "-ImageHeight",
    "-Parameters",
    filePath,
  ]);
  const json = JSON.parse(stdout) as ExifResult[];
  return json[0] ?? {};
}

function slugify(filename: string): string {
  const name = filename.replace(/\.[^.]+$/, "");
  return name
    .toLowerCase()
    .replace(/[_\s]+/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseParameters(
  params?: string
): { prompt: string; tech: ArtworkTech } {
  if (!params || typeof params !== "string") {
    return { prompt: "", tech: {} };
  }

  let prompt = params;
  const stepsIndex = params.indexOf("Steps:");
  if (stepsIndex > 0) {
    prompt = params.slice(0, stepsIndex).trim();
  }

  const loras: LoraInfo[] = [];
  const loraRegex = /<lora:([^:>]+):([\d.]+)>/g;
  let match: RegExpExecArray | null;
  while ((match = loraRegex.exec(params)) !== null) {
    loras.push({
      name: match[1],
      strength: Number(match[2]),
    });
  }

  const tech: ArtworkTech = {};

  const matchNum = (re: RegExp, key: keyof ArtworkTech) => {
    const m = params.match(re);
    if (m) tech[key] = Number(m[1]) as never;
  };

  const matchStr = (re: RegExp, key: keyof ArtworkTech) => {
    const m = params.match(re);
    if (m) tech[key] = m[1].trim() as never;
  };

  matchNum(/Steps:\s*(\d+)/, "steps");
  matchStr(/Sampler:\s*([^,]+)/, "sampler");
  matchNum(/CFG scale:\s*([\d.]+)/, "cfgScale");
  matchNum(/Distilled CFG Scale:\s*([\d.]+)/, "distilledCfgScale");
  matchNum(/Seed:\s*(\d+)/, "seed");
  matchStr(/Size:\s*([\dx]+)/, "sizeGenerated");
  matchStr(/Model hash:\s*([0-9a-fA-F]+)/, "modelHash");
  matchStr(/Model:\s*([^,]+)/, "model");
  matchStr(/Version:\s*([^,]+)/, "version");

  if (loras.length) tech.loras = loras;

  return { prompt, tech };
}

function makeShortText(text: string | undefined, maxLen = 180): string {
  if (!text) return "";
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= maxLen) return clean;
  return clean.slice(0, maxLen - 1).trimEnd() + "…";
}

function buildArtworkRecord(
  fileName: string,
  exif: ExifResult
): ArtworkRaw {
  const baseNameNoExt = fileName.replace(/\.[^.]+$/, "");
  const slug = slugify(fileName);
  const id = slug;

  const imageWidth = exif.ImageWidth ?? null;
  const imageHeight = exif.ImageHeight ?? null;

  const { prompt, tech } = parseParameters(exif.Parameters);

  const alt = makeShortText(
    prompt || `Artwork ${baseNameNoExt}`,
    140
  );
  const shortDescription = makeShortText(prompt || "", 220);

  const thumbPath = `/art/thumbs/${baseNameNoExt}_thumb.jpg`;
  const fullPath = `/art/full/${baseNameNoExt}_full.jpg`;

  return {
    fileBase: baseNameNoExt,
    id,
    slug,
    title: slug.replace(/-/g, " "),
    thumb: thumbPath,
    full: fullPath,
    originalWidth: imageWidth,
    originalHeight: imageHeight,
    alt,
    shortDescription,
    longDescription: prompt || "",
    tech,
  };
}

async function main(): Promise<void> {
  // Ensure full dir exists
  try {
    const st = await stat(RAW_DIR);
    if (!st.isDirectory()) {
      console.error(`ERROR: ${RAW_DIR} is not a directory`);
      process.exit(1);
    }
  } catch {
    console.error(`ERROR: Directory not found: ${RAW_DIR}`);
    process.exit(1);
  }

  const files = await listImages(RAW_DIR);
  if (files.length === 0) {
    console.error(`No images found in ${RAW_DIR}`);
    process.exit(1);
  }

  console.log(`Found ${files.length} images in ${RAW_DIR}`);

  const artworks: ArtworkRaw[] = [];

  for (const file of files) {
    const fullPath = path.join(RAW_DIR, file);
    console.log(`Processing: ${file}`);
    try {
      const exif = await getExifData(fullPath);
      const record = buildArtworkRecord(file, exif);
      artworks.push(record);
    } catch (err) {
      console.error(`Failed to process ${file}:`, err);
    }
  }

  if (artworks.length === 0) {
    console.log("No artworks generated.");
    process.exit(1);
  }

  await writeFile(
    RAW_JSON,
    JSON.stringify(artworks, null, 2),
    "utf8"
  );
  console.log(
    `Generated ${RAW_JSON} with ${artworks.length} artworks.`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
