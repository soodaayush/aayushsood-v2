import Image from "next/image";

import styles from "../styles/resume/resume.module.css";

import PDF from "../../../public/assets/header-icons/pdf.svg";

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
        <div className={styles.intro}>
          <h1 className={styles.name}>
            Aayush Sood
            <a href="assets/resume/resume.pdf" target="_blank">
              <Image
                src={PDF}
                width={40}
                height={40}
                alt="GitHub"
                className={styles.svg}
              />
            </a>
          </h1>
          <div className={styles.links}>
            <a
              className={`${styles.link} ${styles.text}`}
              href="tel:9027894315"
              target="_blank"
            >
              +1 (902) 789-4315
            </a>{" "}
            <p className={`${styles.text} ${styles.linkDivider}`}>|</p>
            <a
              className={`${styles.link} ${styles.text} ${styles.underline}`}
              href="mailto:aayush.sood@icloud.com"
              target="_blank"
            >
              aayush.sood@icloud.com
            </a>{" "}
            <p className={`${styles.text} ${styles.linkDivider}`}>|</p>
            <a
              className={`${styles.link} ${styles.text} ${styles.underline}`}
              href="https://www.linkedin.com/in/soodaayush/"
              target="_blank"
            >
              linkedin.com/in/soodaayush
            </a>{" "}
            <p className={`${styles.text} ${styles.linkDivider}`}>|</p>
            <a
              className={`${styles.link} ${styles.text} ${styles.underline}`}
              href="https://github.com/soodaayush"
              target="_blank"
            >
              github.com/soodaayush
            </a>
            <p className={`${styles.text} ${styles.linkDivider}`}>|</p>
            <a
              className={`${styles.link} ${styles.text} ${styles.underline}`}
              href="https://www.aayushsood.com/"
              target="_blank"
            >
              aayushsood.com
            </a>
          </div>
        </div>
        <div className={styles.sectionContainer}>
          <h1 className={styles.sectionHeading}>Education</h1>
          <hr className={styles.divider} />
          <div className={styles.schoolContainer}>
            <div className={styles.school}>
              <div className={styles.schoolDetails}>
                <b className={styles.text}>Bay View High School</b>
                <p className={styles.text}>Upper Tantallon, NS</p>
              </div>
              <div className={styles.schoolDetails}>
                <i className={styles.text}>Secondary School - Grade 11</i>
                <i className={styles.text}>Sep. 2023 - Present</i>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.sectionContainer}`}>
          <h1 className={styles.sectionHeading}>Accomplishments</h1>
          <hr className={styles.divider} />
          <div className={styles.accomplishmentContainer}>
            <div className={styles.accomplishmentTextContainer}>
              <h1 className={`${styles.text} ${styles.accomplishmentHeader}`}>
                Some of my notable achievements, including but not limited to:
              </h1>
              <h1 className={`${styles.text} ${styles.accomplishmentHeader}`}>
                Since 2019
              </h1>
            </div>
            <div className={styles.accomplishmentList}>
              <ul className={styles.list}>
                <li className={styles.text}>
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://www.shad.ca/"
                    target="_blank"
                  >
                    SHAD
                  </a>{" "}
                  UNB Valedictorian - SHAD is a national STEAM program
                  recognizing youth for excellence in innovation, leadership,
                  and academics - 2025
                </li>
                <li className={styles.text}>
                  Recipient of the Nova Scotia Lieutenant Governor&apos;s{" "}
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://lt.gov.ns.ca/honours-awards/awards"
                    target="_blank"
                  >
                    Education Medal
                  </a>
                  , awarded for outstanding leadership and academic achievement
                  - 2025
                </li>
                <li className={styles.text}>
                  Won second place in IWK Youth{" "}
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://www.smu.ca/ai-summit/may3.html"
                    target="_blank"
                  >
                    AI Pitch
                  </a>{" "}
                  Competition at the Atlantic AI Summit 2025, hosted by Saint
                  Mary&apos;s University (SMU) - 2025
                </li>
                <li className={styles.text}>
                  Section Leader in{" "}
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://codeinplace.stanford.edu/"
                    target="_blank"
                  >
                    Stanford&apos;s
                  </a>{" "}
                  Code in Place program, teaching Python and supporting beginner
                  learners in a global online classroom - 2025
                </li>
                <li className={styles.text}>
                  IT Coordinator for Nova Scotia Secondary School Students&apos;
                  Association{" "}
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://www.nsssa.ca/"
                    target="_blank"
                  >
                    (NSSSA)
                  </a>{" "}
                  - since April 2025; Public Relations Manager - September 2024
                  to June 2025
                </li>
                <li className={styles.text}>
                  Received Certificate of Distinction in Senior Division of
                  University of Waterloo&apos;s Canadian Computing Competition
                  (CCC), Score: 45/75 - 2025; made{" "}
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://cemc.uwaterloo.ca/sites/default/files/documents/2024/2024CCCResults.pdf"
                    target="_blank"
                  >
                    Honour Rolls
                  </a>{" "}
                  and received Certificate of Distinction in Junior division,
                  Score: 66/75 - 2024
                </li>
                <li className={styles.text}>
                  Won third place in Lockheed Martin{" "}
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://www.lockheedmartin.com/en-us/who-we-are/communities/cyber-quest.html"
                    target="_blank"
                  >
                    CYBERQUEST
                  </a>{" "}
                  Competition, demonstrating skills in cryptography, forensics,
                  and network security - 2025
                </li>
                <li className={styles.text}>
                  Competitively programming on{" "}
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://codeforces.com/profile/aayushsood"
                    target="_blank"
                  >
                    CodeForces.com
                  </a>
                  , aiming to increase rating above 1600+ by the end of 2025 -
                  since 2024
                </li>
                <li className={styles.text}>
                  Completed Harvard&apos;s CS50x: Introduction to Computer
                  Science course on{" "}
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://courses.edx.org/certificates/51884bfbb2734dc4bbdf1eca77ce83db"
                    target="_blank"
                  >
                    edX
                  </a>
                  , gaining a foundational understanding of Computer Science
                  principles and proficiency in C - 2024
                </li>
                <li className={styles.text}>
                  Cabinet Member on Nova Scotia Minister of Education&apos;s
                  Student Advisory Council (MSAC) - 2024 to 2025
                </li>
                <li className={styles.text}>
                  Executive of Bay View High&apos;s Student Council and Founder
                  and President of the{" "}
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://bvh-tech-club.netlify.app/"
                    target="_blank"
                  >
                    Technology Club
                  </a>{" "}
                  - since 2023
                </li>
                <li className={styles.text}>
                  Completed 90+ challenges on{" "}
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://leetcode.com/u/soodaayush/"
                    target="_blank"
                  >
                    LeetCode.com
                  </a>
                  , improving proficiency in data structures and algorithms -
                  since 2022; Completed 50+ challenges on{" "}
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://www.frontendmentor.io/profile/soodaayush"
                    target="_blank"
                  >
                    FrontendMentor.io
                  </a>
                  , focussed on responsive web design and accessibility - since
                  2020
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.sectionContainer}>
          <h1 className={styles.sectionHeading}>Projects</h1>
          <hr className={styles.divider} />
          <div className={styles.projectContainer}>
            <div className={styles.project}>
              <div className={styles.projectDetails}>
                <p
                  className={`${styles.text} ${styles.projectHeading} ${styles.projectTitle}`}
                >
                  IWKids - Mobile App |
                  <i className={styles.techStack}>
                    {" "}
                    React Native, JavaScript, Expo, Git, OpenAI API
                  </i>
                </p>
                <p className={`${styles.text} ${styles.projectHeading}`}>
                  Apr 2025 - May 2025
                </p>
              </div>
              <ul className={`${styles.projectNotes} ${styles.text}`}>
                <li>
                  Developed an AI-powered mobile app to help families navigate
                  emergency room visits at the IWK
                </li>
                <li>
                  Created for the Youth AI Pitch Competition hosted at the
                  Atlantic Canada AI Summit in May 2025
                </li>
              </ul>
            </div>
            <div className={styles.project}>
              <div className={styles.projectDetails}>
                <p
                  className={`${styles.text} ${styles.projectHeading} ${styles.projectTitle}`}
                >
                  Bay View High School - Mobile App |
                  <i className={styles.techStack}>
                    {" "}
                    React Native, JavaScript, Expo, Git
                  </i>
                </p>
                <p className={`${styles.text} ${styles.projectHeading}`}>
                  Jul 2024 - Sep 2024
                </p>
              </div>
              <ul className={`${styles.projectNotes} ${styles.text}`}>
                <li>
                  Developed a Bay View High School Mobile app to improve
                  communication between staff and student body
                </li>
                <li>
                  Provides students with centralized to school news,
                  announcements, events, and essential information
                </li>
                <li>
                  Application submitted as a final project for Harvard&apos;s
                  CS50x course
                </li>
              </ul>
            </div>
            <div className={styles.project}>
              <div className={styles.projectDetails}>
                <p
                  className={`${styles.text} ${styles.projectHeading} ${styles.projectTitle}`}
                >
                  Ben Eater&apos;s 6502 Project |
                  <i className={styles.techStack}> Python, Assembly</i>
                </p>
                <p className={`${styles.text} ${styles.projectHeading}`}>
                  Apr 2024 - Jul 2024
                </p>
              </div>
              <ul className={`${styles.projectNotes} ${styles.text}`}>
                <li>
                  A collection of hardware bread-boarding project surrounding
                  the 6502 CPU, inspired by{" "}
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://eater.net/"
                    target="_blank"
                  >
                    Ben Eater
                  </a>
                </li>
              </ul>
            </div>
            <div className={styles.project}>
              <div className={styles.projectDetails}>
                <p
                  className={`${styles.text} ${styles.projectHeading} ${styles.projectTitle}`}
                >
                  CoinDeno Web / Mobile |
                  <i className={styles.techStack}>
                    {" "}
                    React.js, React Native, REST, Git, Firebase, CoinGecko APIs
                  </i>
                </p>
                <p className={`${styles.text} ${styles.projectHeading}`}>
                  Aug 2021 - Sep 2022
                </p>
              </div>
              <ul className={`${styles.projectNotes} ${styles.text}`}>
                <li>
                  Created a React website that allows tracking and portfolio
                  management of various Cryptocurrencies
                </li>
                <li>
                  Utilized React, Firebase, and Redux for application
                  development, with CoinGecko REST APIs for cryptocurrency data
                  integration
                </li>
                <li>Created a mobile-enabled version for iOS and Android</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.sectionContainer}>
          <h1 className={styles.sectionHeading}>Skills</h1>
          <hr className={styles.divider} />
          <div className={styles.technicalSkillsContainer}>
            <div className={styles.skill}>
              <b className={styles.text}>Programming Languages: </b>
              <p className={styles.text}>
                <label className={`${styles.text} ${styles.space}`}>
                  &nbsp;
                </label>
                Python, C++, JavaScript, SQL, HTML, CSS/SCSS
              </p>
            </div>
            <div className={styles.skill}>
              <b className={styles.text}>Programming Frameworks: </b>
              <p className={styles.text}>
                <label className={`${styles.text} ${styles.space}`}>
                  &nbsp;
                </label>
                React, React Native, Node.js
              </p>
            </div>
            <div className={styles.skill}>
              <b className={styles.text}>Developer Tools: </b>
              <p className={styles.text}>
                <label className={`${styles.text} ${styles.space}`}>
                  &nbsp;
                </label>
                Firebase, Cloudflare, Netlify, Git, GitHub, iOS, Android, Yarn,
                NPM
              </p>
            </div>
            <div className={styles.skill}>
              <b className={styles.text}>Programming Libraries: </b>
              <p className={styles.text}>
                <label className={`${styles.text} ${styles.space}`}>
                  &nbsp;
                </label>
                Tailwind, Bootstrap
              </p>
            </div>
            <div className={styles.skill}>
              <b className={styles.text}>Productivity Tools and OS: </b>{" "}
              <p className={styles.text}>
                <label className={`${styles.text} ${styles.space}`}>
                  &nbsp;
                </label>
                MS Office, MS Teams, Google Suite, Jira, Adobe Photoshop, OBS
                Studio, Linux
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
