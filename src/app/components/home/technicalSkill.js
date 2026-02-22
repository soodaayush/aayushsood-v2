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
      <h1 className={styles.skillType}>{props.type}</h1>
      {props.skills
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((skill) => (
          <div className={styles.technicalSkill} key={skill.id}>
            <p className={styles.skillTitle}>{skill.name}</p>
            <label className={styles.skillExperience}>
              {skill.experience} Experience
            </label>
          </div>
        ))}
    </motion.div>
  );
}
