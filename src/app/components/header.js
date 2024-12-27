import Image from "next/image";

import styles from "../styles/header.module.css";

import GitHub from "../assets/header-icons/github.svg";
import LeetCode from "../assets/header-icons/leetcode.svg";
import LinkedIn from "../assets/header-icons/linkedin.svg";
import PDF from "../assets/header-icons/pdf.svg";
import YouTube from "../assets/header-icons/youtube.svg";

export default function Header() {
  return (
    <div className={styles.container}>
      <div className="name">
        <h1>Aayush Sood</h1>
      </div>
      <div className={styles.links}>
        <Image src={GitHub} width={50} height={50} alt="GitHub" />
        <Image src={LeetCode} width={50} height={50} alt="GitHub" />
        <Image src={LinkedIn} width={50} height={50} alt="GitHub" />
        <Image src={PDF} width={50} height={50} alt="GitHub" />
        <Image src={YouTube} width={50} height={50} alt="GitHub" />
      </div>
    </div>
  );
}
