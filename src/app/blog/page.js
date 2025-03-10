import { allBlogs } from "../../../.contentlayer/generated/Blog/_index.mjs";

import styles from "../styles/blog/blog.module.css";

export default function Blog() {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogList}>
        {allBlogs.map((post, index) => (
          <div className={styles.blogPost} key={index}>
            <a
              className={styles.link}
              href={`/blog/${post._raw.flattenedPath.split("/").pop()}`}
            >
              <h2 className={styles.title}>{post.title}</h2>
              <h3 className={styles.date}>{post.date.split("T")[0]}</h3>
              <p>{post.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
