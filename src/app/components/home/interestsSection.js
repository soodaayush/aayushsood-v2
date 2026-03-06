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
      cards.forEach((c) => (c.style.minHeight = ""));
      const maxH = Math.max(...cards.map((c) => c.getBoundingClientRect().height));
      cards.forEach((c) => (c.style.minHeight = `${maxH}px`));
    };

    equalize();
    const ro = new ResizeObserver(equalize);
    if (gridRef.current) ro.observe(gridRef.current);
    return () => ro.disconnect();
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
