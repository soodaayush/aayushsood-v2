import Image from "next/image";
import styles from "../styles/blog.module.css";

export default function Home() {
  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Blog</h1>
    </div>
  );
}
