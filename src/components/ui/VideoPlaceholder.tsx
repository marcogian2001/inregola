"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "@phosphor-icons/react";

export default function VideoPlaceholder() {
  return (
    <div
      className="relative aspect-video w-full rounded-2xl overflow-hidden"
      style={{
        border: "1px solid var(--border-light)",
        boxShadow: "0 8px 40px rgba(0,0,0,0.06)",
      }}
    >
      {/* Placeholder gradient image */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-bg via-pastel-blue to-pastel-violet dark:from-primary/10 dark:via-pastel-blue-accent/10 dark:to-pastel-violet-accent/10" />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Play button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center shadow-lg shadow-primary/30">
            <PlayCircle size={36} weight="fill" className="text-zinc-900 ml-0.5" />
          </div>
        </motion.div>
        <p className="text-sm font-medium" style={{ color: "var(--text-muted)" }}>
          Guarda il video
        </p>
      </div>
    </div>
  );
}
