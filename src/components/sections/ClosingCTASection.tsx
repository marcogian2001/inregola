"use client";

import { ArrowRight, Phone } from "@phosphor-icons/react";
import { copy } from "@/data/copy";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ClosingCTASection() {
  return (
    <section
      id="contatti"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Soft gradient bg */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-bg via-transparent to-pastel-blue dark:from-primary/5 dark:via-transparent dark:to-pastel-blue-accent/5" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-30 blur-[100px] pointer-events-none bg-primary-soft dark:bg-primary/10" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Animated border wrapper */}
        <div className="relative rounded-3xl p-[2px] overflow-hidden">
          {/* Rotating gradient border */}
          <div className="absolute inset-[-100%] animate-border-spin bg-[conic-gradient(from_0deg,#a3e635,#3b82f6,#7c5cfc,#f59e0b,#10b981,#a3e635)]" />

          {/* Inner card */}
          <div
            className="relative rounded-[calc(1.5rem-2px)] p-10 md:p-16 text-center overflow-hidden"
            style={{
              background: "var(--bg-card)",
            }}
          >
            {/* Icon */}
            <ScrollReveal className="mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary-soft dark:bg-primary/15 flex items-center justify-center mx-auto">
                <Phone size={28} weight="fill" className="text-primary-dark dark:text-primary" />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight mb-5 max-w-lg mx-auto"
                style={{ color: "var(--text-primary)" }}
              >
                Il primo passo e sempre una{" "}
                <span className="text-primary-dark dark:text-primary">conversazione</span>.
              </h2>
            </ScrollReveal>

            <ScrollReveal>
              <p
                className="text-base leading-relaxed max-w-lg mx-auto mb-3"
                style={{ color: "var(--text-secondary)" }}
              >
                In una chiamata senza impegno, analizziamo insieme la tua
                situazione e ti diciamo con chiarezza se e come una struttura
                internazionale puo funzionare per te.
              </p>
              <p
                className="text-sm max-w-md mx-auto mb-10"
                style={{ color: "var(--text-muted)" }}
              >
                Nessuna pressione. Nessuna promessa esagerata. Solo competenza e
                trasparenza.
              </p>
            </ScrollReveal>

            <ScrollReveal className="flex justify-center">
              <ShimmerButton>
                <span className="flex items-center gap-2">
                  {copy.closing.cta}
                  <ArrowRight size={18} weight="bold" />
                </span>
              </ShimmerButton>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
