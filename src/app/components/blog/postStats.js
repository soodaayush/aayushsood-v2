"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Firebase (about 200 KB) is only needed for the counters, so it loads once the browser is idle,
// after the page and its first image. A view is still counted on every visit.
const LikeButton = dynamic(() => import("./likeButton"), { ssr: false });
const ViewCounter = dynamic(() => import("./viewCounter"), { ssr: false });

export default function PostStats({ postId }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const start = () => setReady(true);

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start, { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(start, 1500);
    return () => clearTimeout(id);
  }, []);

  if (!ready) return null;

  return (
    <>
      <LikeButton postId={postId} />
      <ViewCounter postId={postId} />
    </>
  );
}
