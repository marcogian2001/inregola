"use client";

import { motion } from "framer-motion";
import { faqItems } from "@/data/faq";
import AccordionItem from "@/components/ui/AccordionItem";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StaggerContainer from "@/components/ui/StaggerContainer";
import { fadeInUp } from "@/lib/animations";

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <ScrollReveal className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark dark:text-primary mb-3">
            FAQ
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >

            Hai ancora qualche{" "}
            <span className="text-primary-dark dark:text-primary">dubbio</span>?
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            Qui trovi le risposte alle domande piu frequenti.
          </p>
        </ScrollReveal>

        <div
          className="max-w-3xl mx-auto rounded-2xl p-6 md:p-8"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border-light)",
          }}
        >
          <StaggerContainer>
            {faqItems.map((item) => (
              <motion.div key={item.question} variants={fadeInUp}>
                <AccordionItem
                  question={item.question}
                  answer={item.answer}
                />
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
