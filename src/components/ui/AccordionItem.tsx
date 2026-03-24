"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "@phosphor-icons/react";
import { springConfig } from "@/lib/animations";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export default function AccordionItem({
  question,
  answer,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ borderBottom: "1px solid var(--border-light)" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-5 text-left cursor-pointer"
      >
        <span
          className="text-base font-medium pr-8"
          style={{ color: "var(--text-primary)" }}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={springConfig}
          className="shrink-0 text-primary-dark dark:text-primary"
        >
          <Plus size={18} weight="bold" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={springConfig}
            className="overflow-hidden"
          >
            <p
              className="pb-5 text-sm leading-relaxed max-w-[65ch]"
              style={{ color: "var(--text-secondary)" }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
