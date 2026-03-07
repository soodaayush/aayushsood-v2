"use client";

import { motion } from "motion/react";

import styles from "../../styles/home/technicalSkill.module.css";

export default function TechnicalSkill(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: props.index * 0.1 }}
      className={styles.technicalSkillContainer}
    >
      <p className={styles.skillType}>{props.type}</p>
      <div className={styles.skillsList}>
        {props.skills
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((skill) => (
            <div className={styles.technicalSkill} key={skill.id}>
              <span className={styles.skillTitle}>{skill.name}</span>
              <span className={styles.skillExperience}>{skill.experience}</span>
            </div>
          ))}
      </div>
    </motion.div>
  );
}
