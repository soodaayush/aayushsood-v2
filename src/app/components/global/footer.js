import styles from "../../styles/global/footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={`content ${styles.footerContent}`}>
        <div>
          <label>© 2023 - Present Aayush Sood. All Rights Reserved.</label>
        </div>
        <div>
          <a className={styles.contact} href="mailto:aayush.sood@icloud.com">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
