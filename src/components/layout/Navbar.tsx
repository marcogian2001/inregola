"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import { springConfig } from "@/lib/animations";

const navLinks = [
  { label: "Il Problema", href: "#problema" },
  { label: "Come Funziona", href: "#percorso" },
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          background: scrolled ? "var(--bg-card)" : "transparent",
          borderBottom: scrolled ? "1px solid var(--border-light)" : "1px solid transparent",
          boxShadow: scrolled ? "0 1px 20px rgba(0,0,0,0.04)" : "none",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="relative shrink-0">
            <Image
              src="/logo.webp"
              alt="InRegola"
              width={130}
              height={38}
              className="h-8 w-auto"
              priority
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-primary-dark"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contatti"
              className="inline-flex items-center justify-center font-semibold text-zinc-900 bg-gradient-to-r from-primary to-[#84cc16] hover:brightness-110 rounded-xl px-6 py-3 text-sm transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Contattaci Ora
            </a>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="cursor-pointer"
              style={{ color: "var(--text-secondary)" }}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={26} /> : <List size={26} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={springConfig}
            className="fixed inset-x-0 top-20 z-30 p-5 md:hidden flex flex-col gap-3"
            style={{
              background: "var(--bg-card)",
              borderBottom: "1px solid var(--border-light)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium py-2 transition-colors hover:text-primary-dark"
                style={{ color: "var(--text-secondary)" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contatti"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center font-semibold text-zinc-900 bg-gradient-to-r from-primary to-[#84cc16] hover:brightness-110 rounded-xl px-6 py-3 text-sm transition-all mt-1"
            >
              Contattaci Ora
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
