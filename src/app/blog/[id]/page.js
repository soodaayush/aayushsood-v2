"use client";

import { usePathname } from "next/navigation";
import { getPostBySlug } from "../../../../utils/fetchPosts";
import { MDXRemote } from "next-mdx-remote";
import { useState, useEffect } from "react";
import { serialize } from "next-mdx-remote/serialize";

import styles from "../../styles/blog/blogPost.module.css";

import CodeBlock from "@/app/MDXComponents/codeBlock";
import CustomImage from "@/app/MDXComponents/image";

const components = {
  img: CustomImage,
  pre: CodeBlock,
};

export default function BlogPost() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const [post, setPost] = useState(null);
  const [mdxContent, setMdxContent] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const fetchedPost = getPostBySlug(slug);
      if (fetchedPost) {
        const serializedContent = await serialize(fetchedPost.content);
        setPost(fetchedPost);
        setMdxContent(serializedContent);
      }
    }
    fetchPost();
  }, [slug]);

  if (!post || !mdxContent) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.blogPostContainer}>
      <div className={`content ${styles.blogPostContent}`}>
        <h1>{post.meta.title}</h1>
        <p>{post.meta.date}</p>
        <MDXRemote components={components} {...mdxContent} />
      </div>
    </div>
  );
}
