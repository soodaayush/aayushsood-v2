import { allBlogs } from "../../../.contentlayer/generated/Blog/_index.mjs";

import styles from "../styles/blog/blog.module.css";

export const metadata = {
  title: "Blog | Aayush Sood",
  description:
    "Discover the posts I've shared and gain insights into the ideas and experiences that have influenced my journey.",
  creator: "Aayush Sood",
  openGraph: {
    title: "Blog | Aayush Sood",
    description:
      "Discover the posts I've shared and gain insights into the ideas and experiences that have influenced my journey.",
    url: "https://www.aayushsood.com/blog",
    siteName: "Aayush Sood's Books",
    images: [
      {
        url: "https://www.aayushsood.com/assets/openGraph/banner.png",
        width: 800,
        height: 600,
        alt: "Aayush Sood's Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Aayush Sood",
    description:
      "Discover the posts I've shared and gain insights into the ideas and experiences that have influenced my journey.",
    images: ["https://www.aayushsood.com/assets/openGraph/banner.png"],
  },
  alternates: {
    canonical: "https://www.aayushsood.com/blog",
  },
};

export default function Blog() {
  return (
    <div className={styles.blogContainer}>
      <div className={`content ${styles.blogContent}`}>
        <div className={styles.blogList}>
          {allBlogs.map((post, index) => (
            <div className={styles.blogPost} key={index}>
              <a
                className={styles.link}
                href={`/blog/${post._raw.flattenedPath.split("/").pop()}`}
              >
                <h2 className={`${styles.title} ${styles.text}`}>
                  {post.title}
                </h2>
                <h3 className={`${styles.date} ${styles.text}`}>
                  {post.date.split("T")[0]}
                </h3>
                <p className={`${styles.description} ${styles.text}`}>
                  {post.description}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
