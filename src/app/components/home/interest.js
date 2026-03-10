"use client";

import { motion } from "motion/react";

import styles from "../../styles/home/interest.module.css";

export default function Interest(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
      transition={{ duration: 0.5, delay: props.index * 0.08 }}
      className={styles.interestContainer}
    >
      <div className={styles.iconWrapper}>{props.icon}</div>
      <h3 className={styles.interestTitle}>{props.name}</h3>
      <p className={styles.description}>{props.description}</p>

      <div className={styles.creatorsSection}>
        <p className={styles.creatorsLabel}>Creators</p>
        <div className={styles.linkTexts}>
          {props.channels
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((channel, index) => (
              <a
                className={styles.link}
                key={index}
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {channel.name}
              </a>
            ))}
        </div>
      </div>
    </motion.div>
  );
}
