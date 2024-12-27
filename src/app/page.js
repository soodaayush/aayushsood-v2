import styles from "./styles/page.module.css";
import Image from "next/image";
import Aayush from "./assets/welcome/aayush.jpg";
import Project from "./components/project";

const projects = [
  {
    id: 1,
    name: "Ben Eater's 8-Bit Project",
    link: "https://www.aayushsood.com/",
    image: Aayush,
    description: "A great website",
    tags: ["Hardware"],
    github: "https://github.com/soodaayush",
  },
  {
    id: 2,
    name: "Ben Eater's 8-Bit Project",
    link: "https://www.aayushsood.com/",
    image: Aayush,
    description: "A great website",
    github: "https://github.com/soodaayush",
  },
  {
    id: 3,
    name: "Ben Eater's 8-Bit Project",
    link: "https://www.aayushsood.com/",
    image: Aayush,
    description: "A great website",
    github: "https://github.com/soodaayush",
  },
  {
    id: 4,
    name: "Ben Eater's 8-Bit Project",
    link: "https://www.aayushsood.com/",
    image: Aayush,
    description: "A great website",
    github: "https://github.com/soodaayush",
  },
];

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
      <div className={styles.projectsContainer}>
        <h1>Projects</h1>
        <div className={styles.projectList}>
          {projects.map((project) => (
            <Project
              key={project.id}
              name={project.name}
              link={project.link}
              image={project.image}
              description={project.description}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
