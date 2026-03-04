import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont() {
  try {
    const res = await fetch(
      "https://www.aayushsood.com/assets/fonts/wotfard-regular-webfont.ttf"
    );
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function Image() {
  const fontData = await loadFont();
  const fonts = fontData
    ? [{ name: "Wotfard", data: fontData, weight: 400, style: "normal" }]
    : [];
  const fontFamily = fontData ? "Wotfard" : "sans-serif";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#090e1a",
          padding: "64px 80px 56px",
          fontFamily,
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#8892a4",
            fontSize: "18px",
            letterSpacing: "0.06em",
            marginBottom: "48px",
          }}
        >
          aayushsood.com / blog
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
              fontSize: "80px",
              color: "#718de1",
              margin: "0 0 24px 0",
              lineHeight: 1.1,
            }}
          >
            Blog
          </div>
          <div style={{ fontSize: "26px", color: "#f8fafc", lineHeight: 1.5 }}>
            Stories from life, technology, and anything in between.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderTop: "1px solid #202534",
            paddingTop: "24px",
            flexShrink: 0,
          }}
        >
          <span style={{ color: "#8892a4", fontSize: "20px" }}>Aayush Sood</span>
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
