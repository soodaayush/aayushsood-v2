"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

import Image from "next/image";

import styles from "./styles/home/page.module.css";

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

import Project from "./components/home/project";
import TechnicalSkill from "./components/home/techincalSkill";
import Interest from "./components/home/interest";

import { FaLaptop, FaCode, FaGamepad, FaGlobe } from "react-icons/fa";
import { PiMathOperationsFill } from "react-icons/pi";
import { MdScience } from "react-icons/md";
import { MdOutlineSportsMartialArts } from "react-icons/md";

const projects = [
  {
    name: "BVHS Mobile App",
    image: BVHMobileApp,
    description:
      "A mobile app I created for my high school for an easier distribution of information. This was created for Harvard University's CS50x.",
    tags: ["React Native", "Expo"].sort((a, b) => a.localeCompare(b)),
    year: 2024,
    github: "https://github.com/soodaayush/BVHApp",
    gradient: "linear-gradient( #6D4D87, #875E92, #A06E9D)",
  },
  {
    name: "Ben Eater's 8-Bit Project",
    image: eightBit,
    description:
      "A project involving the creation of an 8-bit computer, inspired by Ben Eater.",
    tags: ["Hardware"].sort((a, b) => a.localeCompare(b)),
    year: 2024,
    github: "https://github.com/soodaayush",
    gradient: "linear-gradient( #C68A3E, #C26F3E, #BE543E)",
  },
  {
    name: "Ben Eater's 6502 Project",
    image: sixtyFiveZeroTwo,
    description:
      "A series of hardware projects surrounding the 6502 CPU, inspired by Ben Eater.",
    tags: ["Arduino", "Python", "Assembly", "C++"].sort((a, b) =>
      a.localeCompare(b)
    ),
    year: 2024,
    github: "https://github.com/soodaayush/6502-project",
    gradient: "linear-gradient( #715C6A, #924D60, #B33E56)",
  },
  {
    name: "LlamaTalk",
    image: llamaTalk,
    description:
      "A website that allows you to interact with Meta's Codellama, through a service called Ollama.",
    tags: ["HTML", "SCSS", "JavaScript", "Codellama"].sort((a, b) =>
      a.localeCompare(b)
    ),
    year: 2024,
    github: "https://github.com/soodaayush/llamatalk",
    gradient: "linear-gradient( #238F76, #1E8A7D, #188583)",
  },
  {
    name: "Arduino-based School Yoga Project",
    image: arduinoYogaProject,
    description:
      "An Arduino project that reminds the user to meditate. This was used as a submission for my Yoga exam.",
    tags: ["Arduino", "C++"].sort((a, b) => a.localeCompare(b)),
    year: 2024,
    github: "https://github.com/soodaayush/arduino-school-yoga-project",
    gradient: "linear-gradient( #894B15, #9C6512, #A8760F)",
  },
  {
    name: "WordSmith",
    website: "https://wordsmithy.netlify.app/",
    image: wordSmith,
    description:
      "A website that allows you to play a word guessing game involving the comparison of two words.",
    tags: ["HTML", "SCSS", "JavaScript"].sort((a, b) => a.localeCompare(b)),
    year: 2024,
    github: "https://github.com/soodaayush/wordsmith",
    gradient: "linear-gradient( #433873, #323B71, #213E6F)",
  },
  {
    name: "LeetCode",
    image: leetCode,
    description:
      "A collection of my solved LeetCode problems, written in multiple languages.",
    tags: ["JavaScript", "Python", "C++"].sort((a, b) => a.localeCompare(b)),
    year: 2022,
    github: "https://github.com/soodaayush/leetcode",
    gradient: "linear-gradient( #176C5C, #1B7862, #1E8368)",
  },
  {
    name: "CoinDeno",
    website: "https://coindeno.netlify.app/",
    image: coinDeno,
    description:
      "A mobile app that allows you to track your favorite cryptocurrencies and build your own portfolio.",
    tags: ["React Native", "Expo", "Firebase", "JavaScript"].sort((a, b) =>
      a.localeCompare(b)
    ),
    year: 2022,
    github: "https://github.com/soodaayush/coindeno",
    gradient: "linear-gradient( #2082AB, #22699C, #23508D)",
  },
  {
    name: "Pac Man",
    website: "https://pac-man-wb.netlify.app/",
    image: pacMan,
    description: "A website that allows you to play the iconic game, Pac Man.",
    tags: ["HTML", "SCSS", "JavaScript"].sort((a, b) => a.localeCompare(b)),
    year: 2021,
    github: "https://github.com/soodaayush/pac-man",
    gradient: "linear-gradient( #5D427F, #825B8F, #9B6B9A)",
  },
  {
    name: "CoinDeno Web",
    website: "https://warbaddy.com/",
    image: coinDenoWeb,
    description:
      "Similar to CoinDeno, this is a web version, which allows you to track your favorite cryptocurrencies and build your own portfolio.",
    tags: ["React", "Redux", "Firebase", "Tailwind CSS"].sort((a, b) =>
      a.localeCompare(b)
    ),
    year: 2021,
    github: "https://github.com/soodaayush/coindeno-web",
    gradient: "linear-gradient( #C57D3E, #C2683E, #BF533E)",
  },
  {
    name: "Frontend Mentor Challenges",
    website: "https://challenges-wb.netlify.app/",
    image: frontendMentorChallenges,
    description: "A collection of my completed Frontend Mentor challenges.",
    tags: ["HTML", "SCSS", "JavaScript"].sort((a, b) => a.localeCompare(b)),
    year: 2020,
    github: "https://github.com/soodaayush/frontend-mentor-challenges",
    gradient: "linear-gradient( #715D6A, #914E60, #B03F56)",
  },
  {
    name: "LearnWithMe",
    website: "https://learningwithme.netlify.app/",
    image: learnWithMe,
    description: "A website created for a tutor based in New Delhi, India.",
    tags: ["HTML", "SCSS"].sort((a, b) => a.localeCompare(b)),
    year: 2020,
    github: "https://github.com/soodaayush/learn-with-me",
    gradient: "linear-gradient( #269273, #208C7A, #198681)",
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
      if (width <= 760) {
        setNumVisibleProjects(1);
      } else if (width <= 1150) {
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
        <svg
          className={styles.svg}
          preserveAspectRatio="none"
          viewBox="0 0 1440 74"
        >
          <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
        </svg>
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
