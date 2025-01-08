"use client";

import { motion } from "motion/react";

import Image from "next/image";
import styles from "../../styles/home/project.module.css";

import GitHub from "../../assets/header-icons/github.svg";
import Link from "../../assets/projects/link.svg";

export default function Project(props) {
  return (
    <motion.div
      style={{
        background: props.gradient,
        transform: props.rotate,
      }}
      className={styles.projectContainer}
    >
      <a href={props.link} className={styles.imageContainer} target="_blank">
        <Image
          className={styles.projectThumbnail}
          src={props.image}
          width={250}
          height={150}
          alt={props.name}
        />
      </a>
      <h2 className={styles.projectName}>{props.name}</h2>
      <div className={styles.tagContainer}>
        {props.tags.map((tag, index) => (
          <button className={styles.tag} key={index}>
            {tag}
          </button>
        ))}
      </div>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.links}>
        <div className={styles.year}>{props.year}</div>
        <div>
          <a href={props.github} className={styles.link} target="_blank">
            <Image
              className={styles.githubLogo}
              src={GitHub}
              height={25}
              width={25}
              alt="GitHub"
            />
          </a>
          {props.website && (
            <a href={props.website} className={styles.link} target="_blank">
              <Image
                className={styles.githubLogo}
                src={Link}
                height={25}
                width={25}
                alt="Website"
              />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
