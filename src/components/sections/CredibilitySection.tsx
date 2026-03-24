"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle,
  Certificate,
  MapPin,
  Handshake,
} from "@phosphor-icons/react";
import { copy } from "@/data/copy";
import { team } from "@/data/team";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StaggerContainer from "@/components/ui/StaggerContainer";
import { fadeInUp } from "@/lib/animations";

const highlights = [
  {
    icon: Certificate,
    text: "Dottori Commercialisti iscritti all'albo",
  },
  {
    icon: MapPin,
    text: "Operativita diretta a Dubai e in Italia",
  },
  {
    icon: Handshake,
    text: "Centinaia di strutture gia avviate",
  },
];

export default function CredibilitySection() {
  return (
    <section
      id="chi-siamo"
      className="py-20 md:py-28"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark dark:text-primary mb-3">
            Il team
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >

            Professionisti{" "}
            <span className="text-primary-dark dark:text-primary">veri</span>, con studio{" "}
            <span className="text-primary-dark dark:text-primary">vero</span>.
          </h2>
          <p
            className="text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {copy.credibility.intro}
          </p>
        </ScrollReveal>

        {/* Highlights row */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          {highlights.map((h) => (
            <motion.div
              key={h.text}
              variants={fadeInUp}
              className="flex items-center gap-3 rounded-xl p-4"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-light)",
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary-soft dark:bg-primary/15 flex items-center justify-center shrink-0">
                <h.icon size={20} weight="fill" className="text-primary-dark dark:text-primary" />
              </div>
              <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                {h.text}
              </p>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Team grid */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeInUp}
              whileHover={{ y: -4 }}
              className="rounded-2xl overflow-hidden transition-shadow hover:shadow-xl group"
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-light)",
              }}
            >
              {/* Photo */}
              <div className="relative aspect-[4/5] bg-gradient-to-b from-primary-bg to-pastel-blue dark:from-primary/10 dark:to-pastel-blue-accent/10 overflow-hidden">
                <Image
                  src={member.photoTransparent}
                  alt={member.name}
                  fill
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              {/* Info */}
              <div className="p-4">
                <h3
                  className="text-sm font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {member.name}
                </h3>
                <p className="text-xs font-medium text-primary-dark dark:text-primary mt-0.5">
                  {member.title}
                </p>
                <p
                  className="text-xs mt-1.5 leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {member.specialty}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Checkmarks */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10 max-w-3xl mx-auto">
          {copy.credibility.checkmarks.map((item) => (
            <motion.div
              key={item}
              variants={fadeInUp}
              className="flex items-start gap-3 py-1"
            >
              <CheckCircle
                size={20}
                weight="fill"
                className="text-primary-dark dark:text-primary shrink-0 mt-0.5"
              />
              <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {item}
              </span>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Closing quote */}
        <ScrollReveal className="text-center">
          <p
            className="text-lg md:text-xl font-semibold max-w-2xl mx-auto"
            style={{ color: "var(--text-primary)" }}
          >
            &ldquo;{copy.credibility.closing}&rdquo;
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
