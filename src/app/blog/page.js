"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("/postsMetadata.json");
        if (!res.ok) throw new Error("Failed to fetch posts metadata");
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Error loading blog posts:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <div>
        {posts.length === 0 ? (
          <p>Loading...</p>
        ) : (
          posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div>
                <h2>{post.title}</h2>
                <p>{post.date}</p>
                <p>{post.description}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
