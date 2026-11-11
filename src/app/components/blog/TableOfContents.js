"use client";

import { useEffect, useRef, useState } from "react";
import LikeButton from "./likeButton";

import styles from "../../styles/blog/toc.module.css";

export default function TableOfContents({ items, postId }) {
  const mounted = useRef(false);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (mounted.current) return;

    const content = document.querySelector(".blog-content");
    if (!content) return;

    let tocIndex = 0;
    const allHeadings = Array.from(content.querySelectorAll("h2, h3, h4"));

    allHeadings.forEach((h) => {
      const remainingTocItems = items.slice(tocIndex);
      for (let tocItem of remainingTocItems) {
        if (!h.id) {
          h.id = tocItem.id;
          tocIndex++;
          break;
        }
      }
    });

    mounted.current = true;
  }, [items]);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 140;
      let current = null;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= threshold) {
          current = item.id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    const headerOffset = 120;
    const rect = target.getBoundingClientRect();
    const offsetPosition = window.scrollY + rect.top - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  if (!items?.length) return null;

  return (
    <nav aria-label="Table of contents">
      <h2 className={styles.label}>TABLE OF CONTENTS</h2>
      <ul className={styles.list}>
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`${styles.link} ${activeId === null ? styles.active : ""}`}
          >
            Introduction
          </a>
        </li>
        {items.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              data-id={h.id}
              onClick={(e) => scrollToSection(e, h.id)}
              className={`${styles.link} ${h.depth > 1 ? styles.sub : ""} ${activeId === h.id ? styles.active : ""}`}
              style={{ paddingLeft: `${(h.depth - 1) * 12}px` }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
      <LikeButton postId={postId} />
    </nav>
  );
}
