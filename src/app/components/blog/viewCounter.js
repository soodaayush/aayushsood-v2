"use client";

import { useEffect, useState, useRef } from "react";
import {
  doc,
  increment,
  onSnapshot,
  runTransaction,
} from "firebase/firestore";
import { db } from "../../../../libs/firebaseConfig";
import { useAnonAuth } from "../../../../hooks/useAnonAuth";

import styles from "../../styles/blog/viewCounter.module.css";

export default function ViewCounter({ postId }) {
  const uid = useAnonAuth();
  const [viewCount, setViewCount] = useState(null);
  const incremented = useRef(false);

  useEffect(() => {
    const postRef = doc(db, "posts", postId);
    const unsubscribe = onSnapshot(postRef, (snap) => {
      if (snap.exists()) {
        setViewCount(snap.data().viewCount ?? 0);
      } else {
        setViewCount(0);
      }
    });
    return () => unsubscribe();
  }, [postId]);

  useEffect(() => {
    if (!uid || incremented.current) return;
    incremented.current = true;

    const postRef = doc(db, "posts", postId);

    runTransaction(db, async (transaction) => {
      const postSnap = await transaction.get(postRef);

      if (!postSnap.exists()) {
        transaction.set(postRef, { viewCount: 1, likeCount: 0 });
      } else {
        transaction.update(postRef, { viewCount: increment(1) });
      }
    }).catch((err) => {
      console.error("ViewCounter:", err.message);
      incremented.current = false;
    });
  }, [uid, postId]);

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
