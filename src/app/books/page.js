import styles from "../styles/books.module.css";

import nineteenEightyFour from "../assets/books/1984.jpg";
import oneHundredYearsOfSolitude from "../assets/books/one-hundred-years-of-solitude.jpg";

import Book from "../components/book";

const books = [
  {
    title: "1984",
    author: "George Orwell",
    cover: nineteenEightyFour,
    bookLink: "https://a.co/d/1f1wlKi",
    authorLink: "https://www.amazon.ca/stores/George-Orwell/author/B000AQ0KKY",
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    cover: oneHundredYearsOfSolitude,
    bookLink: "https://a.co/d/2uLHEjo",
    authorLink:
      "https://www.amazon.ca/stores/Gabriel-García-Márquez/author/B00MBVAZZQ",
  },
];

export default function Books() {
  return (
    <div className={styles.booksContainer}>
      <div className={`content ${styles.booksContent}`}>
        <h1 className={styles.booksTitle}>Collection of Books I have Read</h1>
        <div className={styles.booksList}>
          {books.map((book, index) => (
            <Book {...book} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
