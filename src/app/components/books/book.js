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
        scale: 1.1,
        transition: { type: "spring", stiffness: 450, damping: 20 },
      }}
      className={styles.bookContainer}
    >
      <Image
        className={styles.image}
        src={props.cover}
        height={450}
        width={300}
        alt={props.title}
      />
      <a className={styles.link} href={props.bookLink} target="_blank">
        <h1 className={styles.bookTitle}>{props.title}</h1>
      </a>
      <a className={styles.link} href={props.authorLink} target="_blank">
        <label className={styles.bookAuthor}>{props.author}</label>
      </a>
    </motion.div>
  );
}
