import Image from "next/image";

import styles from "../../styles/books/book.module.css";

// Plain cover, title and author. The title and cover link to the book, the author to their page. No hover effects.
export default function Book({
  title,
  author,
  cover,
  bookLink,
  authorLink,
  eager,
}) {
  return (
    <div className={styles.book}>
      <a href={bookLink} target="_blank" rel="noopener noreferrer">
        <Image
          className={styles.cover}
          src={cover}
          alt={`Cover of ${title}`}
          width={300}
          height={450}
          sizes="(max-width: 640px) 45vw, 170px"
          loading={eager ? "eager" : "lazy"}
        />
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
