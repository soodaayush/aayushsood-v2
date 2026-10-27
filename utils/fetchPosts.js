import fs from "fs";
import path from "path";
import { cache } from "react";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

const REQUIRED_FIELDS = ["title", "description", "date"];

// Fail the build with a clear message instead of shipping a broken post
function validatePost(file, meta) {
  for (const field of REQUIRED_FIELDS) {
    if (typeof meta[field] !== "string" || !meta[field].trim()) {
      throw new Error(
        `content/posts/${file}: frontmatter "${field}" is missing or not a quoted string`,
      );
    }
  }
  for (const field of ["date", "updated"]) {
    if (meta[field] !== undefined && isNaN(new Date(meta[field]))) {
      throw new Error(
        `content/posts/${file}: frontmatter "${field}" is not a valid date ("${meta[field]}")`,
      );
    }
  }
}

function getReadingTime(content) {
  const wordCount = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / 200));
}

// Reads every post from disk. Wrapped in cache() so a single render only reads once;
// in dev each request re-reads, so edits show up on refresh.
export const getPosts = cache(() => {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const fileContents = fs.readFileSync(
        path.join(postsDirectory, file),
        "utf8",
      );
      const { data, content } = matter(fileContents);
      validatePost(file, data);

      return {
        slug: file.replace(/\.mdx$/, ""),
        meta: data,
        content,
        readingTime: getReadingTime(content),
      };
    })
    .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
});

export function getPostBySlug(slug) {
  return getPosts().find((post) => post.slug === slug);
}

// Lightweight version for client components — no post content
export function getPostSummaries() {
  return getPosts().map(({ slug, meta, readingTime }) => ({
    slug,
    meta,
    readingTime,
  }));
}
