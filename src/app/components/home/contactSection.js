import styles from "../../styles/home/home.module.css";

export default function Contact() {
  return (
    <>
      <h2 className={styles.heading}>/ contact</h2>
      <p className={styles.contact}>
        <a className={styles.email} href="mailto:aayush.sood@icloud.com">
          aayush.sood@icloud.com
        </a>
      </p>
      <p className={`${styles.mono} ${styles.contactLinks}`}>
        <a
          href="https://github.com/soodaayush"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>
        <a
          href="https://www.linkedin.com/in/soodaayush/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin
        </a>
        <a
          href="https://linktr.ee/aayushsood"
          target="_blank"
          rel="noopener noreferrer"
        >
          linktree
        </a>
      </p>
    </>
  );
}
