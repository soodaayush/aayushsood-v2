import styles from "../styles/books/books.module.css";

import books from "../data/books.json";

import Book from "../components/books/book";

export const metadata = {
  title: "Books | Aayush Sood",
  description:
    "Explore the books I've read and get insights into the knowledge that shaped my journey.",
  creator: "Aayush Sood",
  keywords: [
    "books",
    "reading list",
    "Aayush Sood",
    "book recommendations",
    "book reviews",
    "reading",
    "literature",
    "non-fiction",
    "fiction",
  ],
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

const sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));

const itemListStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Books Read by Aayush Sood",
  url: "https://www.aayushsood.com/books",
  description:
    "Explore the books I've read and get insights into the knowledge that shaped my journey.",
  itemListElement: sortedBooks.map((book, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Book",
      name: book.title,
      author: {
        "@type": "Person",
        name: book.author,
      },
      url: book.bookLink,
    },
  })),
};

export default function Books() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListStructuredData),
        }}
      />
      <div className={styles.booksContainer}>
        <div className={`content ${styles.booksContent}`}>
          <h1 className={styles.booksTitle}>
            Collection of books that I&apos;ve read
          </h1>
          <div className={styles.booksList}>
            {sortedBooks.map((book, index) => (
              <Book {...book} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
