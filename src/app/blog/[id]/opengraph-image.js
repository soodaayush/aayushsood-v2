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
    label: "/ blog",
    title: post.meta.title,
    description: post.meta.description,
    footerRight: post.meta.date,
  });
}
