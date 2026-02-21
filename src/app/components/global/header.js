"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { FaBlog, FaBook, FaGithub, FaMoon, FaSun } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { BsFileEarmarkPersonFill } from "react-icons/bs";

import Link from "next/link";

import styles from "../../styles/global/header.module.css";

export default function Header() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

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
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            name="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === "light" ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <FaMoon className={styles.pageIcon} />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <FaSun className={styles.pageIcon} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={styles.button}
            name="GitHub"
          >
            <a href="https://github.com/soodaayush" target="_blank">
              <FaGithub className={styles.pageIcon} />
            </a>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={styles.button}
            name="Linktree"
          >
            <a href="https://linktr.ee/aayushsood" target="_blank">
              <SiLinktree className={styles.pageIcon} />
            </a>
          </motion.button>
        </div>
        <div className={styles.menu}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={styles.button}
            name="Mobile navigation menu"
          >
            <RxHamburgerMenu
              onClick={openHamburgerMenu}
              className={styles.pageIcon}
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
                  name="Close mobile navigation menu"
                >
                  <IoClose
                    onClick={openHamburgerMenu}
                    className={styles.pageIcon}
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
                <div className={styles.menuLink}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={styles.menuButton}
                    onClick={() =>
                      setTheme(theme === "light" ? "dark" : "light")
                    }
                  >
                    <h2 className={styles.menuLinkText}>Theme</h2>
                    <div>
                      {theme === "light" ? (
                        <FaMoon className={styles.pageIcon} />
                      ) : (
                        <FaSun className={styles.pageIcon} />
                      )}
                    </div>
                  </motion.div>
                </div>
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
                      <FaGithub className={styles.pageIcon} />
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
                      <SiLinktree className={styles.pageIcon} />
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
