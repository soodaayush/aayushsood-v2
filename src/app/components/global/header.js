"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import styles from "../../styles/global/header.module.css";

const LINKS = [
  { href: "/blog", label: "blog" },
  { href: "/books", label: "books" },
];

export default function Header() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  // The saved theme is only known in the browser, so the label that depends on it waits for mount
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const isDark = !mounted || theme !== "light";

  return (
    <nav className={styles.nav} aria-label="Main">
      <Link className={styles.brand} href="/">
        aayush sood
      </Link>
      <div className={styles.links}>
        {LINKS.map(({ href, label }) => {
          const current = pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={current ? styles.current : undefined}
              aria-current={current ? "page" : undefined}
            >
              {label}
            </Link>
          );
        })}
        <a
          href="/assets/resume/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          resume
        </a>
        <button
          type="button"
          className={styles.toggle}
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        >
          {/* Both labels are in the HTML; CSS shows the right one, so there's no flash before hydration */}
          <span className={styles.whenDark}>light</span>
          <span className={styles.whenLight}>dark</span>
        </button>
      </div>
    </nav>
  );
}
