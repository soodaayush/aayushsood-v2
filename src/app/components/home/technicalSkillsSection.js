"use client";

import styles from "../../styles/home/page.module.css";
import TechnicalSkill from "./technicalSkill";

export default function TechnicalSkills({ skills }) {
  return (
    <div className={styles.technicalSkillsContainer}>
      <h1 className={styles.sectionHeading}>Technical Skills</h1>
      <div className="content">
        <div className={styles.technicalSkillsList}>
          {skills.map((skill, idx) => (
            <TechnicalSkill key={idx} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
}
