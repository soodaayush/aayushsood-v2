"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

import Image from "next/image";

import styles from "./styles/page.module.css";

import Aayush from "./assets/welcome/aayush.jpg";
import BVHMobileApp from "./assets/projects/thumbnails/bvh-mobile-app.png";
import eightBit from "./assets/projects/thumbnails/8-bit-computer.webp";
import sixtyFiveZeroTwo from "./assets/projects/thumbnails/6502.webp";
import llamaTalk from "./assets/projects/thumbnails/llamatalk.png";
import arduinoYogaProject from "./assets/projects/thumbnails/arduino-yoga-project.webp";
import wordSmith from "./assets/projects/thumbnails/wordsmith.png";
import leetCode from "./assets/projects/thumbnails/leetcode.png";
import coinDeno from "./assets/projects/thumbnails/coindeno.png";
import pacMan from "./assets/projects/thumbnails/pac-man.png";
import coinDenoWeb from "./assets/projects/thumbnails/coindeno-web.png";
import frontendMentorChallenges from "./assets/projects/thumbnails/frontend-mentor-challenges.png";
import learnWithMe from "./assets/projects/thumbnails/learn-with-me.png";

import wave from "./assets/welcome/wave.svg";

import Project from "./components/project";
import TechnicalSkill from "./components/techincalSkill";
import Interest from "./components/interest";

import { FaLaptop, FaCode, FaGamepad, FaGlobe } from "react-icons/fa";
import { PiMathOperationsFill } from "react-icons/pi";
import { MdScience } from "react-icons/md";
import { MdOutlineSportsMartialArts } from "react-icons/md";

