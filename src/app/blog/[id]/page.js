"use client";

import { allBlogs } from "../../../../.contentlayer/generated/Blog/_index.mjs";
import { usePathname } from "next/navigation";
import { MDXProvider } from "@mdx-js/react";

import { MDXComponents } from "../../MDXComponents/MDXComponents";

import styles from "../../styles/blog/blogPost.module.css";

export default function BlogPost() {
  const slug = usePathname().slice(6);

  const blog = allBlogs.find((blog) => blog._raw.flattenedPath.endsWith(slug));

  if (!blog) {
    return <div>Blog post not found</div>;
  }

  const blogContent =
    blog.body?.html || blog.body?.raw || "Content not available";

  return (
    <div className={styles.blogPostContainer}>
      <div className={`content ${styles.blogPostContent}`}>
        <h1 className={styles.text}>{blog.title}</h1>
        <p className={styles.text}>{blog.date.split("T")[0]}</p>
        <MDXProvider components={MDXComponents}>
          <div dangerouslySetInnerHTML={{ __html: blogContent }} />
        </MDXProvider>
      </div>
    </div>
  );
}
