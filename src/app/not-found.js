import Link from "next/link";

import styles from "./styles/global/404.module.css";

import { GoArrowUpLeft } from "react-icons/go";

export const metadata = {
  title: "Not Found | Aayush Sood",
};

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <div className={`content ${styles.notFoundContent}`}>
        <div>
          <h1 className={styles.headerText}>Not Found</h1>
          <p className={styles.labelText}>
            Sorry, there is nothing at this URL.
          </p>
          <Link className={styles.link} href="/">
            <GoArrowUpLeft />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
