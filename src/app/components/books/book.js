import Image from "next/image";

import styles from "../../styles/books/book.module.css";

// Every cover sits in the same 2:3 frame and is fitted inside it, so the grid is even and nothing is cropped.
// The title and cover link to the book, the author to their page. No hover effects.
export default function Book({
  title,
  author,
  cover,
  width,
  height,
  bookLink,
  authorLink,
  eager,
}) {
  return (
    <div className={styles.book}>
      <a
        href={bookLink}
        title={title.trim()}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.frame}>
          <Image
            className={styles.cover}
            src={cover}
            alt={`Cover of ${title}`}
            width={width}
            height={height}
            sizes="(max-width: 640px) 45vw, 170px"
            loading={eager ? "eager" : "lazy"}
          />
        </div>
        <div className={styles.title}>{title}</div>
      </a>
      <a
        className={styles.author}
        href={authorLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {author}
      </a>
    </div>
  );
}
