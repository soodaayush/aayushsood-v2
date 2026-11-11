import fs from "fs";
import path from "path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

// OG images are rendered by Satori, which can't read CSS variables.
// These mirror the dark theme tokens in globals.css.
const C = {
  bg: "#0c0c0d",
  ink: "#ececea",
  muted: "#9a9a95",
  line: "#262628",
  accent: "#ff6a3d",
};

const readFont = (file) =>
  fs.readFileSync(path.join(process.cwd(), "public/assets/fonts", file));

const fonts = [
  { name: "DM Sans", data: readFont("dm-sans-400.woff"), weight: 400 },
  { name: "DM Sans", data: readFont("dm-sans-500.woff"), weight: 500 },
  { name: "DM Sans", data: readFont("dm-sans-600.woff"), weight: 600 },
  {
    name: "JetBrains Mono",
    data: readFont("jetbrains-mono-400.woff"),
    weight: 400,
  },
  {
    name: "JetBrains Mono",
    data: readFont("jetbrains-mono-500.woff"),
    weight: 500,
  },
].map((font) => ({ ...font, style: "normal" }));

function titleSizeFor(title) {
  if (title.length <= 20) return 92;
  if (title.length <= 45) return 68;
  if (title.length <= 65) return 58;
  return 52;
}

export function renderOgImage({ label, title, description, footerRight }) {
  const mono = { fontFamily: "JetBrains Mono", fontSize: 24 };

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: C.bg,
        padding: "64px 80px 56px",
        fontFamily: "DM Sans",
      }}
    >
      <div
        style={{
          ...mono,
          display: "flex",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        <span style={{ color: C.ink, fontWeight: 500 }}>aayush sood</span>
        {label && <span style={{ color: C.accent }}>{label}</span>}
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: 0,
        }}
      >
        <div
          style={{
            fontSize: titleSizeFor(title),
            fontWeight: 600,
            color: C.ink,
            letterSpacing: "-0.025em",
            lineHeight: 1.12,
          }}
        >
          {title}
        </div>
        {description && (
          <div
            style={{
              fontSize: 28,
              fontWeight: 400,
              color: C.muted,
              lineHeight: 1.45,
              marginTop: 28,
              maxWidth: 960,
            }}
          >
            {description}
          </div>
        )}
      </div>
      <div
        style={{
          ...mono,
          display: "flex",
          justifyContent: "space-between",
          borderTop: `1px solid ${C.line}`,
          paddingTop: 24,
          color: C.muted,
          flexShrink: 0,
        }}
      >
        <span>aayushsood.com</span>
        {footerRight && <span>{footerRight}</span>}
      </div>
    </div>,
    { ...ogSize, fonts },
  );
}

export { C as ogColors };
