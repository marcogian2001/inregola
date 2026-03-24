"use client";

import { motion } from "framer-motion";
import {
  MagnifyingGlass,
  Buildings,
  IdentificationCard,
  Bank,
  ChartLineUp,
  Laptop,
  ArrowRight,
} from "@phosphor-icons/react";
import { copy } from "@/data/copy";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { fadeInUp } from "@/lib/animations";

const stepIcons = [
  MagnifyingGlass,
  Buildings,
  IdentificationCard,
  Bank,
  ChartLineUp,
  Laptop,
];

const pastelSchemes = [
  { bg: "var(--color-pastel-violet)", accent: "var(--color-pastel-violet-accent)", darkBg: "rgba(124,92,252,0.12)" },
  { bg: "var(--color-pastel-orange)", accent: "var(--color-pastel-orange-accent)", darkBg: "rgba(245,158,11,0.12)" },
  { bg: "var(--color-pastel-blue)", accent: "var(--color-pastel-blue-accent)", darkBg: "rgba(59,130,246,0.12)" },
  { bg: "var(--color-pastel-green)", accent: "var(--color-pastel-green-accent)", darkBg: "rgba(16,185,129,0.12)" },
  { bg: "var(--color-pastel-violet)", accent: "var(--color-pastel-violet-accent)", darkBg: "rgba(124,92,252,0.12)" },
  { bg: "var(--color-pastel-orange)", accent: "var(--color-pastel-orange-accent)", darkBg: "rgba(245,158,11,0.12)" },
];

// Bento grid layout: alternating wide (col-span-2) and narrow cards
const gridSpans = [
  "md:col-span-2", // Step 1 — wide
  "md:col-span-1", // Step 2
  "md:col-span-1", // Step 3
  "md:col-span-2", // Step 4 — wide
  "md:col-span-2", // Step 5 — wide
  "md:col-span-1", // Step 6
];

export default function JourneySection() {
  return (
    <section id="percorso" className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <ScrollReveal className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark dark:text-primary mb-3">
            Il percorso
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >

            Un percorso{" "}
            <span className="text-primary-dark dark:text-primary">completo</span>.
            {" "}Non una consulenza e poi arrangiati.
          </h2>
          <p
            className="text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {copy.journey.intro}
          </p>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {copy.journey.steps.map((step, i) => {
            const Icon = stepIcons[i];
            const scheme = pastelSchemes[i];
            const span = gridSpans[i];

            return (
              <motion.div
                key={step.number}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`rounded-2xl p-7 relative overflow-hidden transition-shadow hover:shadow-lg ${span}`}
                style={{
                  background: scheme.bg,
                }}
              >
                {/* Dark mode overlay */}
                <div
                  className="absolute inset-0 hidden dark:block"
                  style={{ background: scheme.darkBg }}
                />

                {/* Decorative watermark icon for wide cards */}
                {span === "md:col-span-2" && (
                  <div className="absolute -right-4 -bottom-4 opacity-[0.07] pointer-events-none">
                    <Icon size={140} weight="fill" />
                  </div>
                )}

                <div className="relative">
                  {/* Step number */}
                  <span
                    className="text-xs font-bold font-mono opacity-50 mb-3 block"
                    style={{ color: scheme.accent }}
                  >
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: "rgba(255,255,255,0.6)",
                    }}
                  >
                    <Icon size={22} weight="duotone" style={{ color: scheme.accent }} />
                  </div>

                  <h3
                    className="text-base font-semibold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <ScrollReveal className="text-center">
          <a
            href="#contatti"
            className="inline-flex items-center gap-2 font-semibold text-primary-dark dark:text-primary hover:text-primary text-base transition-colors"
          >
            {copy.journey.cta}
            <ArrowRight size={18} weight="bold" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
