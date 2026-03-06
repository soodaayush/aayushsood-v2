"use client";

import { motion } from "motion/react";
import Image from "next/image";

import styles from "../../styles/books/book.module.css";

export default function Book(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.03,
        transition: { type: "spring", stiffness: 450, damping: 20 },
      }}
      className={styles.bookCard}
    >
      <div className={styles.coverWrapper}>
        <Image
          className={styles.image}
          src={props.cover}
          height={450}
          width={300}
          alt={props.title}
          sizes="(max-width: 600px) 45vw, (max-width: 1000px) 25vw, 15vw"
        />
        <div className={styles.overlay}>
          {props.rating && (
            <div
              className={styles.stars}
              aria-label={`Rating: ${props.rating} out of 5`}
            >
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={
                    i < props.rating ? styles.starFilled : styles.starEmpty
                  }
                >
                  ★
                </span>
              ))}
            </div>
          )}
          <h3 className={styles.bookTitle}>{props.title}</h3>
          <a
            className={styles.bookAuthor}
            href={props.authorLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.author}
          </a>
          <a
            className={styles.viewLink}
            href={props.bookLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Amazon →
          </a>
        </div>
      </div>
    </motion.div>
  );
}
