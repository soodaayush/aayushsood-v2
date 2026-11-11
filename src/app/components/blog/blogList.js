import Link from "next/link";

import { formatMonthYear } from "../../../../utils/formatDate";

import styles from "../../styles/blog/blog.module.css";

export default function BlogList({ posts }) {
  return (
    <div data-width="760">
      <h1 className={styles.title}>Blog</h1>
      <p className={styles.count}>
        {posts.length} {posts.length === 1 ? "post" : "posts"}
      </p>
      <div className={styles.list}>
        {posts.map((post) => (
          <Link
            key={post.slug}
            className={styles.row}
            href={`/blog/${post.slug}`}
          >
            <span className={styles.date}>
              {formatMonthYear(post.meta.date)}
            </span>
            <span className={styles.chip}>{post.readingTime} min read</span>
            <span className={styles.text}>
              <b className={styles.postTitle}>{post.meta.title}</b>
              <br />
              <span className={styles.description}>
                {post.meta.description}
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
