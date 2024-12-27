import Image from "next/image";

import styles from "./styles/page.module.css";

import Aayush from "./assets/welcome/aayush.jpg";

import Project from "./components/project";
import TechnicalSkill from "./components/techincalSkill";

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

const technicalSkills = [
  {
    id: 1,
    type: "Frontend",
    skills: [
      { id: 1, name: "HTML", experience: "4 Years" },
      { id: 2, name: "CSS", experience: "4 Years" },
      { id: 3, name: "SCSS", experience: "4 Years" },
      { id: 4, name: "JavaScript", experience: "3 Years" },
      { id: 5, name: "Tailwind CSS", experience: "3 Years" },
      { id: 6, name: "React", experience: "3 Years" },
      { id: 7, name: "Bootstrap CSS", experience: "2 Years" },
    ].sort((a, b) => a.name.localeCompare(b.name)),
  },
  {
    id: 2,
    type: "Backend",
    skills: [
      { id: 8, name: "Python", experience: "1 Year" },
      { id: 9, name: "Node.js", experience: "3 Years" },
      { id: 10, name: "Firebase", experience: "2 Years" },
      { id: 11, name: "SQL", experience: "2 Years" },
      { id: 12, name: "C++", experience: "10 Months" },
    ].sort((a, b) => a.name.localeCompare(b.name)),
  },
  {
    id: 3,
    type: "DevOps/Tools",
    skills: [
      { id: 13, name: "Cloudflare", experience: "2 Years" },
      { id: 14, name: "Netlify", experience: "4 Years" },
      { id: 15, name: "NPM", experience: "3 Years" },
      { id: 16, name: "Yarn", experience: "2 Years" },
      { id: 17, name: "Git", experience: "4 Years" },
      { id: 18, name: "GitHub", experience: "4 Years" },
    ].sort((a, b) => a.name.localeCompare(b.name)),
  },
  {
    id: 4,
    type: "Mobile",
    skills: [
      { id: 19, name: "React Native", experience: "2 Years" },
      { id: 20, name: "iOS", experience: "2 Years" },
      { id: 21, name: "Android", experience: "2 Years" },
    ].sort((a, b) => a.name.localeCompare(b.name)),
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
        <div className={styles.technicalSkillsList}>
          {technicalSkills.map((technicalSkill) => (
            <TechnicalSkill
              key={technicalSkill.id}
              type={technicalSkill.type}
              skills={technicalSkill.skills}
            />
          ))}
        </div>
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
