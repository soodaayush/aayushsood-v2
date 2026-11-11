import Image from "next/image";

import styles from "../../styles/books/book.module.css";

// Every cover sits in the same 2:3 frame and is fitted inside it, so the grid is even and nothing is cropped.
// The title and cover link to the book (no hover effect); the author links to their page and turns orange on hover.
export default function Book({
  title,
  author,
  cover,
  width,
  height,
  bookLink,
  authorLink,
  position,
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
            // The cell is about 148px wide on desktop and 161px on a phone
            sizes="(max-width: 640px) 42vw, 148px"
            quality={65}
            // Only the first two covers load straight away (high priority); the others load as you scroll, which keeps the first cover fast
            loading={position < 2 ? "eager" : "lazy"}
            fetchPriority={position < 2 ? "high" : "auto"}
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
