"use client";

import { motion } from "motion/react";

import Image from "next/image";
import Link from "next/link";

import styles from "../styles/header.module.css";

import GitHub from "../assets/header-icons/github.svg";
import LeetCode from "../assets/header-icons/leetcode.svg";
import LinkedIn from "../assets/header-icons/linkedin.svg";
import PDF from "../assets/header-icons/pdf.svg";
import YouTube from "../assets/header-icons/youtube.svg";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <Link className={styles.title} href="/">
          <h1>Aayush Sood</h1>
        </Link>
        <Link className={styles.title} href="/blog">
          <h2>Blog</h2>
        </Link>
      </div>
      <div className={styles.links}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          whileDrag={{ scale: 0.9, rotate: 10 }}
          drag
          className={styles.button}
        >
          <Image
            src={GitHub}
            width={40}
            height={40}
            alt="GitHub"
            className={styles.svg}
          />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          whileDrag={{ scale: 0.9, rotate: 10 }}
          drag
          className={styles.button}
        >
          <Image
            src={LeetCode}
            width={40}
            height={40}
            alt="GitHub"
            className={styles.svg}
          />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          whileDrag={{ scale: 0.9, rotate: 10 }}
          drag
          className={styles.button}
        >
          <Image
            src={LinkedIn}
            width={40}
            height={40}
            alt="GitHub"
            className={styles.svg}
          />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          whileDrag={{ scale: 0.9, rotate: 10 }}
          drag
          className={styles.button}
        >
          <Image
            src={PDF}
            width={40}
            height={40}
            alt="GitHub"
            className={styles.svg}
          />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          whileDrag={{ scale: 0.9, rotate: 10 }}
          drag
          className={styles.button}
        >
          <Image
            src={YouTube}
            width={40}
            height={40}
            alt="GitHub"
            className={styles.svg}
          />
        </motion.button>
      </div>
    </div>
  );
}
