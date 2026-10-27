"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

import { FaBlog, FaBook, FaGithub, FaMoon, FaSun } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose, IoSearch } from "react-icons/io5";
import { BsFileEarmarkPersonFill } from "react-icons/bs";

import Link from "next/link";

import styles from "../../styles/global/header.module.css";

const HOVER_SPRING = { type: "spring", stiffness: 450, damping: 20 };

export default function Header() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const { theme, setTheme } = useTheme();
  // false during SSR, true on the client — the theme is only known on the client,
  // so only the theme icon waits for this; the rest of the header renders on the server
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  function openHamburgerMenu() {
    setHamburgerMenu(!hamburgerMenu);
  }

  return (
    <div className={styles.container}>
      <div className={`content ${styles.headerContent}`}>
        <div className={styles.name}>
          <Link className={styles.title} href="/">
            <span className={styles.brand}>Aayush Sood</span>
          </Link>
          <div className={styles.pages}>
            <Link className={styles.title} href="/blog">
              <span className={styles.navText}>Blog</span>
            </Link>
            <Link className={styles.title} href="/books">
              <span className={styles.navText}>Books</span>
            </Link>
            <a
              className={styles.title}
              href="/assets/resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.navText}>Resume</span>
            </a>
          </div>
        </div>
        <div className={styles.links}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={HOVER_SPRING}
            className={styles.button}
            onClick={() => window.dispatchEvent(new CustomEvent("open-search"))}
            aria-label="Search"
          >
            <IoSearch className={styles.pageIcon} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={HOVER_SPRING}
            className={styles.button}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            aria-label="Toggle theme"
          >
            {!mounted ? (
              // Same size as the icon so the header doesn't shift once it appears
              <span className={styles.pageIcon} />
            ) : (
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
            )}
          </motion.button>
          <motion.a
            href="https://github.com/soodaayush"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={HOVER_SPRING}
            className={styles.button}
            aria-label="GitHub"
          >
            <FaGithub className={styles.pageIcon} />
          </motion.a>
          <motion.a
            href="https://linktr.ee/aayushsood"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={HOVER_SPRING}
            className={styles.button}
            aria-label="Linktree"
          >
            <SiLinktree className={styles.pageIcon} />
          </motion.a>
        </div>
        <div className={styles.menu}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={HOVER_SPRING}
            className={styles.button}
            aria-label="Open navigation menu"
            aria-expanded={hamburgerMenu}
            onClick={openHamburgerMenu}
          >
            <RxHamburgerMenu className={styles.pageIcon} />
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
                  transition={HOVER_SPRING}
                  className={styles.button}
                  aria-label="Close navigation menu"
                  onClick={openHamburgerMenu}
                >
                  <IoClose className={styles.pageIcon} />
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
                    transition={HOVER_SPRING}
                    className={styles.menuButton}
                  >
                    <span className={styles.menuLinkText}>Blog</span>
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
                    transition={HOVER_SPRING}
                    className={styles.menuButton}
                  >
                    <span className={styles.menuLinkText}>Books</span>
                    <div>
                      <FaBook className={styles.pageIcon} />
                    </div>
                  </motion.div>
                </Link>
                <a
                  className={styles.menuLink}
                  href="/assets/resume/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={openHamburgerMenu}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={HOVER_SPRING}
                    className={styles.menuButton}
                  >
                    <span className={styles.menuLinkText}>Resume</span>
                    <div>
                      <BsFileEarmarkPersonFill className={styles.pageIcon} />
                    </div>
                  </motion.div>
                </a>
              </div>
              <div className={styles.menuSection}>
                <div className={styles.menuLink}>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={HOVER_SPRING}
                    className={`${styles.menuButton} ${styles.menuButtonReset}`}
                    onClick={() => {
                      openHamburgerMenu();
                      window.dispatchEvent(new CustomEvent("open-search"));
                    }}
                  >
                    <span className={styles.menuLinkText}>Search</span>
                    <div>
                      <IoSearch className={styles.pageIcon} />
                    </div>
                  </motion.button>
                </div>
                <div className={styles.menuLink}>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={HOVER_SPRING}
                    className={`${styles.menuButton} ${styles.menuButtonReset}`}
                    onClick={() =>
                      setTheme(theme === "light" ? "dark" : "light")
                    }
                  >
                    <span className={styles.menuLinkText}>Theme</span>
                    <div>
                      {theme === "light" ? (
                        <FaMoon className={styles.pageIcon} />
                      ) : (
                        <FaSun className={styles.pageIcon} />
                      )}
                    </div>
                  </motion.button>
                </div>
                <a
                  href="https://github.com/soodaayush"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.menuLink}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={HOVER_SPRING}
                    className={styles.menuButton}
                  >
                    <span className={styles.menuLinkText}>GitHub</span>
                    <div>
                      <FaGithub className={styles.pageIcon} />
                    </div>
                  </motion.div>
                </a>
                <a
                  href="https://linktr.ee/aayushsood"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.menuLink}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={HOVER_SPRING}
                    className={styles.menuButton}
                  >
                    <span className={styles.menuLinkText}>Linktree</span>
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
