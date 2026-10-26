"use client";

import { useEffect, useState } from "react";
import {
  getPostStats,
  hasRecorded,
  recordPostAction,
} from "../../../../utils/postStats";

import styles from "../../styles/blog/viewCounter.module.css";

export default function ViewCounter({ postId }) {
  const [viewCount, setViewCount] = useState(null);

  useEffect(() => {
    let cancelled = false;

    // Count a view once per browser; later visits just read the count
    const request = hasRecorded("view", postId)
      ? getPostStats(postId)
      : recordPostAction("view", postId);

    request
      .then((stats) => {
        if (!cancelled) setViewCount(stats.viewCount);
      })
      .catch((err) => console.error("ViewCounter:", err.message));

    return () => {
      cancelled = true;
    };
  }, [postId]);

  const isLoaded = viewCount !== null;
  const digits = isLoaded ? String(viewCount).padStart(6, "0") : "------";

  return (
    <div className={styles.container}>
      <p className={styles.label}># of hits</p>
      <div className={styles.display}>
        <span className={styles.ghost} aria-hidden="true">
          888888
        </span>
        <span className={styles.digits}>{digits}</span>
      </div>
    </div>
  );
}
