"use client";

import { motion } from "motion/react";
import Link from "next/link";

import styles from "./styles/global/404.module.css";

import { GoArrowUpLeft } from "react-icons/go";

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <div className={`content ${styles.notFoundContent}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={styles.headerText}>Not Found</h1>
          <p className={styles.labelText}>
            Sorry, there is nothing at this URL.
          </p>
          <Link className={styles.link} href="/">
            <GoArrowUpLeft />
            Go Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
