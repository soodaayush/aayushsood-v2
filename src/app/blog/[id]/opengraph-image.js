import { getPostBySlug } from "../../../../utils/fetchPosts";
import {
  renderOgImage,
  ogSize,
  ogContentType,
} from "../../../../utils/ogImage";

export const size = ogSize;
export const contentType = ogContentType;

export async function generateImageMetadata({ params }) {
  const { id } = await params;
  const post = getPostBySlug(id);
  return [
    { id: "og", alt: post?.meta.title ?? "Blog Post", size, contentType },
  ];
}

export default async function Image({ params }) {
  const { id } = await params;
  const post = getPostBySlug(id);

  return renderOgImage({
    breadcrumb: "aayushsood.com / blog",
    title: post.meta.title,
    lines: [{ text: post.meta.description, size: "22px" }],
    footerLeft: "Aayush Sood",
    footerRight: post.meta.date,
  });
}
