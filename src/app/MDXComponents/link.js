"use client";

import styles from "../styles/blog/link.module.css";

export default function CustomLink({ href, ...props }) {
  return <a className={styles.link} href={href} target="_blank" {...props} />;
}
