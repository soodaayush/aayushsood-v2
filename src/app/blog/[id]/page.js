"use client";

import { useEffect, useState } from "react";
import { allBlogs } from "../../../../.contentlayer/generated/Blog/_index.mjs";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic"; // Dynamic import for MDX components

// Dynamically import MDXRemote and MDXProvider to ensure they are client-side
const MDXRemote = dynamic(
  () => import("next-mdx-remote").then((mod) => mod.MDXRemote),
  { ssr: false }
);
const MDXProvider = dynamic(
  () => import("@mdx-js/react").then((mod) => mod.MDXProvider),
  { ssr: false }
);
import { serialize } from "next-mdx-remote/serialize"; // Also ensure serialize is handled client-side

import CodeBlock from "@/app/MDXComponents/codeBlock";
import CustomImage from "@/app/MDXComponents/image";

import styles from "../../styles/blog/blogPost.module.css";

const MDXComponents = {
  pre: CodeBlock,
  img: CustomImage,
};

export default function BlogPost() {
  const pathname = usePathname();
  const [mdxSource, setMdxSource] = useState(null);
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const slug = pathname.slice(6); // Get slug from URL

    const currentBlog = allBlogs.find((blog) =>
      blog._raw.flattenedPath.endsWith(slug)
    );
    setBlog(currentBlog);

    if (currentBlog) {
      const fetchMdx = async () => {
        try {
          const serializedMdx = await serialize(currentBlog.body.raw);
          setMdxSource(serializedMdx);
          setIsLoading(false); // Set loading to false once content is ready
        } catch (err) {
          console.error("Error serializing MDX:", err);
          setError("Error loading blog content.");
          setIsLoading(false); // Handle the error state and stop loading
        }
      };
      fetchMdx();
    } else {
      setIsLoading(false); // If no blog found, stop loading
      setError("Blog post not found.");
    }
  }, [pathname]);

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading message or spinner
  }

  if (error) {
    return <div>{error}</div>; // Show error if something went wrong
  }

  if (!blog || !mdxSource) {
    return <div>Blog post not found or content error...</div>;
  }

  return (
    <div className={styles.blogPostContainer}>
      <div className={`content ${styles.blogPostContent}`}>
        <div className={styles.details}>
          <h1 className={styles.text}>{blog.title}</h1>
          <p className={styles.text}>{blog.date.split("T")[0]}</p>
        </div>
        {/* Render MDX content */}
        <MDXProvider components={MDXComponents}>
          <MDXRemote {...mdxSource} />
        </MDXProvider>
      </div>
    </div>
  );
}
