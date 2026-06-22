// Build every icon / OG image the site references from the master brand
// logo (assets/Mafialogo.png). The source PNG ships with a faint grey,
// semi-transparent background; we flood-fill that away from the edges so
// the badge sits cleanly on any colour, then rasterise the sizes we need.
// Run with: npm run assets   (after `npm install`)
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const pub = join(here, "..", "public");
const SRC = join(here, "..", "assets", "Mafialogo.png");

// ── 1. Clean the background ──────────────────────────────────────────────
// Flood-fill from the borders, clearing every pixel softer than the badge.
// The gold sky and the "ONLINE" wordmark live inside the opaque black ring,
// so the fill can never reach them — only the outer halo is removed.
const { data, info } = await sharp(SRC)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const { width, height, channels } = info; // channels === 4

const ALPHA_BG = 140; // anything fainter than this counts as background
const visited = new Uint8Array(width * height);
const stack = [];

const seed = (x, y) => {
  if (x < 0 || y < 0 || x >= width || y >= height) return;
  const p = y * width + x;
  if (visited[p] || data[p * channels + 3] >= ALPHA_BG) return;
  visited[p] = 1;
  stack.push(p);
};

for (let x = 0; x < width; x++) { seed(x, 0); seed(x, height - 1); }
for (let y = 0; y < height; y++) { seed(0, y); seed(width - 1, y); }

while (stack.length) {
  const p = stack.pop();
  const x = p % width;
  const y = (p - x) / width;
  seed(x + 1, y); seed(x - 1, y); seed(x, y + 1); seed(x, y - 1);
}

for (let p = 0; p < width * height; p++) {
  if (visited[p]) {
    const i = p * channels;
    data[i] = data[i + 1] = data[i + 2] = data[i + 3] = 0; // fully transparent
  }
}

// Tight-cropped, fully transparent master badge.
const master = await sharp(data, { raw: { width, height, channels } })
  .png()
  .trim()
  .toBuffer();

const meta = await sharp(master).metadata();
console.log(`✓ cleaned badge — ${meta.width}×${meta.height}`);

// ── 2. Web logo used by the UI (navbar / footer / CTA) ───────────────────
// Displayed at most ~110px tall, so 460px wide covers retina with room to
// spare; quantise the PNG to keep the per-page payload light.
await sharp(master)
  .resize({ width: 460 })
  .png({ compressionLevel: 9, effort: 10, quality: 92, palette: true })
  .toFile(join(pub, "logo.png"));
console.log("✓ logo.png");

// ── 3. Square icons (favicon / PWA / apple-touch) ────────────────────────
const icons = [
  ["favicon-16x16.png", 16],
  ["favicon-32x32.png", 32],
  ["apple-touch-icon.png", 180],
  ["icon-192x192.png", 192],
  ["icon-512x512.png", 512],
];

for (const [name, size] of icons) {
  await sharp(master)
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(join(pub, name));
  console.log("✓", name);
}

// ── 4. Open Graph image: badge on the site's dark gradient ───────────────
const ogBg = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
     <defs>
       <radialGradient id="g" cx="50%" cy="36%" r="62%">
         <stop offset="0%" stop-color="#1b1408"/>
         <stop offset="52%" stop-color="#0A0A0F"/>
         <stop offset="100%" stop-color="#050507"/>
       </radialGradient>
     </defs>
     <rect width="1200" height="630" fill="url(#g)"/>
   </svg>`
);
const ogLogo = await sharp(master)
  .resize({ height: 480, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .toBuffer();
await sharp(ogBg)
  .composite([{ input: ogLogo, gravity: "centre" }])
  .png()
  .toFile(join(pub, "og-image.png"));
console.log("✓ og-image.png");

console.log("\nDone. All brand assets generated from Mafialogo.png.");
