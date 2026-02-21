"use client";

import { motion } from "motion/react";

import styles from "../../styles/global/footer.module.css";

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={styles.footerContainer}
    >
      <div className={`content ${styles.footerContent}`}>
        <div>
          <p>© 2023 - Present Aayush Sood. All Rights Reserved.</p>
        </div>
        <div>
          <a className={styles.contact} href="mailto:aayush.sood@icloud.com">
            Contact
          </a>
        </div>
      </div>
    </motion.div>
  );
}
