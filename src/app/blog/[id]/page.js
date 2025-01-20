import { promises as fs } from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import styles from "../../styles/blog/blogPost.module.css";
import { MDXComponents } from "../../MDXComponents/MDXComponents";

export const runtime = "edge";

export default async function BlogPost({ params }) {
  const { id } = await params;

  try {
    const filePath = path.join(process.cwd(), "src/app/posts", `${id}.mdx`);
    const source = await fs.readFile(filePath, "utf-8");

    const { content, data: frontmatter } = matter(source);

    const components = {};

    return (
      <div className={styles.blogPostContainer}>
        <div className={`content ${styles.blogPostContent}`}>
          <h1>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
          <MDXRemote
            source={content}
            components={MDXComponents}
            options={{
              parseFrontmatter: true,
              mdxOptions: {
                development: process.env.NODE_ENV === "development",
              },
            }}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error reading MDX file:", error);
    return <p>Post not found. Please check the console for errors.</p>;
  }
}
