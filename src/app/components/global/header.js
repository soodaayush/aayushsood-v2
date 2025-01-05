"use client";

import { motion } from "motion/react";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/global/header.module.css";
import GitHub from "../../assets/header-icons/github.svg";
import LeetCode from "../../assets/header-icons/leetcode.svg";
import LinkedIn from "../../assets/header-icons/linkedin.svg";
import PDF from "../../assets/header-icons/pdf.svg";
import YouTube from "../../assets/header-icons/youtube.svg";
import titans from "../../assets/header-icons/titans.png";
import menu from "../../assets/header-icons/menu.svg";
import close from "../../assets/header-icons/close.svg";

export default function Header() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  function openHamburgerMenu() {
    setHamburgerMenu(!hamburgerMenu);
  }

  return (
    <div className={styles.container}>
      <div className={`content ${styles.headerContent}`}>
        <div className={styles.name}>
          <Link className={styles.title} href="/">
            <h1>Aayush Sood</h1>
          </Link>
          <div className={styles.pages}>
            <Link className={styles.title} href="/blog">
              <h2>Blog</h2>
            </Link>
            <Link className={styles.title} href="/books">
              <h2>Books</h2>
            </Link>
          </div>
        </div>
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
            <a href="../../assets/resume/resume.pdf" target="_blank">
              <Image
                src={PDF}
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
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            whileDrag={{ scale: 0.9, rotate: 10 }}
            drag
            className={styles.button}
          >
            <a href="https://titansmaaf.ca/" target="_blank">
              <Image
                src={titans}
                width={40}
                height={40}
                alt="Titans MMA"
                className={styles.svg}
              />
            </a>
          </motion.button>
        </div>
        <div className={styles.menu}>
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
              onClick={openHamburgerMenu}
              className={styles.svg}
            />
          </motion.button>
        </div>
        {hamburgerMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.5,
              opacity: { duration: 0.3 },
              height: { duration: 0.5, ease: "easeInOut" },
            }}
            style={{ overflow: "hidden" }}
            className={styles.headerMenu}
          >
            <div className={styles.menuClose}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                whileDrag={{ scale: 0.9, rotate: 10 }}
                drag
                className={styles.button}
              >
                <Image
                  src={close}
                  width={40}
                  height={40}
                  alt="GitHub"
                  onClick={openHamburgerMenu}
                  className={styles.svg}
                />
              </motion.button>
            </div>
            <div className={styles.menuPages}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                whileDrag={{ scale: 0.9, rotate: 10 }}
                className={styles.menuButton}
                drag
              >
                <div>Blog</div>
                <div>Something</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                whileDrag={{ scale: 0.9, rotate: 10 }}
                className={styles.menuButton}
                drag
              >
                <div>Books</div>
                <div>Something</div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
