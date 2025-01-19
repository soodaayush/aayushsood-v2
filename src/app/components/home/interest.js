"use client";

import { motion } from "motion/react";

import styles from "../../styles/home/interest.module.css";

export default function Interest(props) {
  return (
    <motion.div
      initial={{ scale: 1, opacity: 0.9 }}
      whileHover={{
        scale: 1.1,
        opacity: 1,
        rotate: 5,
        boxShadow: "0px 4px 20px rgba(255, 255, 255, 0.3)",
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      className={styles.interestContainer}
    >
      <h1 className={styles.interestTitle}>
        <div className={styles.interestIcon}>{props.icon}</div>
        {props.name}
      </h1>
      <p>{props.description}</p>
      <div className={styles.links}>
        <p>My favorite channels I follow are: </p>
        {props.channels
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((channel, index) => (
            <a
              className={styles.link}
              key={index}
              href={channel.link}
              target="_blank"
            >
              {channel.name}
            </a>
          ))}
      </div>
    </motion.div>
  );
}
