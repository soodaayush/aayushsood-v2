import Image from "next/image";
import styles from "../styles/book.module.css";

export default function Book(props) {
  return (
    <div className={styles.bookContainer}>
      <Image
        className={styles.image}
        src={props.cover}
        height={450}
        width={300}
        alt={props.title}
      />
      <a className={styles.link} href={props.bookLink} target="_blank">
        <h3 className={styles.bookTitle}>{props.title}</h3>
      </a>
      <a className={styles.link} href={props.authorLink} target="_blank">
        <label className={styles.bookAuthor}>{props.author}</label>
      </a>
    </div>
  );
}
