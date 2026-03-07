"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { IoIosLink, IoMdClose } from "react-icons/io";

import styles from "../../styles/home/projectModal.module.css";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            role="dialog"
            aria-modal="true"
            aria-label={project.name}
          >
            <div
              className={styles.imageBar}
              style={{ background: project.gradient }}
            >
              <Image
                src={project.image}
                alt={project.name}
                width={600}
                height={280}
                className={styles.image}
                sizes="(max-width: 600px) 100vw, 600px"
              />
            </div>

            <div className={styles.body}>
              <div className={styles.header}>
                <div>
                  <h2 className={styles.name}>{project.name}</h2>
                  <span className={styles.year}>{project.year}</span>
                </div>
                <button
                  className={styles.closeButton}
                  onClick={onClose}
                  aria-label="Close project details"
                >
                  <IoMdClose />
                </button>
              </div>

              <div className={styles.tags}>
                {project.tags.sort((a, b) => a.localeCompare(b)).map((tag) => (
                  <span key={tag} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <p className={styles.details}>{project.details}</p>

              <div className={styles.links}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <FaGithub />
                    GitHub
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <IoIosLink />
                    Live Site
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
