"use client";

import { motion } from "framer-motion";
import { Check, X } from "@phosphor-icons/react";
import { copy } from "@/data/copy";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StaggerContainer from "@/components/ui/StaggerContainer";
import { fadeInUp } from "@/lib/animations";

export default function ForWhoSection() {
  return (
    <section
      className="py-20 md:py-28"
      style={{ background: "var(--bg-surface)" }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <ScrollReveal className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ color: "var(--text-primary)" }}
          >
            {copy.forWho.headline}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* For you */}
          <div
            className="rounded-2xl p-7"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-light)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary-soft dark:bg-primary/15 flex items-center justify-center">
                <Check size={20} weight="bold" className="text-primary-dark dark:text-primary" />
              </div>
              <h3
                className="text-base font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                {copy.forWho.forYou.title}
              </h3>
            </div>

            <StaggerContainer className="space-y-4">
              {copy.forWho.forYou.items.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <Check
                    size={16}
                    weight="bold"
                    className="text-primary-dark dark:text-primary shrink-0 mt-0.5"
                  />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>

          {/* Not for you */}
          <div
            className="rounded-2xl p-7"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-light)",
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-rose-100 dark:bg-rose-500/15 flex items-center justify-center">
                <X size={20} weight="bold" className="text-rose-600 dark:text-rose-400" />
              </div>
              <h3
                className="text-base font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                {copy.forWho.notForYou.title}
              </h3>
            </div>

            <StaggerContainer className="space-y-4">
              {copy.forWho.notForYou.items.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeInUp}
                  className="flex items-start gap-3"
                >
                  <X
                    size={16}
                    weight="bold"
                    className="text-rose-400 shrink-0 mt-0.5"
                  />
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
