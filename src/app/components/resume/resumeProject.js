import styles from "../../styles/resume/resumeProject.module.css";

export default function ResumeProject(props) {
  return (
    <div className={styles.project}>
      <div className={styles.projectDetails}>
        <a
          target="_blank"
          className={`${styles.headerText} ${styles.link} ${styles.projectTitle}`}
          href={props.link}
        >
          {props.name}
        </a>
        <p className={styles.dateText}>{props.date}</p>
      </div>
      <ul>
        {props.bullets.map((bullet, index) => (
          <li key={index} className={styles.bodyText}>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
