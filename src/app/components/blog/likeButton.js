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

export default function LikeButton({ postId }) {
  const uid = useAnonAuth();
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const postRef = doc(db, "posts", postId);
    const unsubscribe = onSnapshot(postRef, (snap) => {
      if (snap.exists()) {
        setLikeCount(snap.data().likeCount || 0);
      }
    });

    return () => unsubscribe();
  }, [postId]);

  useEffect(() => {
    if (!uid) return; // wait until auth resolves

    const likeRef = doc(db, "posts", postId, "likes", uid);

    const unsubscribe = onSnapshot(likeRef, (snap) => {
      setLiked(snap.exists());
    });

    return () => unsubscribe();
  }, [postId, uid]);

  async function handleLike() {
    if (!uid || liked || loading) return;

    setLiked(true); // ✅ optimistic update
    setLoading(true);

    const postRef = doc(db, "posts", postId);
    const likeRef = doc(db, "posts", postId, "likes", uid);

    try {
      await runTransaction(db, async (transaction) => {
        const postSnap = await transaction.get(postRef);
        const likeSnap = await transaction.get(likeRef);

        // If post doesn't exist, create it
        if (!postSnap.exists()) {
          transaction.set(postRef, { likeCount: 0 });
        }

        // If user already liked, abort
        if (likeSnap.exists()) {
          throw new Error("Already liked");
        }

        // Create a like document for this user
        transaction.set(likeRef, { likedAt: serverTimestamp() });

        // Increment likeCount
        transaction.update(postRef, { likeCount: increment(1) });
      });

      console.log("Liked successfully!");
    } catch (err) {
      console.error(err.message);
      setLiked(false); // revert if something went wrong
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleLike}
      disabled={liked || loading}
      style={{
        padding: "0.5rem 1rem",
        borderRadius: "0.25rem",
        backgroundColor: liked ? "#f87171" : "#3b82f6",
        color: "#fff",
        cursor: liked || loading ? "not-allowed" : "pointer",
        fontSize: "1rem",
      }}
    >
      {liked ? `❤️ Liked (${likeCount})` : `🤍 Like (${likeCount})`}
    </button>
  );
}
