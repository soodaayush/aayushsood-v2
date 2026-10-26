import {
  renderOgImage,
  ogSize,
  ogContentType,
  ogColors,
} from "../../utils/ogImage";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Aayush Sood - Fullstack Developer";

export default function Image() {
  return renderOgImage({
    breadcrumb: "aayushsood.com",
    title: "Aayush Sood",
    titleSize: "80px",
    lines: [
      {
        text: "Fullstack Developer",
        color: ogColors.white,
        size: "30px",
        margin: "0 0 12px 0",
      },
      { text: "Nova Scotia, Canada", color: ogColors.muted, size: "22px" },
    ],
    footerLeft: "Portfolio · Blog · Books · Resume",
  });
}
