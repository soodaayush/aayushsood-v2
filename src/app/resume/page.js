import styles from "../styles/resume/resume.module.css";

import ResumeProject from "../components/resume/resumeProject";
import resumeProjects from "../data/resumeProjects.json";

export default function Resume() {
  return (
    <div className={styles.resumeContainer}>
      <div className={styles.row1}>
        <div className={styles.column1}>
          <h1 className={styles.name}>Aayush Sood</h1>
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
          <h3>Projects</h3>
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
          <div>
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
                Firebase, Cloudflare, Netlify, Git, GitHub, iOS, Android, Yarn,
                NPM
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
