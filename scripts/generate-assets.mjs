// Rasterise the SVG logos into the PNG icons + OG image the Layout references.
// Run with: npm run assets   (after `npm install`)
import sharp from "sharp";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const pub = join(here, "..", "public");

const iconSvg = readFileSync(join(pub, "favicon.svg"));
const ogSvg = readFileSync(join(pub, "og-image.svg"));

const icons = [
  ["favicon-16x16.png", 16],
  ["favicon-32x32.png", 32],
  ["apple-touch-icon.png", 180],
  ["icon-192x192.png", 192],
  ["icon-512x512.png", 512],
];

for (const [name, size] of icons) {
  await sharp(iconSvg, { density: 512 })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(join(pub, name));
  console.log("✓", name);
}

await sharp(ogSvg, { density: 160 }).resize(1200, 630).png().toFile(join(pub, "og-image.png"));
console.log("✓ og-image.png");

console.log("\nDone. All icons + OG image generated.");
