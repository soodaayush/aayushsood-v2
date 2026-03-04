import { ImageResponse } from "next/og";
import posts from "../../../../public/posts.json";

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

export default async function Image({ params }) {
  const { id } = await params;
  const post = posts.find((p) => p.slug === id);

  const title = post?.meta?.title ?? "Blog Post";
  const description = post?.meta?.description ?? "";
  const date = post?.meta?.date ?? "";

  const fontData = await loadFont();
  const fonts = fontData
    ? [{ name: "Wotfard", data: fontData, weight: 400, style: "normal" }]
    : [];
  const fontFamily = fontData ? "Wotfard" : "sans-serif";

  return new ImageResponse(
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
      {/* URL breadcrumb */}
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

      {/* Title + description */}
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
            fontSize: title.length > 55 ? "50px" : "62px",
            color: "#718de1",
            margin: "0 0 28px 0",
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>

        {description && (
          <div
            style={{
              fontSize: "22px",
              color: "#f8fafc",
              lineHeight: 1.5,
            }}
          >
            {description.length > 120
              ? description.slice(0, 120) + "..."
              : description}
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #202534",
          paddingTop: "24px",
          flexShrink: 0,
        }}
      >
        <span style={{ color: "#8892a4", fontSize: "20px" }}>Aayush Sood</span>
        {date && (
          <span style={{ color: "#8892a4", fontSize: "18px" }}>{date}</span>
        )}
      </div>
    </div>,
    { ...size, fonts },
  );
}
