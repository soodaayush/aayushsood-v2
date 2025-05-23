"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

import { FaBlog, FaBook } from "react-icons/fa";
import { BsFileEarmarkPersonFill } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/global/header.module.css";

import GitHub from "../../../../public/assets/header-icons/github.svg";
import Linktree from "../../../../public/assets/header-icons/linktree.svg";
import LeetCode from "../../../../public/assets/header-icons/leetcode.svg";
import LinkedIn from "../../../../public/assets/header-icons/linkedin.svg";
import YouTube from "../../../../public/assets/header-icons/youtube.svg";
import titans from "../../../../public/assets/header-icons/titans.webp";
import menu from "../../../../public/assets/header-icons/menu.svg";
import close from "../../../../public/assets/header-icons/close.svg";

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
            <Link className={styles.title} href="/resume">
              <h2>Resume</h2>
            </Link>
          </div>
        </div>
        <div className={styles.links}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
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
            className={styles.button}
          >
            <a href="https://linktr.ee/aayushsood" target="_blank">
              <Image
                src={Linktree}
                width={40}
                height={40}
                alt="Linktree"
                className={styles.svg}
              />
            </a>
          </motion.button>
        </div>
        <div className={styles.menu}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={styles.button}
          >
            <Image
              src={menu}
              width={40}
              height={40}
              alt="Menu"
              onClick={openHamburgerMenu}
              className={styles.svg}
            />
          </motion.button>
        </div>
        <AnimatePresence>
          {hamburgerMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
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
                  className={styles.button}
                >
                  <Image
                    src={close}
                    width={40}
                    height={40}
                    alt="Close"
                    onClick={openHamburgerMenu}
                    className={styles.svg}
                  />
                </motion.button>
              </div>
              <div className={styles.menuSection}>
                <Link
                  className={styles.menuLink}
                  href="/blog"
                  onClick={openHamburgerMenu}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.menuButton}
                  >
                    <h2 className={styles.menuLinkText}>Blog</h2>
                    <div>
                      <FaBlog className={styles.pageIcon} />
                    </div>
                  </motion.div>
                </Link>
                <Link
                  className={styles.menuLink}
                  href="/books"
                  onClick={openHamburgerMenu}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.menuButton}
                  >
                    <h2 className={styles.menuLinkText}>Books</h2>
                    <div>
                      <FaBook className={styles.pageIcon} />
                    </div>
                  </motion.div>
                </Link>
                <Link
                  className={styles.menuLink}
                  href="/resume"
                  onClick={openHamburgerMenu}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.menuButton}
                  >
                    <h2 className={styles.menuLinkText}>Resume</h2>
                    <div>
                      <BsFileEarmarkPersonFill className={styles.pageIcon} />
                    </div>
                  </motion.div>
                </Link>
              </div>
              <div className={styles.menuSection}>
                <a
                  href="https://github.com/soodaayush"
                  target="_blank"
                  className={styles.menuLink}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.menuButton}
                  >
                    <h2 className={styles.menuLinkText}>GitHub</h2>
                    <div>
                      <Image
                        src={GitHub}
                        width={40}
                        height={40}
                        alt="GitHub"
                        className={styles.svg}
                      />
                    </div>
                  </motion.div>
                </a>
                <a
                  href="https://linktr.ee/aayushsood"
                  target="_blank"
                  className={styles.menuLink}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.menuButton}
                  >
                    <h2 className={styles.menuLinkText}>Linktree</h2>
                    <div>
                      <Image
                        src={Linktree}
                        width={40}
                        height={40}
                        alt="LeetCode"
                        className={styles.svg}
                      />
                    </div>
                  </motion.div>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
