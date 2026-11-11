import { renderOgImage, ogSize, ogContentType } from "../../../utils/ogImage";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Aayush Sood's Blog";

export default function Image() {
  return renderOgImage({
    label: "/ blog",
    title: "Blog",
    description: "Stories from life, technology, and anything in between.",
  });
}
