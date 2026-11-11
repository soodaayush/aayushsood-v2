import Link from "next/link";
import { GoArrowUpLeft } from "react-icons/go";

import styles from "../../styles/global/404.module.css";

export default function NotFoundContent() {
  return (
    <div>
      <h1 className={styles.title}>Not Found</h1>
      <p className={styles.label}>Sorry, there is nothing at this URL.</p>
      <Link className={styles.link} href="/">
        <GoArrowUpLeft />
        Go Home
      </Link>
    </div>
  );
}
