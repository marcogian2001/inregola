"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";

interface MagneticButtonProps extends Omit<HTMLMotionProps<"a">, "children"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  strength?: number;
}

export default function MagneticButton({
  children,
  variant = "primary",
  strength = 0.3,
  className = "",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors cursor-pointer";
  const variants = {
    primary:
      "bg-primary hover:bg-primary-light text-white rounded-full px-8 py-4 text-base",
    secondary:
      "bg-surface-light hover:bg-zinc-600 text-zinc-100 rounded-full px-8 py-4 text-base",
    outline:
      "border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 rounded-full px-8 py-4 text-base",
  };

  return (
    <motion.a
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  );
}
