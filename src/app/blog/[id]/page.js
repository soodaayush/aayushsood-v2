"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";

export default function BlogPost() {
  const { id } = useParams(); // Get dynamic route param
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch("/postsMetadata.json");
        if (!res.ok) throw new Error("Failed to fetch posts metadata");

        const posts = await res.json();
        const foundPost = posts.find((p) => p.slug === id);

        if (!foundPost) {
          notFound(); // If post is not found, trigger 404
        } else {
          setPost(foundPost);
        }
      } catch (error) {
        console.error("Error loading blog post:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!post) return notFound();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>{post.description}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
