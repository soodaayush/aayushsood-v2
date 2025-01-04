import styles from "../styles/books/books.module.css";

import nineteenEightyFour from "../assets/books/1984.jpg";
import oneHundredYearsOfSolitude from "../assets/books/one-hundred-years-of-solitude.jpg";
import moonwalkingWithEinstein from "../assets/books/moonwalking-with-einstein.jpg";
import dune from "../assets/books/dune.jpg";

import Book from "../components/books/book";

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
  {
    title: "Moonwalking with Einstein",
    author: "Joshua Foer",
    cover: moonwalkingWithEinstein,
    bookLink: "https://a.co/d/chyGiZZ",
    authorLink: "https://www.amazon.ca/stores/Joshua-Foer/author/B003Z9NQW2",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    cover: dune,
    bookLink: "https://a.co/d/fkVEtny",
    authorLink: "https://www.amazon.ca/stores/Frank-Herbert/author/B000APO5OM",
  },
];

export default function Books() {
  return (
    <div className={styles.booksContainer}>
      <div className={`content ${styles.booksContent}`}>
        <h1 className={styles.booksTitle}>Reading List</h1>
        <div className={styles.booksList}>
          {books.map((book, index) => (
            <Book {...book} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
