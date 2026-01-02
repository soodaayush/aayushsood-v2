"use client";

import { useEffect, useRef } from "react";
import LikeButton from "./likeButton";

export default function TableOfContents({ items, postId }) {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;

    const content = document.querySelector(".blog-content");
    if (!content) return;

    let tocIndex = 0;
    const allHeadings = Array.from(content.querySelectorAll("h1, h2, h3, h4"));

    allHeadings.forEach((h) => {
      const remainingTocItems = items.slice(tocIndex);
      for (let tocItem of remainingTocItems) {
        if (h.textContent?.trim() === tocItem.text && !h.id) {
          h.id = tocItem.id;
          tocIndex++;
          break;
        }
      }
    });

    mounted.current = true;
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
        {items.map((h) => (
          <a
            key={h.id}
            href={`#${h.id}`}
            onClick={(e) => scrollToSection(e, h.id)}
            style={{
              display: "block",
              padding: "0.25rem 0",
              textDecoration: "none",
              fontSize: "15px",
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
