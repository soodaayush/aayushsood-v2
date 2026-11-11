import { renderOgImage, ogSize, ogContentType } from "../../utils/ogImage";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Aayush Sood - Fullstack Developer";

export default function Image() {
  return renderOgImage({
    title: "Aayush Sood",
    description: "software engineering student, full stack developer",
  });
}
