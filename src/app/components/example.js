"use client";

import { motion } from "motion/react";

export default function Example() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} />
    </motion.div>
  );
}
