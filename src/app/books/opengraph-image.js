import { renderOgImage, ogSize, ogContentType } from "../../../utils/ogImage";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Aayush Sood's Books";

export default function Image() {
  return renderOgImage({
    breadcrumb: "aayushsood.com / books",
    title: "Books",
    titleSize: "80px",
    lines: [
      {
        text: "A collection of books I've read and the knowledge they shaped.",
        size: "26px",
      },
    ],
    footerLeft: "Aayush Sood",
  });
}
