import posts from "../../../public/posts.json";

const siteUrl = "https://www.aayushsood.com";

export const dynamic = "force-static";

function escapeXml(text) {
  return (text ?? "")
    .toString()
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.meta.date) - new Date(a.meta.date),
  );

  const items = sortedPosts
    .map((post) => {
      const url = `${siteUrl}/blog/${post.slug}`;
      return `    <item>
      <title>${escapeXml(post.meta.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
      <description>${escapeXml(post.meta.description)}</description>
    </item>`;
    })
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Aayush Sood's Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Browse my stories ranging from life to technology to anything I desire to write about.</description>
    <language>en-us</language>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
