"use client";

import { motion } from "motion/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPython,
  FaNodeJs,
  FaGitAlt,
  FaLinux,
  FaDatabase,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiFastapi,
  SiFirebase,
  SiCplusplus,
  SiCloudflare,
  SiNetlify,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { RiBrainLine } from "react-icons/ri";
import { TbBrandOpenai } from "react-icons/tb";

import styles from "../../styles/home/technicalSkill.module.css";

const SKILL_ICONS = {
  HTML: FaHtml5,
  "CSS/SCSS": FaCss3Alt,
  JavaScript: SiJavascript,
  React: FaReact,
  "React Native": FaReact,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": FaNodeJs,
  Python: FaPython,
  FastAPI: SiFastapi,
  SQL: FaDatabase,
  Firebase: SiFirebase,
  "C++": SiCplusplus,
  Git: FaGitAlt,
  Linux: FaLinux,
  Cloudflare: SiCloudflare,
  Netlify: SiNetlify,
  "Microsoft Azure": VscAzure,
  ChatGPT: TbBrandOpenai,
  "Claude Code": RiBrainLine,
  Pandas: SiPandas,
  "scikit-learn": SiScikitlearn,
};

const SKILL_COLORS = {
  HTML: "#E44D26",
  "CSS/SCSS": "#1572B6",
  JavaScript: "#F7DF1E",
  React: "#61DAFB",
  "React Native": "#61DAFB",
  "Tailwind CSS": "#06B6D4",
  "Node.js": "#339933",
  Python: "#3776AB",
  FastAPI: "#009688",
  SQL: "#7E57C2",
  Firebase: "#FFCA28",
  "C++": "#00599C",
  Git: "#F05032",
  Linux: "#6E7681",
  Cloudflare: "#F48120",
  Netlify: "#00C7B7",
  "Microsoft Azure": "#0078D4",
  ChatGPT: "#10a37f",
  "Claude Code": "#cc785c",
  Pandas: "#E70488",
  "scikit-learn": "#F7931E",
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
      <h2 className={styles.skillType}>{props.type}</h2>
      <div className={styles.skillsList}>
        {props.skills.map((skill) => {
          const Icon = SKILL_ICONS[skill.name];
          return (
            <div className={styles.technicalSkill} key={skill.id}>
              {Icon && (
                <Icon
                  className={styles.skillIcon}
                  style={
                    SKILL_COLORS[skill.name]
                      ? { "--skill-color": SKILL_COLORS[skill.name] }
                      : undefined
                  }
                  aria-hidden="true"
                />
              )}
              <span className={styles.skillTitle}>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
