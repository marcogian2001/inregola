"use client";

import {
  Timer,
  CheckCircle,
  Headset,
  Buildings,
  IdentificationCard,
  Bank,
  Stamp,
  FileText,
} from "@phosphor-icons/react";
import { copy } from "@/data/copy";
import { NumberTicker } from "@/components/magicui/number-ticker";
import ScrollReveal from "@/components/ui/ScrollReveal";

const features = [
  { icon: Timer, text: "Tempi chiari e definiti" },
  { icon: CheckCircle, text: "Passaggi trasparenti" },
  { icon: Headset, text: "Aggiornamenti costanti" },
];

const milestones = [
  { icon: FileText, label: "Analisi", day: "1-2" },
  { icon: Buildings, label: "Societa", day: "3-4" },
  { icon: IdentificationCard, label: "Visto", day: "5-6" },
  { icon: Bank, label: "Conto", day: "7-8" },
  { icon: Stamp, label: "Operativo", day: "9-10" },
];

export default function TimelineSection() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: "var(--bg-surface)" }}
    >
      {/* Decorative blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-30 blur-[120px] pointer-events-none bg-primary-soft dark:bg-primary/10" />

      <div className="max-w-[1200px] mx-auto px-5 md:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-14">
          {/* Left — big number */}
          <ScrollReveal className="text-center lg:text-left">
            <div className="inline-block">
              <div className="font-mono text-7xl md:text-8xl font-bold text-primary-dark dark:text-primary leading-none">
                &lt;<NumberTicker value={10} />
              </div>
              <p
                className="text-2xl font-bold mt-1"
                style={{ color: "var(--text-primary)" }}
              >
                giorni lavorativi
              </p>
            </div>
          </ScrollReveal>

          {/* Right — text + features */}
          <ScrollReveal>
            <h2
              className="text-2xl md:text-3xl font-bold tracking-tight mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Societa e residenza{" "}
              <span className="text-primary-dark dark:text-primary">operativa</span>.
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              {copy.timeline.body}
            </p>

            <div className="flex flex-col gap-3">
              {features.map((f) => (
                <div key={f.text} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-primary-soft dark:bg-primary/15 flex items-center justify-center shrink-0">
                    <f.icon size={18} weight="fill" className="text-primary-dark dark:text-primary" />
                  </div>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {f.text}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Visual timeline milestones */}
        <ScrollReveal>
          <div className="flex items-center justify-between max-w-3xl mx-auto relative">
            {/* Connecting line */}
            <div
              className="absolute top-6 left-8 right-8 h-0.5"
              style={{ background: "var(--border-color)" }}
            >
              <div className="h-full bg-gradient-to-r from-primary to-primary-dark dark:from-primary dark:to-primary-light rounded-full w-full" />
            </div>

            {milestones.map((m) => (
              <div key={m.label} className="flex flex-col items-center relative">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-2 bg-primary-soft dark:bg-primary/15 border-2 border-primary-dark dark:border-primary"
                  style={{ background: "var(--bg-card)" }}
                >
                  <m.icon size={20} weight="fill" className="text-primary-dark dark:text-primary" />
                </div>
                <span
                  className="text-xs font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {m.label}
                </span>
                <span
                  className="text-[10px] font-mono"
                  style={{ color: "var(--text-muted)" }}
                >
                  Giorno {m.day}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
