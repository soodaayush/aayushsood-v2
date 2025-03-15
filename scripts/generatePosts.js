import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "..", "content/posts");
const outputFile = path.join(process.cwd(), "..", "public", "posts.json");

function generatePostsJson() {
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs.map((slug) => {
    const realSlug = slug.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, slug);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug: realSlug,
      meta: data,
      content: content,
    };
  });

  fs.writeFileSync(outputFile, JSON.stringify(posts, null, 2));
  console.log(`Generated posts.json with ${posts.length} posts.`);
}

generatePostsJson();
