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
            <a className={styles.link} href="tel:9027894315" target="_blank">
              +1 (902) 789-4315
            </a>{" "}
            <p className={`${styles.text} ${styles.linkDivider}`}>|</p>
            <a
              className={`${styles.link} ${styles.underline}`}
              href="mailto:aayush.sood@icloud.com"
              target="_blank"
            >
              aayush.sood@icloud.com
            </a>{" "}
            <p className={`${styles.text} ${styles.linkDivider}`}>|</p>
            <a
              className={`${styles.link} ${styles.underline}`}
              href="https://www.linkedin.com/in/soodaayush/"
              target="_blank"
            >
              linkedin.com/in/soodaayush
            </a>{" "}
            <p className={`${styles.text} ${styles.linkDivider}`}>|</p>
            <a
              className={`${styles.link} ${styles.underline}`}
              href="https://github.com/soodaayush"
              target="_blank"
            >
              github.com/soodaayush
            </a>
            <p className={`${styles.text} ${styles.linkDivider}`}>|</p>
            <a
              className={`${styles.link} ${styles.underline}`}
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
            <div className={styles.school}>
              <div className={styles.schoolDetails}>
                <b className={styles.text}>Ridgecliff Middle School</b>
                <p className={styles.text}>Beechville, NS</p>
              </div>
              <div className={styles.schoolDetails}>
                <i className={styles.text}>Middle School</i>
                <i className={styles.text}>Sep. 2019 - Jun. 2023</i>
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
                <li>
                  Section Lead in{" "}
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://codeinplace.stanford.edu/"
                    target="_blank"
                  >
                    Stanford&apos;s
                  </a>{" "}
                  Code in Place - 2025
                </li>
                <li>
                  IT Coordinator for Nova Scotia Secondary School Students&apos;
                  Association{" "}
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://www.nsssa.ca/"
                    target="_blank"
                  >
                    (NSSSA)
                  </a>{" "}
                  - since 2025
                </li>
                <li>
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
                <li>
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
                <li>
                  Public Relations Manager for Nova Scotia Secondary School
                  Students&apos; Association{" "}
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://www.nsssa.ca/"
                    target="_blank"
                  >
                    (NSSSA)
                  </a>{" "}
                  - since 2024
                </li>
                <li>
                  Peer Tutoring fellow grade 10 & 11 students in Mathematics and
                  Sciences - since 2024
                </li>
                <li>
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
                <li>
                  Invited to and participated in an exclusive summer math camp
                  hosted by Dalhousie University, focusing on Calculus,
                  Probability, Topology, and Cosmology - 2024
                </li>
                <li>
                  Volunteered 200+ hours as a Camp Counselor during Canada Games
                  Centre{" "}
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://canadagamescentre.ca/"
                    target="_blank"
                  >
                    (CGC)
                  </a>{" "}
                  Summer Camp in Halifax - 2024
                </li>
                <li>
                  Recipient of the Student Council Innovative Mind Award in
                  Grade 10 - 2024
                </li>
                <li>
                  Made{" "}
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://cemc.uwaterloo.ca/sites/default/files/documents/2024/2024CCCResults.pdf"
                    target="_blank"
                  >
                    Honour Rolls
                  </a>{" "}
                  and received Certificate of Distinction in Junior division of
                  University of Waterloo&apos;s Canadian Computing Competition
                  (CCC), Score: 66/75 - 2024
                </li>
                <li>
                  Cabinet Member on Nova Scotia Minister of Education&apos;s
                  Student Advisory Council (MSAC) - since 2024
                </li>
                <li>
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
                <li>
                  Recipient of the Mathematics Achievement & Citizenship Awards
                  in Grade 9 - 2023
                </li>
                <li>
                  Won first place in a regional{" "}
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://improv.ca/"
                    target="_blank"
                  >
                    Improv
                  </a>{" "}
                  competition during Grade 9 at Ridgecliff Middle School - 2023
                </li>
                <li>
                  Completed 85+ challenges on{" "}
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://leetcode.com/u/soodaayush/"
                    target="_blank"
                  >
                    LeetCode.com
                  </a>
                  , improving proficiency in data structures and algorithms -
                  since 2022
                </li>
                <li>
                  Earned several medals in regional Brazilian Jiu Jitsu
                  competitions - 2022-2024
                </li>
                <li>
                  Mentoring fellow Brazilian Jiu Jitsu practitioners at{" "}
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://titansmaaf.ca/"
                    target="_blank"
                  >
                    Titans MMA
                  </a>{" "}
                  - since 2022
                </li>
                <li>
                  Completed 50+ challenges on{" "}
                  <a
                    className={`${styles.link} ${styles.underline}`}
                    href="https://www.frontendmentor.io/profile/soodaayush"
                    target="_blank"
                  >
                    FrontendMentor.io
                  </a>
                  , focusing on responsive web design and accessibility best
                  practices - since 2020
                </li>
                <li>
                  Recipient of Bronze Star and Bronze Medallion of the Nova
                  Scotia Lifesaving Society - 2019-2021
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
                  Nova Scotia Secondary School Students&apos; Association - PR
                  Manager
                </p>
                <p className={`${styles.text} ${styles.projectHeading}`}>
                  September 2024 - Present
                </p>
              </div>
              <ul className={styles.projectNotes}>
                <li>
                  Increased social media engagement by 35% through targeted
                  content creation and platform optimization
                </li>
                <li>
                  Creating and curating content that aligns with our
                  organization&apos;s mission and values
                </li>
                <li>
                  Secured funding for leadership conferences and established
                  partnerships with 5 local businesses to sponsor events
                </li>
                <li>
                  Consulted on cybersecurity issues, recommending specific
                  security best practices (e.g., multi-factor authentication,
                  complex passwords)
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
                  July 2024 - September 2024
                </p>
              </div>
              <ul className={styles.projectNotes}>
                <li>
                  Developed a comprehensive mobile app to provide students with
                  centralized access to school news, announcements, events, and
                  essential information
                </li>
                <li>
                  Application developed using React Native framework, JavaScript
                  and deployed using Expo
                </li>
                <li>
                  The mobile app provides full compatibility with iOS and
                  Android devices
                </li>
                <li>
                  Application also submitted as a final project for
                  Harvard&apos;s CS50x course
                </li>
              </ul>
            </div>
            <div className={styles.project}>
              <div className={styles.projectDetails}>
                <p
                  className={`${styles.text} ${styles.projectHeading} ${styles.projectTitle}`}
                >
                  Canada Games Centre Volunteer - Camp Counselor
                </p>
                <p className={`${styles.text} ${styles.projectHeading}`}>
                  July 2024 - August 2024
                </p>
              </div>
              <ul className={styles.projectNotes}>
                <li>
                  Volunteered 200+ hours, contributing to camp operations and
                  creating engaging activities that maintained high levels of
                  camper engagement and participation throughout the summer
                </li>
                <li>
                  Monitored campers&apos; behavior and well-being, ensuring a
                  safe and inclusive environment for all participants
                </li>
                <li>
                  Encouraged campers to participate, build friendships, and
                  adhere to camp rules, promoting a fun and respectful
                  atmosphere
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
                  April 2024 - July 2024
                </p>
              </div>
              <ul className={styles.projectNotes}>
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
                  Nova Scotia Education Minister&apos;s Student Advisory Council
                  - Cabinet Member
                </p>
                <p className={`${styles.text} ${styles.projectHeading}`}>
                  January 2024 - Present
                </p>
              </div>
              <ul className={styles.projectNotes}>
                <li>
                  Representing the views and concerns of students & teachers
                  from diverse backgrounds to ensure their voices are heard in
                  policy-making processes
                </li>
                <li>
                  Proudly represented Bay View High School&apos;s district while
                  collaborating with the Education Minister and other council
                  members to provide feedback on existing and proposed
                  educational policies and initiative
                </li>
                <li>
                  Provided input on school cell phone usage policies that
                  resulted in a new directive that was implemented in September
                  2024 that balanced educational needs with responsible
                  technology use
                </li>
                <li>
                  Conducted research and analysis on various educational trends,
                  challenges, and opportunities in collaboration with other
                  participating members
                </li>
              </ul>
            </div>
            <div className={styles.project}>
              <div className={styles.projectDetails}>
                <p
                  className={`${styles.text} ${styles.projectHeading} ${styles.projectTitle}`}
                >
                  Student Council Executive & Tech Club President
                </p>
                <p className={`${styles.text} ${styles.projectHeading}`}>
                  September 2023 - Present
                </p>
              </div>
              <ul className={styles.projectNotes}>
                <li>
                  Leading and organizing initiatives such as school events,
                  fundraisers, tech workshops, and hands-on projects to enhance
                  student engagement
                </li>
                <li>
                  Under my leadership, Tech Club grew from 3-4 to 30+ members
                  with an average 20+ member attendance on a weekly basis,
                  fostering a thriving learning community
                </li>
                <li>
                  Facilitating weekly tech workshops on topics such as Web
                  Development, Python Scripting, Cybersecurity, empowering
                  students with practical skills
                </li>
                <li>
                  Advocating for student interests by collaborating with
                  administration, gathering feedback, and ensuring student
                  voices are represented in decision-making
                </li>
                <li>
                  Managing operations and resources, including funding requests,
                  club materials, and coordination among council members and
                  club participants
                </li>
              </ul>
            </div>
            <div className={styles.project}>
              <div className={styles.projectDetails}>
                <p
                  className={`${styles.text} ${styles.projectHeading} ${styles.projectTitle}`}
                >
                  CoinDeno - Mobile App |
                  <i className={styles.techStack}>
                    {" "}
                    React Native, Git, REST, Firebase, CoinGecko APIs
                  </i>
                </p>
                <p className={`${styles.text} ${styles.projectHeading}`}>
                  July 2022 - September 2022
                </p>
              </div>
              <ul className={styles.projectNotes}>
                <li>
                  Created the React Native mobile enabled version of the
                  CoinDeno Web, enabled for both iOS and Android and hosted on
                  the Android Play Store
                </li>
                <li>
                  Leveraged the React Native framework for a consistent
                  cross-platform experience
                </li>
              </ul>
            </div>
            <div className={styles.project}>
              <div className={styles.projectDetails}>
                <p
                  className={`${styles.text} ${styles.projectHeading} ${styles.projectTitle}`}
                >
                  CoinDeno - Web App |
                  <i className={styles.techStack}>
                    {" "}
                    React.js, JavaScript, REST, Git, Firebase, CoinGecko APIs
                  </i>
                </p>
                <p className={`${styles.text} ${styles.projectHeading}`}>
                  August 2021 - July 2022
                </p>
              </div>
              <ul className={styles.projectNotes}>
                <li>
                  Created a React website that allows tracking and portfolio
                  management of various Cryptocurrencies
                </li>
                <li>
                  Utilized React, Firebase, and Redux for application
                  development, with CoinGecko REST APIs for cryptocurrency data
                  integration
                </li>
                <li>
                  Deployed the application using continuous integration and
                  continuous deployment (CI/CD) practices, ensuring reliability
                  and fast iteration
                </li>
                <li>Integrated Google Auth for seamless user authentication</li>
              </ul>
            </div>
            <div className={styles.project}>
              <div className={styles.projectDetails}>
                <p
                  className={`${styles.text} ${styles.projectHeading} ${styles.projectTitle}`}
                >
                  Mentor - Titans MMA
                </p>
                <p className={`${styles.text} ${styles.projectHeading}`}>
                  February 2021 - Present
                </p>
              </div>
              <ul className={styles.projectNotes}>
                <li>
                  Led and organized kids classes aged 5 - 15 in Brazilian Jiu
                  Jitsu, teaching self-defense, discipline, and respect, leading
                  to improved confidence and physical fitness
                </li>
                <li>
                  Taught students a variety of techniques, including
                  self-defense, striking, grappling, and forms, while
                  emphasizing the importance of discipline, respect, and
                  perseverance
                </li>
                <li>
                  Ensured a safe training environment by enforcing gym rules,
                  teaching proper techniques to prevent injuries
                </li>
                <li>
                  Acted as a mentor and role model, fostering a positive and
                  inclusive atmosphere that encourages personal growth,
                  confidence, and self-discipline
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.sectionContainer}>
          <h1 className={styles.sectionHeading}>Skills</h1>
          <hr className={styles.divider} />
          <div className={styles.technicalSkillsContainer}>
            <div className={styles.skill}>
              <b>Soft Skills: </b>
              <p className={styles.text}>
                <label className={`${styles.text} ${styles.space}`}>
                  &nbsp;
                </label>
                Leadership, Mentorship, Communication, Community Building,
                Promoting Inclusivity
              </p>
            </div>
            <div className={styles.skill}>
              <b>Programming Languages: </b>
              <p className={styles.text}>
                <label className={`${styles.text} ${styles.space}`}>
                  &nbsp;
                </label>
                Python, C++, JavaScript, SQL, HTML, CSS/SCSS
              </p>
            </div>
            <div className={styles.skill}>
              <b>Programming Frameworks: </b>
              <p className={styles.text}>
                <label className={`${styles.text} ${styles.space}`}>
                  &nbsp;
                </label>
                React, React Native, Node.js
              </p>
            </div>
            <div className={styles.skill}>
              <b>Developer Tools: </b>
              <p className={styles.text}>
                <label className={`${styles.text} ${styles.space}`}>
                  &nbsp;
                </label>
                Firebase, Cloudflare, Netlify, Git, GitHub, iOS, Android, Yarn,
                NPM
              </p>
            </div>
            <div className={styles.skill}>
              <b>Programming Libraries: </b>
              <p className={styles.text}>
                <label className={`${styles.text} ${styles.space}`}>
                  &nbsp;
                </label>
                Tailwind, Bootstrap
              </p>
            </div>
            <div className={styles.skill}>
              <b>Productivity Tools and OS: </b>{" "}
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
