import styles from "../../styles/home/home.module.css";

// Rows link to the GitHub repo of the matching entry in projects.json
export default function Projects({ featured, projects }) {
  return (
    <>
      <h2 className={styles.heading}>/ projects</h2>
      <div>
        {featured.map((item) => {
          const source = projects.find((p) => p.name === item.source);
          return (
            <a
              key={item.name}
              className={styles.row}
              href={source?.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>
                <span className={styles.rowTitle}>{item.name}</span>
                {item.subtitle && (
                  <span className={styles.subtitle}> {item.subtitle}</span>
                )}
              </span>
              <span className={styles.mono}>{item.tech}</span>
            </a>
          );
        })}
      </div>
    </>
  );
}
