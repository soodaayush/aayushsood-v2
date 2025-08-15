import Welcome from "./components/home/welcomeSection";
import TechnicalSkills from "./components/home/technicalSkillsSection";
import Projects from "./components/home/projectsSection";
import Interests from "./components/home/interestsSection";

import technicalSkills from "./data/technicalSkills.json";
import projects from "./data/projects.json";
import interests from "./data/interests.json";

import styles from "./styles/home/page.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Welcome />
      <div className={styles.curve}>
        <svg
          className={styles.svg}
          preserveAspectRatio="none"
          viewBox="0 0 1440 74"
        >
          <path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path>
        </svg>
      </div>

      <TechnicalSkills skills={technicalSkills} />

      <Projects projects={projects} />

      <Interests interests={interests} />
    </div>
  );
}
