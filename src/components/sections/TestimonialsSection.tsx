"use client";

import { Star } from "@phosphor-icons/react";
import { copy } from "@/data/copy";
import { Marquee } from "@/components/magicui/marquee";
import ScrollReveal from "@/components/ui/ScrollReveal";

function TestimonialCard({
  quote,
  name,
  role,
  location,
}: {
  quote: string;
  name: string;
  role: string;
  location: string;
}) {
  return (
    <div
      className="w-[340px] shrink-0 rounded-2xl p-6 mx-2"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-light)",
      }}
    >
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, s) => (
          <Star key={s} size={14} weight="fill" className="text-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <p
        className="text-sm leading-relaxed mb-5"
        style={{ color: "var(--text-secondary)" }}
      >
        &ldquo;{quote}&rdquo;
      </p>

      {/* Attribution */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-zinc-900 bg-primary">
          {name.charAt(0)}
        </div>
        <div>
          <p
            className="text-sm font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            {name}
          </p>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            {role}, {location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const items = copy.testimonials.items;
  const row1 = items.slice(0, 4);
  const row2 = items.slice(4, 8);

  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <ScrollReveal className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-dark dark:text-primary mb-3">
            Testimonianze
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Chi lavora con noi,{" "}
            <span className="text-primary-dark dark:text-primary">lo dice</span>.
          </h2>
        </ScrollReveal>
      </div>

      {/* 2 rows of infinite scrolling testimonials */}
      <div className="space-y-4">
        {/* Row 1 — normal */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[var(--bg)] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[var(--bg)] to-transparent" />
          <Marquee pauseOnHover className="[--duration:40s] [--gap:0.5rem]">
            {row1.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </Marquee>
        </div>

        {/* Row 2 — reverse */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[var(--bg)] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[var(--bg)] to-transparent" />
          <Marquee pauseOnHover reverse className="[--duration:45s] [--gap:0.5rem]">
            {row2.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
