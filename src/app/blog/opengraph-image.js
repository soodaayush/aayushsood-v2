import { renderOgImage, ogSize, ogContentType } from "../../../utils/ogImage";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Aayush Sood's Blog";

export default function Image() {
  return renderOgImage({
    breadcrumb: "aayushsood.com / blog",
    title: "Blog",
    titleSize: "80px",
    lines: [
      {
        text: "Stories from life, technology, and anything in between.",
        size: "26px",
      },
    ],
    footerLeft: "Aayush Sood",
  });
}
