"use client";

import Link from "next/link";
import { getPosts } from "../../../../utils/fetchPosts";

import { motion } from "motion/react";

import styles from "../../styles/blog/blog.module.css";

export default function BlogList() {
  const posts = getPosts();

  const yearGroups = posts.reduce((groups, post) => {
    const year = new Date(post.meta.date).getFullYear();
    if (!groups[year]) groups[year] = [];
    groups[year].push(post);
    return groups;
  }, {});

  const sortedYears = Object.keys(yearGroups).sort((a, b) => b - a);

  return (
    <div className={styles.blogContainer}>
      <div className={`content ${styles.blogContent}`}>
        <h1 className={styles.blogTitle}>Blog</h1>
        <div className={styles.timeline}>
          {sortedYears.map((year) => (
            <div key={year} className={styles.yearGroup}>
              <div className={styles.yearRow}>
                <div className={styles.yearDot} />
                <span className={styles.yearLabel}>{year}</span>
              </div>
              {yearGroups[year].map((post, index) => (
                <div key={post.slug} className={styles.postRow}>
                  <div className={styles.postDot} />
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className={styles.blogPost}
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
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
