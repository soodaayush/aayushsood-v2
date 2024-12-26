import Image from "next/image";
import styles from "../styles/header.module.css";
import GitHub from "../assets/header-icons/github-mark.svg";
import * as motion from "motion/react-client";

const box = {
  width: 100,
  height: 100,
  backgroundColor: "#ff0088",
  borderRadius: 5,
};

export default function Header() {
  return (
    <div className={styles.container}>
      <div className="name">
        <h1>Aayush Sood</h1>
      </div>
      <div className="links">
        <Image src={GitHub} width={50} height={50} alt="GitHub" />
      </div>
    </div>
  );
}
