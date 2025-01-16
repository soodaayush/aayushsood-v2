"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

import Image from "next/image";

import styles from "./styles/home/page.module.css";

import Aayush from "../../public/assets/welcome/aayush.jpg";

import Project from "./components/home/project";
import TechnicalSkill from "./components/home/techincalSkill";
import Interest from "./components/home/interest";

import { FaLaptop, FaCode, FaGamepad, FaGlobe } from "react-icons/fa";
import { PiMathOperationsFill } from "react-icons/pi";
import { MdScience } from "react-icons/md";
import { MdOutlineSportsMartialArts } from "react-icons/md";

import projects from "./data/projects.json";
import technicalSkills from "./data/technicalSkills.json";
import interests from "./data/interests.json";

export default function Home() {
  const iconMap = {
    FaGamepad: FaGamepad,
    PiMathOperationsFill: PiMathOperationsFill,
    MdScience: MdScience,
    FaGlobe: FaGlobe,
    MdOutlineSportsMartialArts: MdOutlineSportsMartialArts,
    FaCode: FaCode,
    FaLaptop: FaLaptop,
  };

  const roles = [
    "fullstack developer!",
    "student!",
    "competitive programmer!",
    "creator!",
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [numVisibleProjects, setNumVisibleProjects] = useState(3);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const updateVisibleProjects = () => {
      const width = window.innerWidth;
      if (width <= 760) {
        setNumVisibleProjects(1);
      } else if (width <= 1150) {
        setNumVisibleProjects(2);
      } else {
        setNumVisibleProjects(3);
      }
    };

    updateVisibleProjects();

    window.addEventListener("resize", updateVisibleProjects);

    let typingTimeout;
    const updateText = () => {
      const fullText = `Hi, I am Aayush and I am a `;
      const currentRole = roles[roleIndex];

      const fullRoleText = fullText + currentRole;
      const displayedRole = text.slice(fullText.length);

      if (!isDeleting) {
        setText((prev) => {
          const nextText = fullRoleText.slice(0, prev.length + 1);
          if (nextText === fullRoleText) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
          return nextText;
        });
        typingTimeout = setTimeout(updateText, 50);
      } else {
        if (displayedRole.length > 0) {
          setText((prev) => prev.slice(0, -1));
          typingTimeout = setTimeout(updateText, 40);
        } else {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    };

    typingTimeout = setTimeout(updateText, 100);

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 600);

    return () => {
      window.removeEventListener("resize", updateVisibleProjects);
      clearTimeout(typingTimeout);
      clearInterval(cursorInterval);
    };
  }, [text, isDeleting, roleIndex, roles]);

  const visibleProjects = [];
  for (let i = 0; i < numVisibleProjects; i++) {
    visibleProjects.push(projects[(currentIndex + i) % projects.length]);
  }

  return (
    <div className={styles.homeContainer}>
      <div className={styles.welcomeContainer}>
        <div className={`content ${styles.welcomeContent}`}>
          <motion.div
            className={styles.welcomeText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {text}
            {cursorVisible && <span>|</span>}
          </motion.div>
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.7)",
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              className={styles.profileImageContainer}
            >
              <Image
                className={styles.picture}
                src={Aayush}
                height={250}
                width={250}
                alt="Aayush"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className={styles.curve}>
        <svg
          className={styles.svg}
          preserveAspectRatio="none"
          viewBox="0 0 1440 74"
        >
          <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
        </svg>
      </div>
      <div className={styles.technicalSkillsContainer}>
        <h1 className={styles.sectionHeading}>Technical Skills</h1>
        <div className="content">
          <div className={styles.technicalSkillsList}>
            {technicalSkills.map((technicalSkill, index) => (
              <TechnicalSkill
                key={index}
                type={technicalSkill.type}
                skills={technicalSkill.skills}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.projectsContainer}>
        <div className={`content ${styles.projectContent}`}>
          <h1 className={styles.sectionHeading}>Projects</h1>
          <motion.div
            initial={{ opacity: 0, y: 50, visibility: "hidden" }}
            whileInView={{ opacity: 1, y: 0, visibility: "visible" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className={styles.projectList}
          >
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.name}
                className={`${styles.projectCard}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <Project {...project} />
              </motion.div>
            ))}
          </motion.div>
          <div className={styles.projectToggles}>
            <button className={styles.projectToggle} onClick={prevProject}>
              ← Prev
            </button>
            <button className={styles.projectToggle} onClick={nextProject}>
              Next →
            </button>
          </div>
        </div>
      </div>
      <div className={styles.interestsContainer}>
        <div className={`content ${styles.interestsContent}`}>
          <h1 className={styles.sectionHeading}>Interests</h1>
          <div className={styles.interestList}>
            {interests.map((interest, index) => {
              const IconComponent = iconMap[interest.icon];
              return (
                <Interest
                  key={index}
                  name={interest.name}
                  description={interest.description}
                  icon={<IconComponent />}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
