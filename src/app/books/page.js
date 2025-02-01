import styles from "../styles/books/books.module.css";

import books from "../data/books.json";

import Book from "../components/books/book";

export const metadata = {
  title: "Books | Aayush Sood",
  description:
    "Explore the books I've read and get insights into the knowledge that shaped my journey.",
  creator: "Aayush Sood",
  openGraph: {
    title: "Books | Aayush Sood",
    description:
      "Explore the books I've read and get insights into the knowledge that shaped my journey.",
    url: "https://www.aayushsood.com/books",
    siteName: "Aayush Sood's Books",
    images: [
      {
        url: "https://www.aayushsood.com/assets/openGraph/banner.png",
        width: 800,
        height: 600,
        alt: "Aayush Sood's Books",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Books | Aayush Sood",
    description:
      "Explore the books I've read and get insights into the knowledge that shaped my journey.",
    images: ["https://www.aayushsood.com/assets/openGraph/banner.png"],
  },
  alternates: {
    canonical: "https://www.aayushsood.com/books",
  },
};

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
