import Image from "next/image";
import styles from "../styles/project.module.css";

import GitHub from "../assets/header-icons/github.svg";

export default function Project(props) {
  return (
    <div className={styles.projectContainer}>
      <h1 className={styles.projectName}>{props.name}</h1>
      <a href={props.link} target="_blank">
        <Image src={props.image} width={250} height={150} alt={props.name} />
      </a>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.tagContainer}>
        {props.tags.map((tag, index) => (
          <button className={styles.tag} key={index}>
            {tag}
          </button>
        ))}
      </div>
      <a href={props.github} target="_blank">
        <button className={styles.githubButton}>
          <Image
            className={styles.githubLogo}
            src={GitHub}
            height={30}
            width={30}
            alt="GitHub"
          />
          GitHub
        </button>
      </a>
    </div>
  );
}
