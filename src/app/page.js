import Welcome from "./components/home/welcomeSection";
import Projects from "./components/home/projectsSection";
import About from "./components/home/aboutSection";
import TechnicalSkills from "./components/home/technicalSkillsSection";
import Writing from "./components/home/writingSection";
import Interests from "./components/home/interestsSection";
import Contact from "./components/home/contactSection";

import featuredProjects from "./data/featuredProjects.json";
import projects from "./data/projects.json";
import roles from "./data/roles.json";
import technicalSkills from "./data/technicalSkills.json";
import interests from "./data/interests.json";

import { getPosts } from "../../utils/fetchPosts";

export default function Home() {
  return (
    <div data-page="home">
      <Welcome />
      <Projects featured={featuredProjects} projects={projects} />
      <About roles={roles} />
      <TechnicalSkills skills={technicalSkills} />
      <Writing posts={getPosts()} />
      <Interests interests={interests} />
      <Contact />
    </div>
  );
}
