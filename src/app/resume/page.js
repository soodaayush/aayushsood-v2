import Image from "next/image";

import styles from "../styles/resume/resume.module.css";

import PDF from "../../../public/assets/header-icons/pdf.svg";

import ResumeProject from "../components/resume/resumeProject";
import resumeProjects from "../data/resumeProjects.json";

export const metadata = {
  title: "Resume | Aayush Sood",
  description:
    "View my resume and explore my experience, skills, and education.",
  creator: "Aayush Sood",
  openGraph: {
    title: "Resume | Aayush Sood",
    description:
      "View my resume and explore my experience, skills, and education.",
    url: "https://www.aayushsood.com/resume",
    siteName: "Aayush Sood's Resume",
    images: [
      {
        url: "https://www.aayushsood.com/assets/openGraph/banner.png",
        width: 800,
        height: 600,
        alt: "Aayush Sood's Resume",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Aayush Sood",
    description:
      "View my resume and explore my experience, skills, and education.",
    images: ["https://www.aayushsood.com/assets/openGraph/banner.png"],
  },
  alternates: {
    canonical: "https://www.aayushsood.com/resume",
  },
};

export default function Resume() {
  return (
    <div className={styles.resumeContainer}>
      <div className={`content ${styles.resumeContentContainer}`}>
        <h1 className={styles.name}>Aayush Sood</h1>
        <div className={styles.links}>
          <p>+1 (902) 789-4315</p> |<p>aayush.sood@icloud.com</p> |
          <p>linkedin.com/in/soodaayush</p> |<p>github.com/soodaayush</p> |
          <p>aayushsood.com</p>
        </div>
        <div className={styles.sectionContainer}>
          <h1 className={styles.sectionHeading}>Education</h1>
          <hr className={styles.divider} />
          <div className={styles.schoolContainer}>
            <div className={styles.school}>
              <div className={styles.schoolDetails}>
                <p className={styles.text}>Bay View High School</p>
                <p className={styles.text}>Upper Tantallon, NS</p>
              </div>
              <div className={styles.schoolDetails}>
                <i className={styles.text}>Secondary School - Grade 11</i>
                <p className={styles.text}>Sep. 2023 - Present</p>
              </div>
            </div>
            <div className={styles.school}>
              <div className={styles.schoolDetails}>
                <p className={styles.text}>Ridgecliff Middle School</p>
                <p className={styles.text}>Beechville, NS</p>
              </div>
              <div className={styles.schoolDetails}>
                <i className={styles.text}>Middle School</i>
                <p className={styles.text}>Sep. 2019 - Jun. 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionContainer}>
          <h1 className={styles.sectionHeading}>Accomplishments</h1>
          <hr className={styles.divider} />
          <div className={styles.schoolDetails}>
            <h1 className={styles.text}>
              Some of my notable achievements, included but not limited to:
            </h1>
            <h1 className={styles.text}>Since 2019</h1>
          </div>
          <div className={styles.accomplishmentList}>
            <ul>
              <li>
                Competitively programming on CodeForces.com, Rating 1001, since
                2024
              </li>
              <li>
                Competitively programming on CodeForces.com, Rating 1001, since
                2024
              </li>
              <li>
                Competitively programming on CodeForces.com, Rating 1001, since
                2024
              </li>
              <li>
                Competitively programming on CodeForces.com, Rating 1001, since
                2024
              </li>
              <li>
                Competitively programming on CodeForces.com, Rating 1001, since
                2024
              </li>
              <li>
                Competitively programming on CodeForces.com, Rating 1001, since
                2024
              </li>
              <li>
                Competitively programming on CodeForces.com, Rating 1001, since
                2024
              </li>
              <li>
                Competitively programming on CodeForces.com, Rating 1001, since
                2024
              </li>
              <li>
                Competitively programming on CodeForces.com, Rating 1001, since
                2024
              </li>
              <li>
                Competitively programming on CodeForces.com, Rating 1001, since
                2024
              </li>
              <li>
                Competitively programming on CodeForces.com, Rating 1001, since
                2024
              </li>
              <li>
                Competitively programming on CodeForces.com, Rating 1001, since
                2024
              </li>
              <li>
                Competitively programming on CodeForces.com, Rating 1001, since
                2024
              </li>
              <li>
                Competitively programming on CodeForces.com, Rating 1001, since
                2024
              </li>
              <li>
                Competitively programming on CodeForces.com, Rating 1001, since
                2024
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.sectionContainer}>
          <h1 className={styles.sectionHeading}>Projects</h1>
          <hr className={styles.divider} />
          <div className={styles.projectContainer}>
            <div className={styles.project}>
              <div className={styles.projectDetails}>
                <p className={styles.text}>
                  Bay View High School - Mobile App |
                  <i> React Native, JavaScript, Expo, Git</i>
                </p>
                <p className={styles.text}>July 2024 - September 2024</p>
              </div>
              <ul className={styles.projectNotes}>
                <li>
                  Developed a Bay View High School Mobile app to present the
                  school with a handheld presence
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.sectionContainer}>
          <h1 className={styles.sectionHeading}>Technical Skills</h1>
          <hr className={styles.divider} />
          <div className={styles.technicalSkillsContainer}>
            <div className={styles.skill}>
              <b>Languages: </b> <p className={styles.text}>HTML, CSS</p>
            </div>
            <div className={styles.skill}>
              <b>Languages: </b> <p className={styles.text}>HTML, CSS</p>
            </div>
            <div className={styles.skill}>
              <b>Languages: </b> <p className={styles.text}>HTML, CSS</p>
            </div>
            <div className={styles.skill}>
              <b>Languages: </b> <p className={styles.text}>HTML, CSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
