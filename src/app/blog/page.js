import styles from "../styles/blog/blog.module.css";
import Link from "next/link";

import posts from "../data/blogs.json";

export default function Blog() {
  return (
    <div className={styles.blogContainer}>
      <div className={`content ${styles.blogContent}`}>
        <h1 className={styles.blogTitle}>Blog</h1>
        <div className={styles.blogList}>
          {posts.map((post, index) => (
            <Link
              className={styles.blogPost}
              key={index}
              href={`/blog/${post.id}`}
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
