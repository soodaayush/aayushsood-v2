"use client";

import { useEffect } from "react";
import Link from "next/link";

import styles from "./styles/global/404.module.css";

// Shown inside the normal layout when a page throws while rendering
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1 className={styles.title}>Something went wrong</h1>
      <p className={styles.label}>Sorry, this page could not be loaded.</p>
      <div className={styles.actions}>
        <button type="button" className={styles.link} onClick={reset}>
          Try again
        </button>
        <Link className={styles.link} href="/">
          Go Home
        </Link>
      </div>
    </div>
  );
}
