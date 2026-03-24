"use client";

import { Marquee } from "@/components/magicui/marquee";

const logos = [
  "TechVentures",
  "GlobalFin",
  "AlphaGroup",
  "NovaCorp",
  "BlueSky Capital",
  "MeridianPay",
  "QuantumHoldings",
  "EuroDigital",
  "PrimaSoft",
  "AstraInvest",
];

function LogoPlaceholder({ name }: { name: string }) {
  return (
    <div
      className="flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold tracking-wide select-none whitespace-nowrap opacity-40 hover:opacity-70 transition-opacity"
      style={{ color: "var(--text-muted)" }}
    >
      {name}
    </div>
  );
}

export default function TrustedBySection() {
  return (
    <section className="py-12 md:py-16 relative">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 mb-6">
        <p
          className="text-center text-sm font-medium uppercase tracking-widest"
          style={{ color: "var(--text-muted)" }}
        >
          Si fidano di noi
        </p>
      </div>

      {/* Marquee with fade masks */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[var(--bg)] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[var(--bg)] to-transparent" />

        <Marquee pauseOnHover className="[--duration:30s] [--gap:2rem]">
          {logos.map((name) => (
            <LogoPlaceholder key={name} name={name} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
