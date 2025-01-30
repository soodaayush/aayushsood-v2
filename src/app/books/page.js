import styles from "../styles/books/books.module.css";

import books from "../data/books.json";

import Book from "../components/books/book";

export default function Books() {
  return (
    <div className={styles.booksContainer}>
      <div className={`content ${styles.booksContent}`}>
        <h1 className={styles.booksTitle}>Reading List</h1>
        <div className={styles.booksList}>
          {books
            .sort((a, b) => a.title.localeCompare(b.title))
            .map((book, index) => (
              <Book {...book} key={index} />
            ))}
        </div>
      </div>
    </div>
  );
}
