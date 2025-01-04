"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/global/header.module.css";
import GitHub from "../../assets/header-icons/github.svg";
import LeetCode from "../../assets/header-icons/leetcode.svg";
import LinkedIn from "../../assets/header-icons/linkedin.svg";
import PDF from "../../assets/header-icons/pdf.svg";
import YouTube from "../../assets/header-icons/youtube.svg";
import menu from "../../assets/header-icons/menu.svg";

export default function Header() {
  const [hideIcons, setHideIcons] = useState(false);

  useEffect(() => {
    const updateIcon = () => {
      const width = window.innerWidth;

      if (width <= 700) {
        setHideIcons(true);
      } else {
        setHideIcons(false);
      }
    };

    updateIcon();

    window.addEventListener("resize", updateIcon);
  }, []);

  return (
    <div className={styles.container}>
      <div className={`content ${styles.headerContent}`}>
        <div className={styles.name}>
          <Link className={styles.title} href="/">
            <h1>Aayush Sood</h1>
          </Link>
          <Link className={styles.title} href="/blog">
            <h2>Blog</h2>
          </Link>
          <Link className={styles.title} href="/books">
            <h2>Books</h2>
          </Link>
        </div>
        {!hideIcons && (
          <div className={styles.links}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              whileDrag={{ scale: 0.9, rotate: 10 }}
              drag
              className={styles.button}
            >
              <a href="https://github.com/soodaayush" target="_blank">
                <Image
                  src={GitHub}
                  width={40}
                  height={40}
                  alt="GitHub"
                  className={styles.svg}
                />
              </a>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              whileDrag={{ scale: 0.9, rotate: 10 }}
              drag
              className={styles.button}
            >
              <a href="https://leetcode.com/u/soodaayush/" target="_blank">
                <Image
                  src={LeetCode}
                  width={40}
                  height={40}
                  alt="LeetCode"
                  className={styles.svg}
                />
              </a>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              whileDrag={{ scale: 0.9, rotate: 10 }}
              drag
              className={styles.button}
            >
              <a href="https://www.linkedin.com/in/soodaayush/" target="_blank">
                <Image
                  src={LinkedIn}
                  width={40}
                  height={40}
                  alt="GitHub"
                  className={styles.svg}
                />
              </a>
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
              <a href="https://www.youtube.com/@soodaayush" target="_blank">
                <Image
                  src={YouTube}
                  width={40}
                  height={40}
                  alt="GitHub"
                  className={styles.svg}
                />
              </a>
            </motion.button>
          </div>
        )}
        {hideIcons && (
          <div className={styles.links}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              whileDrag={{ scale: 0.9, rotate: 10 }}
              drag
              className={styles.button}
            >
              <Image
                src={menu}
                width={40}
                height={40}
                alt="GitHub"
                className={styles.svg}
              />
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
}
