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

const SKILL_COLORS = {
  "HTML": "#E44D26",
  "CSS/SCSS": "#1572B6",
  "JavaScript": "#F7DF1E",
  "Tailwind CSS": "#06B6D4",
  "React": "#61DAFB",
  "Bootstrap CSS": "#7952B3",
  "Python": "#3776AB",
  "Node.js": "#339933",
  "Firebase": "#FFCA28",
  "C++": "#00599C",
  "Cloudflare": "#F48120",
  "Netlify": "#00C7B7",
  "NPM": "#CB3837",
  "Yarn": "#2C8EBB",
  "Git": "#F05032",
  "GitHub": "#6E7681",
  "React Native": "#61DAFB",
  "iOS": "#A2AAAD",
  "Android": "#3DDC84",
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
                {Icon && (
                  <Icon
                    className={styles.skillIcon}
                    style={SKILL_COLORS[skill.name] ? { color: SKILL_COLORS[skill.name] } : undefined}
                    aria-hidden="true"
                  />
                )}
                <div className={styles.skillText}>
                  <span className={styles.skillTitle}>{skill.name}</span>
                  <span className={styles.skillExperience}>{skill.experience}</span>
                </div>
              </div>
            );
          })}
      </div>
    </motion.div>
  );
}
