"use client";

import { motion } from "motion/react";
import {
  FaHtml5, FaCss3Alt, FaReact, FaPython, FaNodeJs,
  FaNpm, FaYarn, FaGitAlt, FaGithub, FaApple, FaAndroid,
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiBootstrap, SiFirebase,
  SiCplusplus, SiCloudflare, SiNetlify,
} from "react-icons/si";

import styles from "../../styles/home/technicalSkill.module.css";

const SKILL_ICONS = {
  "HTML": FaHtml5,
  "CSS/SCSS": FaCss3Alt,
  "JavaScript": SiJavascript,
  "Tailwind CSS": SiTailwindcss,
  "React": FaReact,
  "Bootstrap CSS": SiBootstrap,
  "Python": FaPython,
  "Node.js": FaNodeJs,
  "Firebase": SiFirebase,
  "C++": SiCplusplus,
  "Cloudflare": SiCloudflare,
  "Netlify": SiNetlify,
  "NPM": FaNpm,
  "Yarn": FaYarn,
  "Git": FaGitAlt,
  "GitHub": FaGithub,
  "React Native": FaReact,
  "iOS": FaApple,
  "Android": FaAndroid,
};

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
          .map((skill) => {
            const Icon = SKILL_ICONS[skill.name];
            return (
              <div className={styles.technicalSkill} key={skill.id}>
                {Icon && <Icon className={styles.skillIcon} aria-hidden="true" />}
                <span className={styles.skillTitle}>{skill.name}</span>
                <span className={styles.skillExperience}>{skill.experience}</span>
              </div>
            );
          })}
      </div>
    </motion.div>
  );
}
