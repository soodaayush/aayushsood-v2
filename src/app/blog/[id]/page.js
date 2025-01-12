// app/blog/[id]/page.js

import { MDXRemote } from "next-mdx-remote/rsc";
import { promises as fs } from "fs";
import path from "path";

import styles from "../../styles/blog/blogPost.module.css";

// Fetch the blog post data based on the ID (slug)
export default async function BlogPost({ params }) {
  console.log(params);

  const content = await fs.readFile(
    path.join(process.cwd(), "src/app/posts", `${params.projectSlug}.mdx`),
    "utf-8"
  );

  const data =
    (await compileMDX) <
    Frontmatter >
    {
      source: content,
      options: {
        parseFrontmatter: true,
      },
    };

  return (
    <div className={styles.blogPostContainer}>
      <div className={`content ${styles.blogPostContent}`}>
        {/* <h1>{data.title}</h1>
        <p>{data.date}</p> */}
        {data.content}
      </div>
    </div>
  );
}
