"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  revealVariants,
  revealViewport,
  revealTransition,
} from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={revealViewport}
      variants={revealVariants}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </motion.div>
  );
}
