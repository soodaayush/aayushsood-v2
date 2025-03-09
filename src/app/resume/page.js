import Image from "next/image";

import styles from "../styles/resume/resume.module.css";

import PDF from "../../../public/assets/header-icons/pdf.svg";

import ResumeProject from "../components/resume/resumeProject";
import resumeProjects from "../data/resumeProjects.json";

export const metadata = {
  title: "Resume | Aayush Sood",
  description:
    "View my resume and explore my experience, skills, and education.",
  creator: "Aayush Sood",
  openGraph: {
    title: "Resume | Aayush Sood",
    description:
      "View my resume and explore my experience, skills, and education.",
    url: "https://www.aayushsood.com/resume",
    siteName: "Aayush Sood's Resume",
    images: [
      {
        url: "https://www.aayushsood.com/assets/openGraph/banner.png",
        width: 800,
        height: 600,
        alt: "Aayush Sood's Resume",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume | Aayush Sood",
    description:
      "View my resume and explore my experience, skills, and education.",
    images: ["https://www.aayushsood.com/assets/openGraph/banner.png"],
  },
  alternates: {
    canonical: "https://www.aayushsood.com/resume",
  },
};

export default function Resume() {
  return (
    <div className={styles.resumeContainer}>
      <div className={`content ${styles.resumeContentContainer}`}>
        <h1 className={styles.name}>Aayush Sood</h1>
        <div className={styles.links}>
          <p>+1 (902) 789-4315</p> |<p>aayush.sood@icloud.com</p> |
          <p>linkedin.com/in/soodaayush</p> |<p>github.com/soodaayush</p> |
          <p>aayushsood.com</p>
        </div>
        <div className={styles.sectionContainer}>
          <h1 className={styles.sectionHeading}>Education</h1>
          <hr className={styles.divider} />
          <div className={styles.schoolContainer}>
            <div className={styles.school}>
              <div className={styles.schoolDetails}>
                <p className={styles.text}>Bay View High School</p>
                <p className={styles.text}>Upper Tantallon, NS</p>
              </div>
              <div className={styles.schoolDetails}>
                <i className={styles.text}>Secondary School - Grade 11</i>
                <p className={styles.text}>Sep. 2023 - Present</p>
              </div>
            </div>
            <div className={styles.school}>
              <div className={styles.schoolDetails}>
                <p className={styles.text}>Ridgecliff Middle School</p>
                <p className={styles.text}>Beechville, NS</p>
              </div>
              <div className={styles.schoolDetails}>
                <i className={styles.text}>Middle School</i>
                <p className={styles.text}>Sep. 2019 - Jun. 2023</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionContainer}>
          <h1 className={styles.sectionHeading}>Accomplishments</h1>
          <hr className={styles.divider} />
          <div className={styles.schoolDetails}>
            <h1 className={styles.text}>
              Some of my notable achievements, included but not limited to:
            </h1>
            <h1 className={styles.text}>Since 2019</h1>
          </div>
          <div className={styles.accomplishmentList}>
            <ul>
              <li>
                Competitively programming on{" "}
                <a href="https://codeforces.com/profile/aayushsood">
                  CodeForces.com
                </a>
                , Rating 1001, since 2024
              </li>
              <li>
                Public Relations Manager for Nova Scotia Secondary School
                Students’ Association (NSSSA), since 2024
              </li>
              <li>
                Peer Tutoring fellow grade 10 & 11 students in Mathematics and
                Sciences, since 2024
              </li>
              <li>
                Completed Harvard’s CS50x: Introduction to Computer Science
                course on edX, 2024
              </li>
              <li>
                Invited to and participated in an exclusive summer math camp
                hosted by Dalhousie University, 2024
              </li>
              <li>
                Volunteered 200+ hours as a Camp Counselor during Canada Games
                Centre (CGC) Summer Camp, Halifax, 2024
              </li>
              <li>
                Recipient of the Student Council Innovative Mind Award in Grade
                10, 2024
              </li>
              <li>
                Made Honour Rolls and received Certificate of Distinction in
                Junior division of University of Waterloo’s Canadian Computing
                Competition (CCC), 2024
              </li>
              <li>
                Cabinet Member on Nova Scotia Minister of Education’s Student
                Advisory Council (MSAC), since 2024
              </li>
              <li>
                Executive of Bay View High School’s Student Council and Founder
                and President of the Technology club, since 2023
              </li>
              <li>
                Recipient of the Mathematics Achievement & Citizenship Awards in
                Grade 9, 2023
              </li>
              <li>
                Won first place in a regional Improv competition during Grade 9
                at Ridgecliff Middle School, 2023
              </li>
              <li>Completed 85+ challenges on LeetCode.com, since 2022</li>
              <li>
                Earned several medals in regional Brazilian Jiu Jitsu
                competitions, 2022-2024
              </li>
              <li>
                Mentoring fellow Brazilian Jiu Jitsu practitioners at Titans
                MMA, since 2022
              </li>
              <li>Completed 50+ challenges on FrontendMentor.io, since 2020</li>
              <li>
                Recipient of Bronze Star and Bronze Medallion of the Nova Scotia
                Lifesaving Society, 2019-2021
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.sectionContainer}>
          <h1 className={styles.sectionHeading}>Projects</h1>
          <hr className={styles.divider} />
          <div className={styles.projectContainer}>
            <div className={styles.project}>
              <div className={styles.projectDetails}>
                <p className={styles.text}>
                  Bay View High School - Mobile App |
                  <i> React Native, JavaScript, Expo, Git</i>
                </p>
                <p className={styles.text}>July 2024 - September 2024</p>
              </div>
              <ul className={styles.projectNotes}>
                <li>
                  Developed a Bay View High School Mobile app to present the
                  school with a handheld presence
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.sectionContainer}>
          <h1 className={styles.sectionHeading}>Technical Skills</h1>
          <hr className={styles.divider} />
          <div className={styles.technicalSkillsContainer}>
            <div className={styles.skill}>
              <b>Languages: </b>
              <p className={styles.text}>
                &nbsp;Python, C++, JavaScript, SQL, HTML, CSS/SCSS
              </p>
            </div>
            <div className={styles.skill}>
              <b>Frameworks: </b>
              <p className={styles.text}>&nbsp;React, React Native, Node.js</p>
            </div>
            <div className={styles.skill}>
              <b>Developer Tools: </b>{" "}
              <p className={styles.text}>
                &nbsp;Firebase, Cloudflare, Netlify, Git, GitHub, iOS, Android,
                Yarn, NPM
              </p>
            </div>
            <div className={styles.skill}>
              <b>Libraries: </b>{" "}
              <p className={styles.text}>&nbsp;Tailwind, Bootstrap</p>
            </div>
            <div className={styles.skill}>
              <b>Productivity Tools and OS: </b>{" "}
              <p className={styles.text}>
                &nbsp;MS Office, MS Teams, Google Suite, Jira, Adobe Photoshop,
                OBS Studio, Linux
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
