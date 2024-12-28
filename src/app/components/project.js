import Image from "next/image";
import styles from "../styles/project.module.css";

export default function Project(props) {
  return (
    <div className={styles.projectContainer}>
      <h1 className={styles.projectName}>{props.name}</h1>
      <a href={props.link} target="_blank">
        <Image src={props.image} width={50} height={50} alt={props.name} />
      </a>
      <p>{props.description}</p>
      <div className={styles.tagContainer}>
        {props.tags.map((tag, index) => (
          <button key={index}>
            <p>{tag}</p>
          </button>
        ))}
      </div>
      <a href={props.github} target="_blank">
        <button>GitHub</button>
      </a>
    </div>
  );
}
