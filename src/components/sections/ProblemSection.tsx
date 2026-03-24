"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Warning,
  ShieldSlash,
  UsersFour,
  Lightbulb,
} from "@phosphor-icons/react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StaggerContainer from "@/components/ui/StaggerContainer";
import { fadeInUp } from "@/lib/animations";

const problems = [
  {
    icon: Warning,
    title: "Informazioni inaffidabili",
    text: "Video su YouTube che promettono lo 0% di tasse in tre click e consulenti improvvisati con pacchetti standard.",
    expandedText:
      "Video su YouTube che promettono lo 0% di tasse in tre click e consulenti improvvisati con pacchetti standard. Il rischio e affidarsi a chi non conosce la materia, con conseguenze costose che emergono solo dopo — quando ormai e troppo tardi per rimediare senza spese importanti.",
    bg: "var(--color-pastel-orange)",
    color: "var(--color-pastel-orange-accent)",
    darkBg: "rgba(245, 158, 11, 0.12)",
  },
  {
    icon: ShieldSlash,
    title: "Rischi nascosti",
    text: "Se sbagli l'impostazione o la documentazione non e in ordine, i problemi arrivano dopo — quando sono piu costosi.",
    expandedText:
      "Se sbagli l'impostazione o la documentazione non e in ordine, i problemi arrivano dopo — quando sono piu costosi. Sanzioni, accertamenti fiscali, blocco dei conti: errori nella fase iniziale possono compromettere l'intera struttura.",
    bg: "var(--color-pastel-violet)",
    color: "var(--color-pastel-violet-accent)",
    darkBg: "rgba(124, 92, 252, 0.12)",
  },
  {
    icon: UsersFour,
    title: "Consulenti generici",
    text: "La fiscalita internazionale non e un prodotto da scaffale. Servono competenze specifiche, non risposte standard.",
    expandedText:
      "La fiscalita internazionale non e un prodotto da scaffale. Servono competenze specifiche, non risposte standard. Un commercialista generalista non ha l'esperienza necessaria per gestire la compliance tra due giurisdizioni diverse.",
    bg: "var(--color-pastel-blue)",
    color: "var(--color-pastel-blue-accent)",
    darkBg: "rgba(59, 130, 246, 0.12)",
  },
  {
    icon: Lightbulb,
    title: "La soluzione: InRegola",
    text: "Il punto non e \"andare a Dubai\". Il punto e farlo in modo che regga — davanti al fisco italiano e alle autorita emiratine.",
    expandedText:
      "Il punto non e \"andare a Dubai\". Il punto e farlo in modo che regga — davanti al fisco italiano e alle autorita emiratine. InRegola ti offre un percorso strutturato, con professionisti specializzati e documentazione sempre in ordine.",
    bg: "var(--color-pastel-green)",
    color: "var(--color-pastel-green-accent)",
    darkBg: "rgba(16, 185, 129, 0.12)",
  },
];

const transformOrigins = ["top left", "top right", "bottom left", "bottom right"];

export default function ProblemSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section id="problema" className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <ScrollReveal className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark dark:text-primary mb-3">
            Il problema
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Paghi troppe{" "}
            <span className="text-primary-dark dark:text-primary">tasse</span>{" "}
            in Italia?
          </h2>
          <p
            className="text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Non e questione di scappare. E questione di scegliere meglio — con
            il supporto di chi sa davvero come fare.
          </p>
        </ScrollReveal>

        <div
          className="relative grid grid-cols-1 md:grid-cols-2 gap-5"
          onMouseLeave={() => setExpandedCard(null)}
        >
          <StaggerContainer className="contents">
            {problems.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                onMouseEnter={() => setExpandedCard(i)}
                className="rounded-2xl p-7 flex gap-5 items-start relative cursor-pointer min-h-[140px]"
                animate={{
                  opacity:
                    expandedCard !== null && expandedCard !== i ? 0.3 : 1,
                  scale:
                    expandedCard !== null && expandedCard !== i ? 0.97 : 1,
                }}
                transition={{ duration: 0.3 }}
                style={{ background: item.bg }}
              >
                <div
                  className="absolute inset-0 rounded-2xl hidden dark:block pointer-events-none"
                  style={{ background: item.darkBg }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 relative"
                  style={{ background: "rgba(255,255,255,0.6)" }}
                >
                  <item.icon
                    size={24}
                    weight="duotone"
                    style={{ color: item.color }}
                  />
                </div>
                <div className="relative">
                  <h3
                    className="text-base font-semibold mb-1.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>

          {/* Expanded overlay */}
          <AnimatePresence>
            {expandedCard !== null && (
              <motion.div
                key={expandedCard}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                  transformOrigin: transformOrigins[expandedCard],
                  background: problems[expandedCard].bg,
                }}
                className="absolute inset-0 z-20 rounded-2xl p-7 md:p-8 overflow-y-auto hidden md:block"
              >
                {/* Dark overlay */}
                <div
                  className="absolute inset-0 rounded-2xl hidden dark:block pointer-events-none"
                  style={{ background: problems[expandedCard].darkBg }}
                />

                {/* Image area */}
                <div className="relative w-full h-32 md:h-40 rounded-xl mb-6 overflow-hidden">
                  <Image
                    src={`/problems/${expandedCard + 1}.jpg`}
                    alt={problems[expandedCard].title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative flex gap-5 items-start">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(255,255,255,0.6)" }}
                  >
                    {(() => {
                      const Icon = problems[expandedCard].icon;
                      return (
                        <Icon
                          size={24}
                          weight="duotone"
                          style={{ color: problems[expandedCard].color }}
                        />
                      );
                    })()}
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {problems[expandedCard].title}
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {problems[expandedCard].expandedText}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
