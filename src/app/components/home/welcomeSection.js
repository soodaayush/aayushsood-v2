import Image from "next/image";

import styles from "../../styles/home/home.module.css";

export default function Welcome() {
  return (
    <>
      <div className={styles.hero}>
        <Image
          className={styles.photo}
          src="/assets/welcome/headshot.webp"
          alt="Aayush Sood"
          width={104}
          height={123}
          priority
        />
        <div className={styles.heroText}>
          <h1 className={styles.name}>Aayush Sood</h1>
          <p className={`${styles.mono} ${styles.tagline}`}>
            software engineering student, full stack developer
          </p>
        </div>
      </div>
      <p className={styles.intro}>
        I&apos;m a Software Engineering student at the University of Waterloo
        and a full stack developer from Nova Scotia. I build and ship apps, and
        outside of code I spend my time on math, geopolitics and Brazilian
        Jiu-Jitsu.
      </p>
    </>
  );
}
