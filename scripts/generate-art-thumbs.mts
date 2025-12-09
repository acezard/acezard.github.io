#!/usr/bin/env node

import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";
import { promisify } from "node:util";
import { execFile } from "node:child_process";

const execFileAsync = promisify(execFile);

const RAW_DIR = "./images"
const FULL_DIR = path.join("public", "art", "full");
const THUMBS_DIR = path.join("public", "art", "thumbs");
const THUMB_WIDTH = 600;

async function listImages(dir: string): Promise<string[]> {
  const entries = await readdir(dir);
  return entries.filter((file) =>
    file.match(/\.(png|jpg|jpeg|webp)$/i)
  );
}

async function generateThumbnail(
  inputPath: string,
  outputPath: string
): Promise<void> {
  // Using ImageMagick's convert command to resize to 600px width with auto height
  // Output as JPEG for smaller file size
  await execFileAsync("convert", [
    inputPath,
    "-resize",
    `${THUMB_WIDTH}x`,
    "-quality",
    "85",
    outputPath,
  ]);
}

async function generateFull(
  inputPath: string,
  outputPath: string
): Promise<void> {
  // Output as JPEG for smaller file size
  await execFileAsync("convert", [
    inputPath,
    "-quality",
    "85",
    outputPath,
  ]);
}

async function main(): Promise<void> {
  // Ensure directories exist
  try {
    await mkdir(THUMBS_DIR, { recursive: true });
    await mkdir(FULL_DIR, { recursive: true })
  } catch (err) {
    console.error(`Failed to create ${THUMBS_DIR}:`, err);
    process.exit(1);
  }

  const files = await listImages(RAW_DIR);
  if (files.length === 0) {
    console.error(`No images found in ${RAW_DIR}`);
    process.exit(1);
  }

  console.log(`Found ${files.length} images in ${RAW_DIR}`);
  console.log(`Generating thumbnails (${THUMB_WIDTH}px width, auto height, JPEG)...`);

  let successCount = 0;
  let errorCount = 0;

  for (const file of files) {
    const baseNameNoExt = file.replace(/\.[^.]+$/, "");
    const inputPath = path.join(RAW_DIR, file);
    const outputPathThumb = path.join(THUMBS_DIR, `${baseNameNoExt}_thumb.jpg`);
    const outputPathFull = path.join(FULL_DIR,`${baseNameNoExt}_full.jpg` )

    try {
      console.log(`Processing: ${file} -> ${baseNameNoExt}.jpg`);
      await generateThumbnail(inputPath, outputPathThumb);
      await generateFull(inputPath, outputPathFull)
      successCount++;
    } catch (err) {
      console.error(`Failed to generate thumbnail for ${file}:`, err);
      errorCount++;
    }
  }

  console.log(`\nCompleted: ${successCount} successful, ${errorCount} failed`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
