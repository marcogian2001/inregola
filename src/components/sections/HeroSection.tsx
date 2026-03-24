"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Buildings,
  Globe,
  ArrowRight,
} from "@phosphor-icons/react";
import { copy } from "@/data/copy";
import VideoPlaceholder from "@/components/ui/VideoPlaceholder";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { WordRotate } from "@/components/magicui/word-rotate";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const stats = [
  { value: 30, suffix: "+", label: "Anni di esperienza", icon: ShieldCheck },
  { value: 200, suffix: "+", label: "Strutture avviate", icon: Buildings },
  { value: 20, suffix: "+", label: "Free Zone gestite", icon: Globe },
];

export default function HeroSection() {
  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-20 overflow-hidden">
      {/* Grid Pattern */}
      <GridPattern
        width={50}
        height={50}
        className="opacity-50 [mask-image:linear-gradient(to_bottom,white_50%,transparent)]"
        strokeDasharray="4 4"
      />

      {/* Soft gradient blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-30 blur-[100px] pointer-events-none bg-primary-soft dark:bg-primary/10" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full opacity-20 blur-[100px] pointer-events-none bg-pastel-blue dark:bg-pastel-blue-accent/10" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
            }}
          >
            <ShieldCheck size={16} weight="fill" className="text-primary-dark dark:text-primary" />
            <span style={{ color: "var(--text-primary)" }}>
              Fiscalita Internazionale Fatta Bene
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight tracking-tight mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            La tua societa a Dubai, finalmente{" "}
            <WordRotate
              words={["in mani sicure.", "strutturata bene.", "in regola."]}
              className="text-primary-dark dark:text-primary"
              duration={3000}
            />
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            {copy.hero.subheadline}
          </motion.p>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-3xl mx-auto mb-10"
        >
          <VideoPlaceholder />
        </motion.div>

        {/* Buttons — below video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <ShimmerButton>
            <span className="flex items-center gap-2">
              Parla con il team InRegola
              <ArrowRight size={18} weight="bold" />
            </span>
          </ShimmerButton>
          <a
            href="#percorso"
            className="inline-flex items-center gap-2 font-medium rounded-xl px-7 py-3.5 text-base transition-all border hover:shadow-md"
            style={{
              color: "var(--text-secondary)",
              borderColor: "var(--border-color)",
              background: "var(--bg-card)",
            }}
          >
            Scopri come funziona
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 rounded-xl p-5"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-light)",
              }}
            >
              <div className="w-11 h-11 rounded-lg bg-primary-soft dark:bg-primary/15 flex items-center justify-center shrink-0">
                <stat.icon
                  size={22}
                  weight="fill"
                  className="text-primary-dark dark:text-primary"
                />
              </div>
              <div>
                <p
                  className="text-2xl font-bold font-mono"
                  style={{ color: "var(--text-primary)" }}
                >
                  <NumberTicker value={stat.value} />
                  {stat.suffix}
                </p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
