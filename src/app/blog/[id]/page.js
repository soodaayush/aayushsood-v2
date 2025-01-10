"use client";

import { useRouter } from "next/router";
import blogData from "../../data/blogs.json";
import Image from "next/image";

export default function BlogPostPage() {
  const router = useRouter();
  const { id } = router.query;
  const post = blogData.find((post) => post.id === id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div className={styles.container}>
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
                <div key={index}>
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
  );
}
