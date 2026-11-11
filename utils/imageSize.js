import fs from "fs";
import path from "path";

const publicDir = path.join(process.cwd(), "public");

// Reads the width and height of a WebP file in /public from its header (no image library needed).
// Blog posts use this to give every <img> its real size, so the browser can reserve the space
// before a lazy-loaded image arrives and the page never jumps.
export function getImageSize(src) {
  try {
    const file = path.join(publicDir, src);
    if (!file.startsWith(publicDir + path.sep)) return null;

    const fd = fs.openSync(file, "r");
    const buf = Buffer.alloc(32);
    fs.readSync(fd, buf, 0, 32, 0);
    fs.closeSync(fd);

    if (buf.toString("ascii", 0, 4) !== "RIFF") return null;
    if (buf.toString("ascii", 8, 12) !== "WEBP") return null;

    const format = buf.toString("ascii", 12, 16);
    if (format === "VP8 ") {
      return {
        width: buf.readUInt16LE(26) & 0x3fff,
        height: buf.readUInt16LE(28) & 0x3fff,
      };
    }
    if (format === "VP8L") {
      const bits = buf.readUInt32LE(21);
      return {
        width: (bits & 0x3fff) + 1,
        height: ((bits >> 14) & 0x3fff) + 1,
      };
    }
    if (format === "VP8X") {
      return {
        width: buf.readUIntLE(24, 3) + 1,
        height: buf.readUIntLE(27, 3) + 1,
      };
    }
  } catch {
    // Unreadable or missing file: the image just renders without reserved space
  }
  return null;
}
