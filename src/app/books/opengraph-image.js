import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const fontData = readFileSync(
    join(process.cwd(), "public/assets/fonts/wotfard-regular-webfont.ttf")
  );

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
        }}
      >
        {/* URL breadcrumb */}
        <div
          style={{
            display: "flex",
            color: "#8892a4",
            fontSize: "18px",
            fontFamily: "Wotfard",
            letterSpacing: "0.06em",
            marginBottom: "48px",
          }}
        >
          aayushsood.com / books
        </div>

        {/* Main content */}
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
              fontFamily: "Wotfard",
              color: "#718de1",
              margin: "0 0 24px 0",
              lineHeight: 1.1,
              fontWeight: 400,
            }}
          >
            Books
          </div>
          <div
            style={{
              fontSize: "26px",
              fontFamily: "Wotfard",
              color: "#f8fafc",
              lineHeight: 1.5,
            }}
          >
            A collection of books I've read and the knowledge they shaped.
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderTop: "1px solid #202534",
            paddingTop: "24px",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              color: "#8892a4",
              fontSize: "20px",
              fontFamily: "Wotfard",
            }}
          >
            Aayush Sood
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Wotfard", data: fontData, weight: 400, style: "normal" }],
    }
  );
}
