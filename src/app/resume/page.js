"use client";

import { motion, AnimatePresence } from "motion/react";

import Image from "next/image";

import styles from "../styles/resume/resume.module.css";

import PDF from "../../../public/assets/header-icons/pdf.svg";

import ResumeProject from "../components/resume/resumeProject";
import resumeProjects from "../data/resumeProjects.json";

export default function Resume() {
  return (
    <div className={styles.resumeContainer}>
      <div className={`content ${styles.resumeContentContainer}`}>
        <div className={styles.row1}>
          <div className={styles.column1}>
            <div className={styles.nameContainer}>
              <h1 className={styles.name}>Aayush Sood</h1>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={styles.button}
              >
                <a href="assets/resume/resume.pdf" target="_blank">
                  <Image
                    src={PDF}
                    width={40}
                    height={40}
                    alt="GitHub"
                    className={styles.svg}
                  />
                </a>
              </motion.button>
            </div>
            <label>Aspiring Intern & Fullstack Developer</label>
          </div>
          <div className={`${styles.column2} ${styles.contact}`}>
            <a className={styles.link} target="_blank" href="tel:9027894315">
              +1 (902) 789-4315
            </a>
            <a
              className={styles.link}
              target="_blank"
              href="mailto:aayush.sood@icloud.com"
            >
              aayush.sood@icloud.com
            </a>
            <a
              className={styles.link}
              target="_blank"
              href="https://aayushsood.com/"
            >
              aayushsood.com
            </a>
            <a
              className={styles.link}
              target="_blank"
              href="https://github.com/soodaayush"
            >
              github.com/soodaayush
            </a>
            <a
              className={styles.link}
              target="_blank"
              href="https://www.linkedin.com/in/soodaayush/"
            >
              linkedin.com/in/soodaayush
            </a>
          </div>
        </div>
        <div className={styles.row2}>
          <div className={`${styles.projects} ${styles.column1}`}>
            <h3 className={styles.headerTitle}>Projects</h3>
            {resumeProjects.map((project, index) => (
              <ResumeProject
                key={index}
                name={project.name}
                date={project.date}
                link={project.link}
                bullets={project.bullets}
              />
            ))}
          </div>
          <div className={`${styles.column2}`}>
            <div className={styles.section}>
              <h3 className={styles.headerTitle}>Technical Skills</h3>
              <div className={styles.sectionDetail}>
                <h3 className={styles.headerText}>Programming Languages</h3>
                <p className={styles.bodyText}>
                  HTML, CSS, SCSS, JavaScript, Python, SQL, C++
                </p>
              </div>
              <div className={styles.sectionDetail}>
                <h3 className={styles.headerText}>Libraries & Frameworks</h3>
                <p className={styles.bodyText}>
                  React, React Native, Bootstrap, Tailwind CSS, Node.js
                </p>
              </div>
              <div className={styles.sectionDetail}>
                <h3 className={styles.headerText}>Tools & Platforms</h3>
                <p className={styles.bodyText}>
                  Firebase, Cloudflare, Netlify, Git, GitHub, iOS, Android,
                  Yarn, NPM
                </p>
              </div>
            </div>
            <div className={styles.section}>
              <h3 className={styles.headerTitle}>Education</h3>
              <div className={styles.sectionDetail}>
                <h3 className={styles.headerText}>Bay View High School</h3>
                <p className={styles.bodyText}>Upper Tantallon, NS</p>
                <p className={styles.bodyText}>2023 - Present</p>
              </div>
              <div className={styles.sectionDetail}>
                <h3 className={styles.headerText}>Ridgecliff Middle School</h3>
                <p className={styles.bodyText}>Beechville, NS</p>
                <p className={styles.bodyText}>2019 - 2023</p>
              </div>
            </div>
            <div className={styles.section}>
              <h3 className={styles.headerTitle}>Accomplishments</h3>
              <div className={styles.sectionDetail}>
                <ul className={styles.list}>
                  <li className={`${styles.bodyText} ${styles.listItem}`}>
                    Completed Harvard's <strong>CS50</strong>: Introduction to
                    Computer Science
                  </li>
                  <li className={`${styles.bodyText} ${styles.listItem}`}>
                    Invited to and participated in an exclusive{" "}
                    <strong>math camp</strong> hosted by{" "}
                    <strong>Dalhousie University</strong>
                  </li>
                  <li className={`${styles.bodyText} ${styles.listItem}`}>
                    Recipient of the <strong>Innovative Mind Award</strong>
                  </li>
                  <li className={`${styles.bodyText} ${styles.listItem}`}>
                    Recipient of the{" "}
                    <strong>Mathematics Achievement Award</strong>
                  </li>
                  <li className={`${styles.bodyText} ${styles.listItem}`}>
                    Made Honour Rolls in junior division of{" "}
                    <strong>
                      University of Waterloo's Canadian Computing Competition
                    </strong>
                  </li>
                  <li className={`${styles.bodyText} ${styles.listItem}`}>
                    Achieved <strong>first place</strong> in a{" "}
                    <strong>regional Improv competition</strong>
                  </li>
                  <li className={`${styles.bodyText} ${styles.listItem}`}>
                    Earned <strong>medals in Jiu Jitsu tournaments</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
