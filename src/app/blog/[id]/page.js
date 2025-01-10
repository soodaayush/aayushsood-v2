"use client";

import { usePathname } from "next/navigation";
import blogData from "../../data/blogs.json";
import Image from "next/image";

import styles from "../../styles/blog/blogPost.module.css";

export default function BlogPostPage() {
  const id = usePathname().slice(6);
  const post = blogData.find((post) => post.id === id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className={styles.blogPostContainer}>
      <div className={`content ${styles.blogPostContent}`}>
        <h1>{post.title}</h1>
        <p>{post.date}</p>
        <div>
          {post.content.map((block, index) => {
            switch (block.type) {
              case "paragraph":
                return <p key={index}>{block.text}</p>;
              case "image":
                return (
                  <div key={index}>
                    <Image
                      src={block.src}
                      alt={block.alt}
                      width={800}
                      height={400}
                      className={styles.image}
                    />
                  </div>
                );
              case "code":
                return (
                  <pre key={index} className={styles.code}>
                    <code>{block.content}</code>
                  </pre>
                );
              case "video":
                return (
                  <div key={index} className={styles.videoContainer}>
                    <iframe
                      width="800"
                      height="450"
                      src={block.src}
                      title={block.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}
