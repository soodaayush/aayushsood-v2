import postsData from "../public/posts.json";

export function getPosts() {
  return postsData.sort(
    (a, b) => new Date(b.meta.date) - new Date(a.meta.date)
  );
}

export function getPostBySlug(slug) {
  return postsData.find((post) => post.slug === slug);
}
