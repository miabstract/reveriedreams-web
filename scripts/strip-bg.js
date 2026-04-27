// Strip the near-black background from a PNG by deriving alpha from luminance.
// alpha = max(R,G,B) — keeps light foreground (white text, violet glow) opaque,
// fades dark background to transparent. Output is RGBA with the original RGB
// preserved (no premultiplied artifacts).
const sharp = require("sharp");
const path = require("path");

async function strip(input, output) {
  const img = sharp(input).removeAlpha().toColorspace("srgb");
  const { data, info } = await img
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const out = Buffer.alloc(width * height * 4);

  for (let i = 0, j = 0; i < data.length; i += channels, j += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    // Use the brightest channel as alpha — pure black -> 0, white -> 255,
    // violet (R~180,G~150,B~255) -> 255 (preserves the glow halo softly).
    const a = Math.max(r, g, b);
    out[j] = r;
    out[j + 1] = g;
    out[j + 2] = b;
    out[j + 3] = a;
  }

  await sharp(out, { raw: { width, height, channels: 4 } })
    .png({ compressionLevel: 9 })
    .toFile(output);
  console.log(`wrote ${output} (${width}x${height})`);
}

(async () => {
  const root = path.resolve(__dirname, "..");
  const src = path.join(root, "public/logos/wordmark.png");
  const dst = path.join(root, "public/logos/wordmark.png");
  // Sample a corner pixel first so we can log what bg color we found.
  const meta = await sharp(src).metadata();
  const corner = await sharp(src)
    .extract({ left: 0, top: 0, width: 1, height: 1 })
    .raw()
    .toBuffer();
  console.log(
    `source: ${meta.width}x${meta.height} ${meta.channels}ch, top-left RGB = ${corner[0]},${corner[1]},${corner[2]}`,
  );
  await strip(src, dst);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
