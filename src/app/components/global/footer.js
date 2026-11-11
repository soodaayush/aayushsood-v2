import styles from "../../styles/global/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2023 - Present Aayush Sood. All Rights Reserved.</p>
      <a className={styles.contact} href="mailto:aayush.sood@uwaterloo.ca">
        Contact
      </a>
    </footer>
  );
}
