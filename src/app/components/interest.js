import styles from "../styles/interest.module.css";

export default function Interest(props) {
  return (
    <div className={styles.interestContainer}>
      <h1 className={styles.interestTitle}>
        <div className={styles.interestIcon}>{props.icon}</div>
        {props.name}
      </h1>
      <p>{props.description}</p>
    </div>
  );
}
