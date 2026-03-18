"use client";

import { useEffect, useRef, useState } from "react";
import LikeButton from "./likeButton";

export default function TableOfContents({ items, postId }) {
  const mounted = useRef(false);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (mounted.current) return;

    const content = document.querySelector(".blog-content");
    if (!content) return;

    let tocIndex = 0;
    const allHeadings = Array.from(content.querySelectorAll("h1, h2, h3, h4"));

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
      <h2>TABLE OF CONTENTS</h2>
      <p style={{ paddingLeft: 0 }}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            display: "block",
            padding: "0.25rem 0",
            textDecoration: "none",
            fontSize: "15px",
            color: activeId === null ? "var(--header-hover-color)" : undefined,
            transition: "color 0.2s ease",
          }}
        >
          Introduction
        </a>
        {items.map((h) => (
          <a
            key={h.id}
            href={`#${h.id}`}
            onClick={(e) => scrollToSection(e, h.id)}
            style={{
              display: "block",
              padding: "0.25rem 0",
              paddingLeft: `${(h.depth - 1) * 12}px`,
              textDecoration: "none",
              fontSize: h.depth === 1 ? "15px" : "13px",
              color: activeId === h.id ? "var(--header-hover-color)" : undefined,
              transition: "color 0.2s ease",
            }}
          >
            {h.text}
          </a>
        ))}
      </p>
      <LikeButton postId={postId} />
    </nav>
  );
}
