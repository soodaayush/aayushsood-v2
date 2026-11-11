import Image from "next/image";

import styles from "../../styles/books/book.module.css";

const FRAME_RATIO = 2 / 3;

// The cover is drawn at its own proportions inside a 2:3 frame, so nothing is cropped.
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
  const ratio = width / height;
  const coverStyle = {
    width: `${Math.min(1, ratio / FRAME_RATIO) * 100}%`,
    height: `${Math.min(1, FRAME_RATIO / ratio) * 100}%`,
  };

  return (
    <div className={styles.book}>
      <a href={bookLink} target="_blank" rel="noopener noreferrer">
        <div className={styles.frame}>
          <Image
            className={styles.cover}
            style={coverStyle}
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
