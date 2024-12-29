import { motion } from "motion/react";

export default function Example() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Motion Library Test</h1>
    </motion.div>
  );
}
