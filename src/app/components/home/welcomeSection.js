"use client";

import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "next-themes";

import Image from "next/image";
import styles from "../../styles/home/page.module.css";
import Aayush from "../../../../public/assets/welcome/aayush.webp";

export default function Welcome() {
  const { theme } = useTheme();

  const hoverStyles =
    theme === "dark"
      ? {
          boxShadow: "0 0 20px rgba(255, 255, 255, 0.7)",
        }
      : {
          boxShadow: "0 0 20px rgba(113, 141, 225, 0.55)",
        };

  return (
    <div className={styles.welcomeContainer}>
      <div className={`content ${styles.welcomeContent}`}>
        <div>
          <TypeAnimation
            sequence={[
              "Hi, I'm Aayush",
              2000,
              "Hi, I'm Aayush\nAnd I am a fullstack developer!",
              2000,
              "Hi, I'm Aayush\nAnd I am a student!",
              2000,
              "Hi, I'm Aayush\nAnd I am a creator!",
              2000,
              "Hi, I'm Aayush\nAnd I am a competitive programmer!",
              2000,
            ]}
            speed={40}
            deletionSpeed={35}
            className={styles.welcomeText}
          />
          <p className={styles.description}>
            I&apos;m based in Nova Scotia, Canada, and I&apos;m passionate about
            Math, Software Engineering, Gaming, and Jiu Jitsu. <br />
            I&apos;m an aspiring software intern with coding passion,
            problem-solving skills, and eagerness to contribute.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{
            scale: 1.05,
            transition: { type: "spring", stiffness: 300, damping: 15 },
            ...hoverStyles,
          }}
          className={styles.profileImageContainer}
        >
          <Image
            className={styles.picture}
            src={Aayush}
            height={275}
            width={233}
            alt="Aayush"
          />
        </motion.div>
      </div>
    </div>
  );
}