const projects = [
  {
    name: "Bay View High School Mobile App",
    image: BVHMobileApp,
    description: "A great website",
    tags: ["React Native", "Expo"].sort((a, b) => a.localeCompare(b)),
    year: 2024,
    github: "https://github.com/soodaayush/BVHApp",
  },
  {
    name: "Ben Eater's 8-Bit Project",
    image: eightBit,
    description: "A great website",
    tags: ["Hardware"].sort((a, b) => a.localeCompare(b)),
    year: 2024,
    github: "https://github.com/soodaayush",
  },
  {
    name: "Ben Eater's 6502 Project",
    image: sixtyFiveZeroTwo,
    description: "A great website",
    tags: ["Arduino", "Python", "Assembly", "C++"].sort((a, b) =>
      a.localeCompare(b)
    ),
    year: 2024,
    github: "https://github.com/soodaayush/6502-project",
  },
  {
    name: "LlamaTalk",
    image: llamaTalk,
    description: "A great website",
    tags: ["HTML", "SCSS", "JavaScript", "Codellama"].sort((a, b) =>
      a.localeCompare(b)
    ),
    year: 2024,
    github: "https://github.com/soodaayush/llamatalk",
  },
  {
    name: "Arduino-based School Yoga Project",
    image: arduinoYogaProject,
    description: "A great website",
    tags: ["Arduino", "C++"].sort((a, b) => a.localeCompare(b)),
    year: 2024,
    github: "https://github.com/soodaayush/arduino-school-yoga-project",
  },
  {
    name: "WordSmith",
    website: "https://wordsmithy.netlify.app/",
    image: wordSmith,
    description: "A great website",
    tags: ["HTML", "SCSS", "JavaScript"].sort((a, b) => a.localeCompare(b)),
    year: 2024,
    github: "https://github.com/soodaayush/wordsmith",
  },
  {
    name: "LeetCode",
    image: leetCode,
    description: "A great website",
    tags: ["JavaScript", "Python", "C++"].sort((a, b) => a.localeCompare(b)),
    year: 2022,
    github: "https://github.com/soodaayush/leetcode",
  },
  {
    name: "CoinDeno",
    website: "https://coindeno.netlify.app/",
    image: coinDeno,
    description: "A great website",
    tags: ["React Native", "Expo", "Firebase", "JavaScript"].sort((a, b) =>
      a.localeCompare(b)
    ),
    year: 2022,
    github: "https://github.com/soodaayush/coindeno",
  },
  {
    name: "Pac Man",
    website: "https://pac-man-wb.netlify.app/",
    image: pacMan,
    description: "A great website",
    tags: ["HTML", "SCSS", "JavaScript"].sort((a, b) => a.localeCompare(b)),
    year: 2021,
    github: "https://github.com/soodaayush/pac-man",
  },
  {
    name: "CoinDeno Web",
    website: "https://warbaddy.com/",
    image: coinDenoWeb,
    description: "A great website",
    tags: ["React", "Redux", "Firebase", "Tailwind CSS"].sort((a, b) =>
      a.localeCompare(b)
    ),
    year: 2021,
    github: "https://github.com/soodaayush/coindeno-web",
  },
  {
    name: "Frontend Mentor Challenges",
    website: "https://challenges-wb.netlify.app/",
    image: frontendMentorChallenges,
    description: "A great website",
    tags: ["HTML", "SCSS", "JavaScript"].sort((a, b) => a.localeCompare(b)),
    year: 2020,
    github: "https://github.com/soodaayush/frontend-mentor-challenges",
  },
  {
    name: "LearnWithMe",
    website: "https://learningwithme.netlify.app/",
    image: learnWithMe,
    description: "A great website",
    tags: ["HTML", "SCSS"].sort((a, b) => a.localeCompare(b)),
    year: 2020,
    github: "https://github.com/soodaayush/learn-with-me",
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
  const roles = [
    "fullstack developer!",
    "student!",
    "competitive programmer!",
    "creator!",
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [numVisibleProjects, setNumVisibleProjects] = useState(3);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const updateVisibleProjects = () => {
      const width = window.innerWidth;
      if (width <= 720) {
        setNumVisibleProjects(1);
      } else if (width <= 1080) {
        setNumVisibleProjects(2);
      } else {
        setNumVisibleProjects(3);
      }
    };

    updateVisibleProjects();

    window.addEventListener("resize", updateVisibleProjects);

    let typingTimeout;
    const updateText = () => {
      const fullText = `Hi, I am Aayush and I am a `;
      const currentRole = roles[roleIndex];

      const fullRoleText = fullText + currentRole;
      const displayedRole = text.slice(fullText.length);

      if (!isDeleting) {
        setText((prev) => {
          const nextText = fullRoleText.slice(0, prev.length + 1);
          if (nextText === fullRoleText) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
          return nextText;
        });
        typingTimeout = setTimeout(updateText, 50);
      } else {
        if (displayedRole.length > 0) {
          setText((prev) => prev.slice(0, -1));
          typingTimeout = setTimeout(updateText, 40);
        } else {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    };

    typingTimeout = setTimeout(updateText, 100);

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 600);

    return () => {
      window.removeEventListener("resize", updateVisibleProjects);
      clearTimeout(typingTimeout);
      clearInterval(cursorInterval);
    };
  }, [text, isDeleting, roleIndex, roles]);

  const visibleProjects = [];
  for (let i = 0; i < numVisibleProjects; i++) {
    visibleProjects.push(projects[(currentIndex + i) % projects.length]);
  }

  return (
    <div className={styles.homeContainer}>
      <div className={styles.welcomeContainer}>
        <div className={`content ${styles.welcomeContent}`}>
          <motion.div
            className={styles.welcomeText}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {text}
            {cursorVisible && <span>|</span>}
          </motion.div>
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.7)",
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              className={styles.profileImageContainer}
            >
              <Image
                className={styles.picture}
                src={Aayush}
                height={250}
                width={250}
                alt="Aayush"
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className={styles.curve}>
        <Image
          className={styles.image}
          src={wave}
          height={250}
          width={250}
          alt="Wave"
        />
      </div>
      <div className={styles.technicalSkillsContainer}>
        <h1 className={styles.sectionHeading}>Technical Skills</h1>
        <div className="content">
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
      </div>
      <div className={styles.projectsContainer}>
        <div className={`content ${styles.projectContent}`}>
          <h1 className={styles.sectionHeading}>Projects</h1>
          <motion.div
            initial={{ opacity: 0, y: 50, visibility: "hidden" }}
            whileInView={{ opacity: 1, y: 0, visibility: "visible" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className={styles.projectList}
          >
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.name}
                className={`${styles.projectCard}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <Project {...project} />
              </motion.div>
            ))}
          </motion.div>
          <div className={styles.projectToggles}>
            <button className={styles.projectToggle} onClick={prevProject}>
              ← Prev
            </button>
            <button className={styles.projectToggle} onClick={nextProject}>
              Next →
            </button>
          </div>
        </div>
      </div>
      <div className={styles.interestsContainer}>
        <div className={`content ${styles.interestsContent}`}>
          <h1 className={styles.sectionHeading}>Interests</h1>
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
    </div>
  );
}
