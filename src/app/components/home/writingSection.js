import Link from "next/link";

import { formatMonthYear } from "../../../../utils/formatDate";

import styles from "../../styles/home/home.module.css";

export default function Writing({ posts, bookCount }) {
  return (
    <>
      <h2 className={styles.heading}>/ writing</h2>
      <div>
        {posts.map((post) => (
          <Link
            key={post.slug}
            className={styles.row}
            href={`/blog/${post.slug}`}
          >
            <span>{post.meta.title}</span>
            <span className={styles.mono}>
              {formatMonthYear(post.meta.date)}
            </span>
          </Link>
        ))}
      </div>
      <p className={`${styles.mono} ${styles.more}`}>
        <Link href="/blog">all posts →</Link>
        <Link href="/books">{bookCount} books i&apos;ve read →</Link>
      </p>
    </>
  );
}
