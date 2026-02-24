"use client";

import Link from "next/link";
import { getPosts } from "../../../../utils/fetchPosts";

import { motion } from "motion/react";

import styles from "../../styles/blog/blog.module.css";

export default function BlogList() {
  const posts = getPosts();

  return (
    <div className={styles.blogContainer}>
      <div className={`content ${styles.blogContent}`}>
        <h1 className={styles.blogTitle}>Blog</h1>
        <div className={styles.blogList}>
          {posts.map((post, index) => {
            const wordCount = post.content?.split(/\s+/).length ?? 0;
            const readingTime = Math.max(1, Math.ceil(wordCount / 200));
            const tags =
              post.meta.tags ??
              (post.meta.keywords ?? [])
                .filter((k) => k !== "Aayush Sood")
                .slice(0, 3);

            return (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={styles.blogPost}
              >
                <Link href={`/blog/${post.slug}`}>
                  <h1 className={`${styles.text} ${styles.title}`}>
                    {post.meta.title}
                  </h1>
                  <div className={styles.meta}>
                    <span className={`${styles.text} ${styles.date}`}>
                      {post.meta.date}
                    </span>
                    <span className={styles.metaDot}>·</span>
                    <span className={styles.readingTime}>
                      {readingTime} min read
                    </span>
                  </div>
                  {tags.length > 0 && (
                    <div className={styles.tags}>
                      {tags.map((tag) => (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className={`${styles.text} ${styles.description}`}>
                    {post.meta.description}
                  </p>
                  <div className={styles.readMore}>
                    Read more
                    <span className={styles.arrows} aria-hidden="true">
                      <span>›</span>
                      <span>›</span>
                      <span>›</span>
                      <span>›</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
