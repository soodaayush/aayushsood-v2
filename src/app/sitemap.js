import { getPosts } from "../../utils/fetchPosts";

const siteUrl = "https://www.aayushsood.com";

export default function sitemap() {
  const now = new Date();

  const pages = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/books`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const posts = getPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.meta.updated ?? post.meta.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...pages, ...posts];
}
