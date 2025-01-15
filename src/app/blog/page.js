import styles from "../styles/blog/blog.module.css";

import Link from "next/link";

import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

// import posts from "../data/blogs.json";

export default async function Blog() {
  const filenames = await fs.readdir(path.join(process.cwd(), "src/app/posts"));

  const blogPosts = await Promise.all(
    filenames.map(async (filename) => {
      const content = await fs.readFile(
        path.join(process.cwd(), "src/app/posts", filename),
        "utf-8"
      );
      console.log(filenames);
      console.log("MDX Source Content:", content);

      const { frontmatter, content: compiledContent } = await compileMDX({
        source: content,
        options: {
          parseFrontmatter: true,
        },
      });

      console.log("Frontmatter:", frontmatter);
      console.log("Compiled Content:", compiledContent);
      return {
        filename,
        slug: filename.replace(".mdx", ""),
        ...frontmatter,
      };
    })
  );

  return (
    <div className={styles.blogContainer}>
      <div className={`content ${styles.blogContent}`}>
        <h1 className={styles.blogTitle}>Blog</h1>
        <div className={styles.blogList}>
          {blogPosts.map((post, index) => (
            <Link
              className={styles.blogPost}
              key={index}
              href={`/blog/${post.slug}`}
            >
              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.date}>{post.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
