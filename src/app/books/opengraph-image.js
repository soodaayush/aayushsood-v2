import { renderOgImage, ogSize, ogContentType } from "../../../utils/ogImage";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Aayush Sood's Books";

export default function Image() {
  return renderOgImage({
    label: "/ books",
    title: "Books",
    description: "Reading list",
  });
}
