"use client";

import { motion, type Variants } from "framer-motion";
import { staggerContainer, viewportConfig } from "@/lib/animations";
import type { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
}

export default function StaggerContainer({
  children,
  variants = staggerContainer,
  className,
}: StaggerContainerProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={className}
    >
      {children}
    </motion.div>
  );
}
