"use client";

import { motion } from "motion/react";

import styles from "../../styles/home/interest.module.css";

export default function Interest(props) {
  return (
    <motion.div
      initial={{ scale: 1, opacity: 0.9 }}
      whileHover={{
        scale: 1.1, 
        boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)", 
        transition: { duration: 0.3 }, 
        backgroundColor: "#2f4f4f", 
      }}
      className={styles.interestContainer}
    >
      <h1 className={styles.interestTitle}>
        <div className={styles.interestIcon}>{props.icon}</div>
        {props.name}
      </h1>
      <p>{props.description}</p>
      <div className={styles.links}>
        <p>My favorite creators I follow are: </p>
        <div className={styles.linkTexts}>
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
      </div>
    </motion.div>
  );
}
