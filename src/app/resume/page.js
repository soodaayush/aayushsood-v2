import styles from "../styles/resume/resume.module.css";

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
        <div className={`${styles.projects} ${styles.column2}`}>
          <h3>Projects</h3>
          <div className={styles.project}>
            <div class="project-details">
              <a
                target="_blank"
                className={styles.headerText}
                href="https://warbaddy.com/"
              >
                CoinDeno Web
              </a>
              <p className={styles.dateText}>August 2021 - July 2022</p>
            </div>
            <ul>
              <li className={styles.bodyText}>
                Created a React website that allows tracking and portfolio
                management of various Cryptocurrencies.
              </li>
              <li className={styles.bodyText}>
                Utilized React, Firebase, and Redux for application development,
                with CoinGecko REST APIs for cryptocurrency data integration.
              </li>
              <li className={styles.bodyText}>
                Deployed the application using continuous integration and
                continuous deployment (CI/CD) practices, ensuring reliability
                and fast iteration.
              </li>
            </ul>
          </div>
        </div>
        <div className={`${styles.column2}`}>
          <h3>Technical Skills</h3>
        </div>
      </div>
    </div>
  );
}
