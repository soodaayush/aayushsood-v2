"use client";

import { useState, useEffect } from "react";
import {
  doc,
  increment,
  onSnapshot,
  serverTimestamp,
  runTransaction,
} from "firebase/firestore";
import { db } from "../../../../libs/firebaseConfig";
import { useAnonAuth } from "../../../../hooks/useAnonAuth";

import styles from "../../styles/blog/likeButton.module.css";

export default function LikeButton({ postId }) {
  const uid = useAnonAuth();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(null);
  const [userLikedLoaded, setUserLikedLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const postRef = doc(db, "posts", postId);
    const unsubscribe = onSnapshot(postRef, (snap) => {
      if (snap.exists()) {
        setLikeCount(snap.data().likeCount || 0);
      } else {
        setLikeCount(0);
      }
    });
    return () => unsubscribe();
  }, [postId]);

  useEffect(() => {
    if (!uid) return;

    const likeRef = doc(db, "posts", postId, "likes", uid);
    const unsubscribe = onSnapshot(likeRef, (snap) => {
      setLiked(snap.exists());
      setUserLikedLoaded(true);
    });
    return () => unsubscribe();
  }, [postId, uid]);

  if (likeCount === null || !userLikedLoaded) {
    return <div></div>;
  }

  async function handleLike() {
    if (!uid || liked || loading) return;

    setLiked(true);
    setLikeCount((c) => c + 1);
    setLoading(true);

    const postRef = doc(db, "posts", postId);
    const likeRef = doc(db, "posts", postId, "likes", uid);

    try {
      await runTransaction(db, async (transaction) => {
        const postSnap = await transaction.get(postRef);
        const likeSnap = await transaction.get(likeRef);

        if (!postSnap.exists()) {
          transaction.set(postRef, { likeCount: 0 });
        }

        if (likeSnap.exists()) {
          throw new Error("Already liked");
        }

        transaction.set(likeRef, { likedAt: serverTimestamp() });
        transaction.update(postRef, { likeCount: increment(1) });
      });
    } catch (err) {
      console.error(err.message);
      setLiked(false);
      setLikeCount((c) => Math.max(0, c - 1));
    } finally {
      setLoading(false);
    }
  }

  const buttonClass = `${styles.button} ${
    liked ? styles.liked : styles.unliked
  } ${loading || liked ? styles.disabled : ""}`;

  return (
    <div className={styles.container}>
      <div
        onClick={handleLike}
        disabled={liked || loading}
        className={buttonClass}
      >
        <svg viewBox="0 0 24 24" className={styles.svg}>
          {liked ? (
            <path
              className={styles.heartPath}
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          ) : (
            <path
              className={styles.heartOutline}
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill="none"
              stroke="#ff1a81"
              strokeWidth="2"
            />
          )}
        </svg>
      </div>
      <p className={styles.likeCount}>{likeCount}</p>
    </div>
  );
}
