"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// The palette (and the animation library it uses) is only needed once someone opens it, so it is
// not part of any page's first load. It is fetched when the browser is idle, so the first ⌘K is
// still instant, and mounted already open on the first ⌘K / Ctrl+K.
const loadPalette = () => import("./commandPalette");
const CommandPalette = dynamic(loadPalette, { ssr: false });

export default function CommandPaletteLoader({ posts }) {
  const [wanted, setWanted] = useState(false);

  useEffect(() => {
    const want = () => setWanted(true);
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        want();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-search", want);

    let idle;
    if ("requestIdleCallback" in window) {
      idle = window.requestIdleCallback(loadPalette, { timeout: 5000 });
    } else {
      idle = setTimeout(loadPalette, 3000);
    }

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-search", want);
      if ("requestIdleCallback" in window) window.cancelIdleCallback(idle);
      else clearTimeout(idle);
    };
  }, []);

  return wanted ? <CommandPalette posts={posts} startOpen /> : null;
}
