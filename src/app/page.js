import Image from "next/image";

import styles from "./styles/page.module.css";

import Aayush from "./assets/welcome/aayush.jpg";

import Project from "./components/project";
import TechnicalSkill from "./components/techincalSkill";
import Interest from "./components/interest";

import { FaLaptop, FaCode, FaGamepad, FaGlobe } from "react-icons/fa";
import { PiMathOperationsFill } from "react-icons/pi";
import { MdScience } from "react-icons/md";
import { MdOutlineSportsMartialArts } from "react-icons/md";

const projects = [
  {
    name: "Ben Eater's 8-Bit Project",
    link: "https://www.aayushsood.com/",
    image: Aayush,
    description: "A great website",
    tags: ["Hardware"].sort((a, b) => a.localeCompare(b)),
    github: "https://github.com/soodaayush",
  },
  {
    name: "Ben Eater's 6502 Project",
    link: "https://www.aayushsood.com/",
    image: Aayush,
    description: "A great website",
    tags: ["Arduino", "Python", "Assembly", "C++"].sort((a, b) =>
      a.localeCompare(b)
    ),
    github: "https://github.com/soodaayush",
  },
  {
    name: "LlamaTalk",
    link: "https://www.aayushsood.com/",
    image: Aayush,
    description: "A great website",
    tags: ["HTML", "SCSS", "JavaScript", "Codellama", "Ollama"].sort((a, b) =>
      a.localeCompare(b)
    ),
    github: "https://github.com/soodaayush",
  },
  {
    name: "Arduino-based School Yoga Project",
    link: "https://www.aayushsood.com/",
    image: Aayush,
    description: "A great website",
    tags: ["Arduino", "C++"].sort((a, b) => a.localeCompare(b)),
    github: "https://github.com/soodaayush",
  },
  {
    name: "WordSmith",
    link: "https://wordsmithy.netlify.app/",
    image: Aayush,
    description: "A great website",
    tags: ["HTML", "SCSS", "JavaScript"].sort((a, b) => a.localeCompare(b)),
    github: "https://github.com/soodaayush",
  },
  {
    name: "LeetCode",
    link: "https://www.aayushsood.com/",
    image: Aayush,
    description: "A great website",
    tags: ["JavaScript", "Python", "C++"].sort((a, b) => a.localeCompare(b)),
    github: "https://github.com/soodaayush",
  },
  {
    name: "CoinDeno",
    link: "https://www.aayushsood.com/",
    image: Aayush,
    description: "A great website",
    tags: ["React Native", "Expo", "Firebase", "JavaScript"].sort((a, b) =>
      a.localeCompare(b)
    ),
    github: "https://github.com/soodaayush",
  },
  {
    name: "Pac Man",
    link: "https://www.aayushsood.com/",
    image: Aayush,
    description: "A great website",
    tags: ["HTML", "SCSS", "JavaScript"].sort((a, b) => a.localeCompare(b)),
    github: "https://github.com/soodaayush",
  },
  {
    name: "CoinDeno Web",
    link: "https://www.aayushsood.com/",
    image: Aayush,
    description: "A great website",
    tags: [
      "React",
      "Redux",
      "Vite",
      "Firebase",
      "Tailwind CSS",
      "JavaScript",
    ].sort((a, b) => a.localeCompare(b)),
    github: "https://github.com/soodaayush",
  },
  {
    name: "Frontend Mentor Challenges",
    link: "https://www.aayushsood.com/",
    image: Aayush,
    description: "A great website",
    tags: ["HTML", "SCSS", "JavaScript"].sort((a, b) => a.localeCompare(b)),
    github: "https://github.com/soodaayush",
  },
  {
    name: "LearnWithMe",
    link: "https://www.aayushsood.com/",
    image: Aayush,
    description: "A great website",
    tags: ["HTML", "SCSS"].sort((a, b) => a.localeCompare(b)),
    github: "https://github.com/soodaayush",
  },
];

const technicalSkills = [
  {
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
    type: "Mobile",
    skills: [
      { id: 19, name: "React Native", experience: "2 Years" },
      { id: 20, name: "iOS", experience: "2 Years" },
      { id: 21, name: "Android", experience: "2 Years" },
    ].sort((a, b) => a.name.localeCompare(b.name)),
  },
];

const interests = [
  {
    name: "Gaming",
    icon: <FaGamepad />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
  },
  {
    name: "Math",
    icon: <PiMathOperationsFill />,
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
  },
  {
    name: "Science",
    icon: <MdScience />,
    description:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae..",
  },
  {
    name: "Geopolitics",
    icon: <FaGlobe />,
    description:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  },
  {
    name: "MMA",
    icon: <MdOutlineSportsMartialArts />,
    description:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  },
  {
    name: "Programming",
    icon: <FaCode />,
    description:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  },
  {
    name: "Technology",
    icon: <FaLaptop />,
    description:
      "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
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
          {technicalSkills.map((technicalSkill, index) => (
            <TechnicalSkill
              key={index}
              type={technicalSkill.type}
              skills={technicalSkill.skills}
            />
          ))}
        </div>
      </div>
      <div className={styles.projectsContainer}>
        <h1>Projects</h1>
        <div className={styles.projectList}>
          {projects.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              link={project.link}
              image={project.image}
              description={project.description}
              tags={project.tags}
              github={project.github}
            />
          ))}
        </div>
      </div>
      <div className={styles.interestsContainer}>
        <h1>Interests</h1>
        <div className={styles.interestList}>
          {interests.map((interest, index) => (
            <Interest
              key={index}
              name={interest.name}
              icon={interest.icon}
              description={interest.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
