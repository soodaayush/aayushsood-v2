import fs from "fs";
import path from "path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

// OG images are rendered by Satori, which can't read CSS variables — these mirror the dark theme
const C = {
  bg: "#090e1a",
  blue: "#718de1",
  white: "#f8fafc",
  muted: "#8892a4",
  divider: "#202534",
};

const fontData = fs.readFileSync(
  path.join(process.cwd(), "public/assets/fonts/wotfard-regular-webfont.ttf"),
);

export function renderOgImage({
  breadcrumb,
  title,
  titleSize,
  lines = [],
  footerLeft,
  footerRight,
}) {
  const resolvedTitleSize = titleSize ?? (title.length > 55 ? "50px" : "62px");

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: C.bg,
        padding: "64px 80px 56px",
        fontFamily: "Wotfard",
      }}
    >
      <div
        style={{
          display: "flex",
          color: C.muted,
          fontSize: "18px",
          letterSpacing: "0.06em",
          marginBottom: "48px",
        }}
      >
        {breadcrumb}
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: resolvedTitleSize,
            color: C.blue,
            margin: "0 0 20px 0",
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>
        {lines.map(({ text, color, size, margin }) => (
          <div
            key={text}
            style={{
              fontSize: size ?? "26px",
              color: color ?? C.white,
              lineHeight: 1.5,
              ...(margin ? { margin } : {}),
            }}
          >
            {text}
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: footerRight ? "space-between" : "flex-start",
          borderTop: `1px solid ${C.divider}`,
          paddingTop: "24px",
          flexShrink: 0,
        }}
      >
        <span
          style={{ color: C.muted, fontSize: footerRight ? "20px" : "18px" }}
        >
          {footerLeft}
        </span>
        {footerRight && (
          <span style={{ color: C.muted, fontSize: "18px" }}>
            {footerRight}
          </span>
        )}
      </div>
    </div>,
    {
      ...ogSize,
      fonts: [
        { name: "Wotfard", data: fontData, weight: 400, style: "normal" },
      ],
    },
  );
}

export { C as ogColors };
