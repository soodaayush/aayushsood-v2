import styles from "../styles/blog/blog.module.css";
import Image from "next/image";

import Link from "next/link";

import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export default async function Blog() {
  const filenames = await fs.readdir(path.join(process.cwd(), "src/app/posts"));

  const blogPosts = await Promise.all(
    filenames.map(async (filename) => {
      const content = await fs.readFile(
        path.join(process.cwd(), "src/app/posts", filename),
        "utf-8"
      );

      const { frontmatter } = await compileMDX({
        source: content,
        options: {
          parseFrontmatter: true,
        },
      });

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
