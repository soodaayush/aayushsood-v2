import Image from "next/image";
import styles from "../styles/blog.module.css";

export default function Books() {
  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Collection of Books I have Read</h1>
    </div>
  );
}
