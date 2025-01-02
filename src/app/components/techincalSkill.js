"use client";

import { motion } from "motion/react";

import styles from "../styles/technicalSkill.module.css";

export default function TechnicalSkill(props) {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        backgroundColor: "#2d3748",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
      }}
      className={styles.technicalSkillContainer}
    >
      <h1 className={styles.skillType}>{props.type}</h1>
      {props.skills.map((skill) => (
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
