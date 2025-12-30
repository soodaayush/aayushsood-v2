"use client";
import { useEffect, useState } from "react";

import styles from "../../styles/blog/backToTopButton.module.css";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={scrollToTop} className={styles.backToTop} name="Back to top">
      <h1 className={styles.text}>↑ Back to Top</h1>
    </button>
  );
}
