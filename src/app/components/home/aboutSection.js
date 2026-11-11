import styles from "../../styles/home/home.module.css";

// A role with an `href` is a link to the organization, like the project rows
export default function About({ roles }) {
  return (
    <>
      <h2 className={styles.heading}>/ about</h2>
      <div>
        {roles.map((item) => {
          const content = (
            <>
              <span>
                <span className={styles.rowTitle}>{item.role}</span>, {item.org}
              </span>
              <span className={styles.mono}>{item.dates}</span>
            </>
          );
          const key = `${item.role}-${item.org}`;

          return item.href ? (
            <a
              key={key}
              className={styles.row}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content}
            </a>
          ) : (
            <div key={key} className={styles.row}>
              {content}
            </div>
          );
        })}
      </div>
    </>
  );
}
