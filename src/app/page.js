import styles from "./styles/page.module.css";
import Image from "next/image";
import Aayush from "./assets/welcome/aayush.jpg";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.welcomeContainer}>
        <h1>
          Hi, I am Aayush <br /> And I am a fullstack developer
        </h1>
        <div>
          <Image
            className={styles.image}
            src={Aayush}
            height={250}
            width={250}
            alt="Aayush"
          />
        </div>
      </div>
      <div className={styles.technicalSkillsContainer}>
        <h1>Technical Skills</h1>
      </div>
      <div className={styles.technicalSkillsContainer}>
        <h1>Projects</h1>
      </div>
    </div>
  );
}
