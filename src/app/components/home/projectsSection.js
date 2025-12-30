"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Project from "./project";
import styles from "../../styles/home/page.module.css";

export default function Projects({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numVisibleProjects, setNumVisibleProjects] = useState(3);

  useEffect(() => {
    const updateVisibleProjects = () => {
      const width = window.innerWidth;
      if (width <= 760) setNumVisibleProjects(1);
      else if (width <= 1150) setNumVisibleProjects(2);
      else setNumVisibleProjects(3);
    };

    updateVisibleProjects();
    window.addEventListener("resize", updateVisibleProjects);

    return () => window.removeEventListener("resize", updateVisibleProjects);
  }, []);

  const nextProject = () => setCurrentIndex((i) => (i + 1) % projects.length);
  const prevProject = () =>
    setCurrentIndex((i) => (i === 0 ? projects.length - 1 : i - 1));

  const visibleProjects = [];
  for (let i = 0; i < numVisibleProjects; i++) {
    visibleProjects.push(projects[(currentIndex + i) % projects.length]);
  }

  return (
    <div className={styles.projectsContainer}>
      <div className={`content ${styles.projectContent}`}>
        <h1 className={styles.sectionHeading}>Projects</h1>
        <motion.div
          initial={{ opacity: 0, y: 50, visibility: "hidden" }}
          whileInView={{ opacity: 1, y: 0, visibility: "visible" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className={styles.projectList}
        >
          {visibleProjects.map((project) => (
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
          <button className={styles.projectToggle} onClick={prevProject} name="Previous project">
            ← Prev
          </button>
          <button className={styles.projectToggle} onClick={nextProject} name="Next project">
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}
