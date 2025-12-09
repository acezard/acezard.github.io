// src/data/artworks.ts
import raw from "./artworks.raw.json";

export type ArtworkTech = {
  model?: string;
  modelHash?: string;
  sampler?: string;
  steps?: number;
  cfgScale?: number;
  distilledCfgScale?: number;
  seed?: number;
  sizeGenerated?: string;
  loras?: { name: string; strength: number }[];
  version?: string;
};

export type Artwork = {
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

export const artworks = raw as Artwork[];
