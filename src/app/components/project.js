import Image from "next/image";
import styles from "../styles/project.module.css";

export default function Project(props) {
  return (
    <div className={styles.projectContainer}>
      <h1>{props.name}</h1>
      <a href={props.link} target="_blank">
        <Image src={props.image} width={50} height={50} alt={props.title} />
      </a>
      <p>{props.description}</p>
      <a href={props.github}></a>
    </div>
  );
}
