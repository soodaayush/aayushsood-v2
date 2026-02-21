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
          {posts.map((post, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                transition: { type: "spring", stiffness: 450, damping: 20 },
              }}
              className={styles.blogPost}
              key={post.slug}
            >
              <Link href={`/blog/${post.slug}`}>
                <h1 className={`${styles.text} ${styles.title}`}>
                  {post.meta.title}
                </h1>
                <p className={`${styles.text} ${styles.date}`}>
                  {post.meta.date}
                </p>
                <p className={`${styles.text} ${styles.description}`}>
                  {post.meta.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
