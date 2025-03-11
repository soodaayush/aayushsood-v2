import Link from "next/link";
import { getPosts } from "../../../utils/fetchPosts";

import styles from "../styles/blog/blog.module.css";

export default function BlogIndex() {
  const posts = getPosts();

  return (
    <div className={styles.blogContainer}>
      <div className={`content ${styles.blogContent}`}>
        <h1 className={styles.blogTitle}>Blog</h1>
        <div className={styles.blogList}>
          {posts.map((post) => (
            <Link
              className={styles.blogPost}
              key={post.slug}
              href={`/blog/${post.slug}`}
            >
              <h1 className={`${styles.text} ${styles.title}`}>
                {post.meta.title}
              </h1>
              <p className={`${styles.text} ${styles.date}`}>
                {post.meta.date}
              </p>
              <p className={`${styles.text} ${styles.date}`}>
                {post.meta.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
