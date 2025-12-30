"use client";

import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";

import Image from "next/image";
import styles from "../../styles/home/project.module.css";

export default function Project(props) {
  return (
    <motion.div
      style={{
        background: props.gradient,
        transform: props.rotate,
      }}
      className={styles.projectContainer}
    >
      <div className={styles.imageContainer}>
        <Image
          className={styles.projectThumbnail}
          src={props.image}
          width={250}
          height={150}
          alt={props.name}
        />
      </div>
      <h2 className={styles.projectName}>{props.name}</h2>
      <div className={styles.tagContainer}>
        {props.tags
          .sort((a, b) => a.localeCompare(b))
          .map((tag, index) => (
            <button className={styles.tag} key={index} name={tag}>
              {tag}
            </button>
          ))}
      </div>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.links}>
        <div className={styles.year}>{props.year}</div>
        <div>
          {props.github && (
            <a href={props.github} className={styles.link} target="_blank">
              <FaGithub className={styles.githubLogo} />
            </a>
          )}
          {props.website && (
            <a href={props.website} className={styles.link} target="_blank">
              <IoIosLink className={styles.githubLogo} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
