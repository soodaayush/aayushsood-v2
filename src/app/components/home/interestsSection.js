"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";

import styles from "../../styles/home/page.module.css";
import Interest from "./interest";
import { FaLaptop, FaCode, FaGamepad, FaGlobe } from "react-icons/fa";
import { PiMathOperationsFill } from "react-icons/pi";
import { MdScience, MdOutlineSportsMartialArts } from "react-icons/md";

export default function Interests({ interests }) {
  const gridRef = useRef(null);

  useEffect(() => {
    const equalize = () => {
      const grid = gridRef.current;
      if (!grid) return;
      const cards = Array.from(grid.children);

      // Reset all
      cards.forEach((c) => {
        c.style.minHeight = "";
        if (c.lastElementChild) c.lastElementChild.style.minHeight = "";
      });

      // 1. Equalize creators section heights so row 4 is identical across all cards
      const creatorsEls = cards.map((c) => c.lastElementChild).filter(Boolean);
      const maxCreatorsH = Math.max(...creatorsEls.map((el) => el.getBoundingClientRect().height));
      creatorsEls.forEach((el) => (el.style.minHeight = `${maxCreatorsH}px`));

      // 2. Equalize card heights (now that creators are equalized, 1fr fills the rest evenly)
      const maxCardH = Math.max(...cards.map((c) => c.getBoundingClientRect().height));
      cards.forEach((c) => (c.style.minHeight = `${maxCardH}px`));
    };

    equalize();
    document.fonts.ready.then(equalize);
    window.addEventListener("resize", equalize);
    return () => window.removeEventListener("resize", equalize);
  }, []);

  const iconMap = {
    FaGamepad: FaGamepad,
    PiMathOperationsFill: PiMathOperationsFill,
    MdScience: MdScience,
    FaGlobe: FaGlobe,
    MdOutlineSportsMartialArts: MdOutlineSportsMartialArts,
    FaCode: FaCode,
    FaLaptop: FaLaptop,
  };

  return (
    <div className={styles.interestsContainer}>
      <div className={`content ${styles.interestsContent}`}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.sectionHeading}
        >
          Interests
        </motion.h1>
        <div className={styles.interestList} ref={gridRef}>
          {interests.map((interest, idx) => {
            const IconComponent = iconMap[interest.icon];
            return (
              <Interest
                key={idx}
                index={idx}
                name={interest.name}
                description={interest.description}
                channels={interest.channels}
                icon={<IconComponent />}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
