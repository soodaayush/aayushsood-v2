"use client";

import styles from "../../styles/resume/resume.module.css";
import { motion } from "motion/react";

import {
  FaRegFilePdf,
  FaGithub,
  FaPhoneAlt,
  FaGraduationCap,
  FaExternalLinkAlt,
  FaBriefcase,
  FaCode,
  FaTools,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { HiGlobeAmericas } from "react-icons/hi2";

const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
const transition = { duration: 0.45, ease: "easeOut" };

function Chips({ items }) {
  return (
    <div className={styles.chipContainer}>
      {items.map((item) => (
        <span key={item} className={styles.chip}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default function ResumeContent() {
  return (
    <div className={styles.resumeContainer}>
      <div className={`content ${styles.resumeContentContainer}`}>
        <motion.div
          className={styles.intro}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className={styles.name}>
            Aayush Sood
            <a href="assets/resume/resume.pdf" target="_blank">
              <FaRegFilePdf className={styles.svg} />
            </a>
          </h1>
          <div className={styles.links}>
            <a
              className={`${styles.contact} ${styles.link} ${styles.text} ${styles.underline}`}
              href="mailto:aayush.sood@icloud.com"
              target="_blank"
            >
              <IoMdMail />
              aayush.sood@uwaterloo.ca
            </a>
            <p className={`${styles.text} ${styles.linkDivider}`}>|</p>
            <a
              className={`${styles.contact} ${styles.link} ${styles.text} ${styles.underline}`}
              href="tel:+19027894315"
              target="_blank"
            >
              <FaPhoneAlt />
              +1 (902) 789-4315
            </a>
            <p className={`${styles.text} ${styles.linkDivider}`}>|</p>
            <a
              className={`${styles.contact} ${styles.link} ${styles.text} ${styles.underline}`}
              href="https://www.linkedin.com/in/soodaayush/"
              target="_blank"
            >
              <FaLinkedinIn />
              in/soodaayush
            </a>
            <p className={`${styles.text} ${styles.linkDivider}`}>|</p>
            <a
              className={`${styles.contact} ${styles.link} ${styles.text} ${styles.underline}`}
              href="https://github.com/soodaayush"
              target="_blank"
            >
              <FaGithub />
              /soodaayush
            </a>
            <p className={`${styles.text} ${styles.linkDivider}`}>|</p>
            <a
              className={`${styles.contact} ${styles.link} ${styles.text} ${styles.underline}`}
              href="https://www.aayushsood.com/"
              target="_blank"
            >
              <HiGlobeAmericas />
              aayushsood.com
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          transition={transition}
        >
          <div className={styles.sectionHeadingRow}>
            <FaGraduationCap className={styles.sectionIcon} />
            <h1 className={styles.sectionHeading}>Education</h1>
          </div>
          <hr className={styles.divider} />
          <div className={styles.schoolContainer}>
            <div className={styles.school}>
              <div className={styles.schoolDetails}>
                <b className={styles.text}>University of Waterloo</b>
                <p className={styles.text}>Waterloo, ON</p>
              </div>
              <div className={styles.schoolDetails}>
                <i className={styles.text}>
                  Honours Software Engineering, Co-op (Incoming)
                </i>
                <i className={styles.text}>2026 - 2031</i>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          transition={transition}
        >
          <div className={styles.sectionHeadingRow}>
            <FaCode className={styles.sectionIcon} />
            <h1 className={styles.sectionHeading}>Projects</h1>
          </div>
          <hr className={styles.divider} />
          <div className={styles.projectContainer}>
            <div className={styles.project}>
              <div className={styles.projectDetails}>
                <p
                  className={`${styles.text} ${styles.projectHeading} ${styles.projectTitle}`}
                >
                  IWKids - Mobile App
                  <a
                    className={styles.link}
                    target="_blank"
                    href="https://github.com/soodaayush/IWKids"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </p>
                <p className={`${styles.text} ${styles.projectHeading}`}>
                  Apr 2025 - May 2025
                </p>
              </div>
              <p className={`${styles.text} ${styles.techStackLabel}`}>
                React Native, JavaScript, Expo, Git, OpenAI API
              </p>
              <ul className={`${styles.projectNotes} ${styles.text}`}>
                <li>
                  Developed an AI-powered mobile app to help families navigate
                  emergency room visits at the IWK Hospital in Halifax, NS
                </li>
                <li>
                  Integrated OpenAI API to provide conversational guidance and
                  automate user support workflows
                </li>
                <li>
                  Designed and implemented a cross-platform React Native
                  interface designed for iOS and Android
                </li>
                <li>
                  Placed 2nd at the Atlantic Canada AI Summit Youth AI Pitch
                  Competition for presenting the application
                </li>
              </ul>
            </div>
            <div className={styles.project}>
              <div className={styles.projectDetails}>
                <p
                  className={`${styles.text} ${styles.projectHeading} ${styles.projectTitle}`}
                >
                  Bay View High School - Mobile App
                  <a
                    className={styles.link}
                    target="_blank"
                    href="https://github.com/soodaayush/BVHApp"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </p>
                <p className={`${styles.text} ${styles.projectHeading}`}>
                  Jul 2024 - Sep 2024
                </p>
              </div>
              <p className={`${styles.text} ${styles.techStackLabel}`}>
                React Native, JavaScript, Expo, Git
              </p>
              <ul className={`${styles.projectNotes} ${styles.text}`}>
                <li>
                  Developed a React Native mobile application providing students
                  access to school announcements, events, and resources
                </li>
                <li>
                  Implemented responsive UI components and cross-platform
                  functionality for iOS and Android
                </li>
                <li>
                  Built application workflows using Expo to streamline
                  development, testing, and iteration
                </li>
              </ul>
            </div>
            <div className={styles.project}>
              <div className={styles.projectDetails}>
                <p
                  className={`${styles.text} ${styles.projectHeading} ${styles.projectTitle}`}
                >
                  Ben Eater&apos;s 6502 Project
                  <a
                    className={styles.link}
                    target="_blank"
                    href="https://github.com/soodaayush/6502-project"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </p>
                <p className={`${styles.text} ${styles.projectHeading}`}>
                  Apr 2024 - Jul 2024
                </p>
              </div>
              <p className={`${styles.text} ${styles.techStackLabel}`}>
                Python, Assembly
              </p>
              <ul className={`${styles.projectNotes} ${styles.text}`}>
                <li>
                  A collection of hardware bread-boarding project surrounding
                  the 6502 CPU, inspired by{" "}
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://eater.net/"
                    target="_blank"
                  >
                    Ben Eater
                  </a>
                </li>
                <li>
                  Programmed low-level routines in Assembly to explore CPU
                  architecture, memory operations, and instruction execution
                </li>
              </ul>
            </div>
            <div className={styles.project}>
              <div className={styles.projectDetails}>
                <p
                  className={`${styles.text} ${styles.projectHeading} ${styles.projectTitle}`}
                >
                  CoinDeno Web / Mobile
                  <a
                    className={styles.link}
                    target="_blank"
                    href="https://warbaddy.com/"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </p>
                <p className={`${styles.text} ${styles.projectHeading}`}>
                  Aug 2021 - Sep 2022
                </p>
              </div>
              <p className={`${styles.text} ${styles.techStackLabel}`}>
                React.js, React Native, REST, Git, Firebase, CoinGecko APIs
              </p>
              <ul className={`${styles.projectNotes} ${styles.text}`}>
                <li>
                  Developed a cryptocurrency portfolio tracker using React.js
                  and Firebase with CoinGecko API integration for real-time
                  market data
                </li>
                <li>
                  mplemented user authentication using Google OAuth and Firebase
                  Authentication
                </li>
                <li>
                  Built and released a React Native mobile application
                  supporting Android and iOS platforms
                </li>
                <li>
                  Maintained application releases through iterative deployment
                  workflows
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          transition={transition}
        >
          <div className={styles.sectionHeadingRow}>
            <FaBriefcase className={styles.sectionIcon} />
            <h1 className={styles.sectionHeading}>Experience</h1>
          </div>
          <hr className={styles.divider} />
          <div className={styles.projectContainer}>
            <div className={styles.project}>
              <div className={styles.projectDetails}>
                <p
                  className={`${styles.text} ${styles.projectHeading} ${styles.projectTitle}`}
                >
                  Stanford University&apos;s Code in Place - Section Lead
                </p>
                <p className={`${styles.text} ${styles.projectHeading}`}>
                  Apr 2025, Apr 2026
                </p>
              </div>
              <ul className={`${styles.projectNotes} ${styles.text}`}>
                <li>
                  Led weekly Python instruction sessions for a cohort of 15
                  learners in Stanford&apos;s global computer science education
                  initiative
                </li>
                <li>
                  Mentored students through debugging, assignments, and
                  programming concepts while fostering an inclusive learning
                  environment
                </li>
                <li>
                  Collaborated with Stanford faculty and global volunteers to
                  deliver accessible CS education
                </li>
              </ul>
            </div>

            <div className={styles.project}>
              <div className={styles.projectDetails}>
                <p
                  className={`${styles.text} ${styles.projectHeading} ${styles.projectTitle}`}
                >
                  Nova Scotia Secondary School Students&apos; Association - IT
                  Coordinator
                </p>
                <p className={`${styles.text} ${styles.projectHeading}`}>
                  Apr 2025 - Jun 2026
                </p>
              </div>
              <ul className={`${styles.projectNotes} ${styles.text}`}>
                <li>
                  Managed digital infrastructure across Microsoft 365, Google
                  Workspace, Moodle, WordPress, and Canva platforms
                </li>
                <li>
                  Handled user account lifecycle management and technical
                  support through NSSSA helpdesk workflows
                </li>
                <li>
                  Led redesign and modernization of NSSSA&apos;s website,
                  improving accessibility and information flow for students and
                  staff
                </li>
              </ul>
            </div>

            <div className={styles.project}>
              <div className={styles.projectDetails}>
                <p
                  className={`${styles.text} ${styles.projectHeading} ${styles.projectTitle}`}
                >
                  Student Council Executive & Tech Club President
                </p>
                <p className={`${styles.text} ${styles.projectHeading}`}>
                  Sep 2023 - Jun 2026
                </p>
              </div>
              <ul className={`${styles.projectNotes} ${styles.text}`}>
                <li>
                  Led student initiatives including events, fundraisers,
                  technology workshops, and hands-on projects
                </li>
                <li>
                  Grew Technology Club membership from 3-4 to 30+ members with
                  20+ weekly attendees through expanded programming
                </li>
                <li>
                  Mentored students in technical skills while managing club
                  operations and stakeholder collaboration
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp}
          transition={transition}
        >
          <div className={styles.sectionHeadingRow}>
            <FaTools className={styles.sectionIcon} />
            <h1 className={styles.sectionHeading}>Skills</h1>
          </div>
          <hr className={styles.divider} />
          <div className={styles.technicalSkillsContainer}>
            <div className={styles.skill}>
              <b className={styles.text}>Languages:</b>
              <Chips items={["Python", "C++", "JavaScript", "SQL"]} />
            </div>
            <div className={styles.skill}>
              <b className={styles.text}>Frameworks:</b>
              <Chips
                items={["React", "React Native", "Node.js", "HTML", "CSS/SCSS"]}
              />
            </div>
            <div className={styles.skill}>
              <b className={styles.text}>Tools:</b>
              <Chips
                items={["Firebase", "Cloudflare", "Netlify", "Git", "GitHub"]}
              />
            </div>
            <div className={styles.skill}>
              <b className={styles.text}>Operating Systems:</b>
              <Chips items={["Linux", "Windows", "MacOS"]} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
