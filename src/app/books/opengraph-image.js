import { renderOgImage, ogSize, ogContentType } from "../../../utils/ogImage";
import books from "../data/books.json";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Aayush Sood's Books";

export default function Image() {
  return renderOgImage({
    label: "/ books",
    title: "Books",
    description: `${books.length} books i've read`,
  });
}
