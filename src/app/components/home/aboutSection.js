import styles from "../../styles/home/home.module.css";

export default function About({ roles }) {
  return (
    <>
      <h2 className={styles.heading}>/ about</h2>
      <div>
        {roles.map((item) => (
          <div key={`${item.role}-${item.org}`} className={styles.row}>
            <span>
              <span className={styles.rowTitle}>{item.role}</span>, {item.org}
            </span>
            <span className={styles.mono}>{item.dates}</span>
          </div>
        ))}
      </div>
    </>
  );
}
