"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { FaBlog, FaBook, FaCode, FaStar, FaHome } from "react-icons/fa";
import { IoSearch, IoClose } from "react-icons/io5";

import rawPosts from "../../../../public/posts.json";
import projects from "../../data/projects.json";
import books from "../../data/books.json";
import interests from "../../data/interests.json";

import styles from "../../styles/global/commandPalette.module.css";

const TYPE_ICONS = {
  Page: FaHome,
  Post: FaBlog,
  Project: FaCode,
  Book: FaBook,
  Interest: FaStar,
};

const TYPE_LABELS = {
  Page: "Pages",
  Post: "Blog Posts",
  Project: "Projects",
  Book: "Books",
  Interest: "Interests",
};

const TYPE_ORDER = ["Page", "Post", "Project", "Book", "Interest"];

const PAGES = [
  { title: "Home", subtitle: "Welcome, projects, interests", href: "/", search: "home welcome" },
  { title: "Blog", subtitle: "All blog posts", href: "/blog", search: "blog posts articles" },
  { title: "Books", subtitle: "Books I've read", href: "/books", search: "books reading" },
  { title: "Resume", subtitle: "My resume and experience", href: "/resume", search: "resume cv experience" },
];

const searchIndex = [
  ...PAGES.map((pg) => ({
    type: "Page",
    title: pg.title,
    subtitle: pg.subtitle,
    href: pg.href,
    search: pg.search,
    external: false,
  })),
  ...rawPosts.map((p) => ({
    type: "Post",
    title: p.meta.title,
    subtitle: p.meta.description,
    href: `/blog/${p.slug}`,
    search: [p.meta.title, p.meta.description, ...(p.meta.tags ?? []), ...(p.meta.keywords ?? [])].join(" ").toLowerCase(),
    external: false,
  })),
  ...projects.map((p) => ({
    type: "Project",
    title: p.name,
    subtitle: p.description,
    href: p.github,
    search: [p.name, p.description, ...p.tags].join(" ").toLowerCase(),
    external: true,
  })),
  ...books.map((b) => ({
    type: "Book",
    title: b.title,
    subtitle: b.author,
    href: b.bookLink,
    search: [b.title, b.author].join(" ").toLowerCase(),
    external: true,
  })),
  ...interests.map((i) => ({
    type: "Interest",
    title: i.name,
    subtitle: i.description.length > 90 ? i.description.slice(0, 90) + "…" : i.description,
    href: "/#interests",
    search: [i.name, i.description].join(" ").toLowerCase(),
    external: false,
  })),
];

function runSearch(query) {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return searchIndex.filter((item) => item.search.includes(q));
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const router = useRouter();

  const results = runSearch(query);
  const grouped = TYPE_ORDER.reduce((acc, type) => {
    const items = results.filter((r) => r.type === type);
    if (items.length) acc.push({ type, items });
    return acc;
  }, []);
  const flat = grouped.flatMap((g) => g.items);

  const openPalette = useCallback(() => {
    setQuery("");
    setSelectedIndex(0);
    setOpen(true);
  }, []);

  // ⌘K / Ctrl+K shortcut
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => {
          if (!prev) { setQuery(""); setSelectedIndex(0); }
          return !prev;
        });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Custom event from header search button
  useEffect(() => {
    window.addEventListener("open-search", openPalette);
    return () => window.removeEventListener("open-search", openPalette);
  }, [openPalette]);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  // Reset selection on query change
  useEffect(() => { setSelectedIndex(0); }, [query]);

  const navigate = useCallback((item) => {
    setOpen(false);
    if (item.external) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    } else {
      router.push(item.href);
    }
  }, [router]);

  const handleKeyDown = (e) => {
    if (e.key === "Escape") { setOpen(false); }
    else if (e.key === "ArrowDown") { e.preventDefault(); setSelectedIndex((i) => Math.min(i + 1, flat.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setSelectedIndex((i) => Math.max(i - 1, 0)); }
    else if (e.key === "Enter" && flat[selectedIndex]) { navigate(flat[selectedIndex]); }
  };

  let fi = 0;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setOpen(false)}
          />
          <motion.div
            className={styles.palette}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            role="dialog"
            aria-modal="true"
            aria-label="Site search"
          >
            <div className={styles.inputRow}>
              <IoSearch className={styles.searchIcon} aria-hidden="true" />
              <input
                ref={inputRef}
                className={styles.input}
                placeholder="Search pages, posts, projects, books, interests…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                aria-label="Search"
              />
              {query && (
                <button
                  className={styles.clearButton}
                  onClick={() => setQuery("")}
                  aria-label="Clear search"
                >
                  <IoClose />
                </button>
              )}
            </div>

            {results.length > 0 && (
              <div className={styles.results}>
                {grouped.map(({ type, items }) => (
                  <div key={type}>
                    <p className={styles.groupLabel}>{TYPE_LABELS[type]}</p>
                    {items.map((item) => {
                      const Icon = TYPE_ICONS[type];
                      const idx = fi++;
                      return (
                        <button
                          key={`${item.type}-${item.title}`}
                          className={`${styles.result} ${idx === selectedIndex ? styles.resultSelected : ""}`}
                          onClick={() => navigate(item)}
                          onMouseEnter={() => setSelectedIndex(idx)}
                        >
                          <Icon className={styles.resultIcon} aria-hidden="true" />
                          <div className={styles.resultText}>
                            <span className={styles.resultTitle}>{item.title}</span>
                            <span className={styles.resultSubtitle}>{item.subtitle}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            )}

            {query && results.length === 0 && (
              <p className={styles.empty}>No results for &ldquo;{query}&rdquo;</p>
            )}

            {!query && (
              <p className={styles.hint}>
                Search across pages, blog posts, projects, books, and interests.
              </p>
            )}

            <div className={styles.footer}>
              <span><kbd className={styles.kbd}>↑</kbd><kbd className={styles.kbd}>↓</kbd> navigate</span>
              <span><kbd className={styles.kbd}>↵</kbd> open</span>
              <span><kbd className={styles.kbd}>Esc</kbd> close</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
