"use client";

import { MotionConfig } from "motion/react";

// Respect the OS "reduce motion" setting for every Framer Motion animation
export default function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
