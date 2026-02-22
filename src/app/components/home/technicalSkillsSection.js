"use client";

import { motion } from "motion/react";

import styles from "../../styles/home/page.module.css";
import TechnicalSkill from "./technicalSkill";

export default function TechnicalSkills({ skills }) {
  return (
    <div className={styles.technicalSkillsContainer}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={styles.sectionHeading}
      >
        Technical Skills
      </motion.h1>
      <div className="content">
        <div className={styles.technicalSkillsList}>
          {skills.map((skill, idx) => (
            <TechnicalSkill key={idx} {...skill} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
