import Image from "next/image";
import styles from "../styles/header.module.css";
import GitHub from "../assets/header-icons/github-mark.svg";

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
