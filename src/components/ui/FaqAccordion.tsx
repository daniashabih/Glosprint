"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ } from "@/types";

interface FaqAccordionProps {
  faqs: FAQ[];
  allowMultiple?: boolean;
}

export default function FaqAccordion({ faqs, allowMultiple = false }: FaqAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      setOpenIndices((prev) =>
        prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
      );
    } else {
      setOpenIndices((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndices.includes(index);
        const contentId = `faq-content-${index}`;
        const headerId = `faq-header-${index}`;

        return (
          <div
            key={index}
            className={`border rounded-xs transition-all duration-200 overflow-hidden ${
              isOpen
                ? "border-[#C8A45D] bg-white shadow-xs"
                : "border-[#EAEAEA] bg-white hover:border-[#C8A45D]/60"
            }`}
          >
            <button
              id={headerId}
              type="button"
              onClick={() => toggleIndex(index)}
              aria-expanded={isOpen}
              aria-controls={contentId}
              className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
            >
              <span className="flex items-start gap-3">
                <HelpCircle
                  className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${
                    isOpen ? "text-[#C8A45D]" : "text-neutral-400"
                  }`}
                />
                <span className="text-base font-semibold text-[#171717] font-serif leading-snug">
                  {faq.question}
                </span>
              </span>

              <span
                className={`w-7 h-7 rounded-xs flex items-center justify-center shrink-0 border transition-all duration-300 ${
                  isOpen
                    ? "bg-[#C8A45D] text-white border-[#C8A45D] rotate-180"
                    : "bg-[#FAF9F6] text-neutral-500 border-[#EAEAEA]"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            {isOpen && (
              <div
                id={contentId}
                role="region"
                aria-labelledby={headerId}
                className="px-6 pb-6 pt-1 text-sm text-neutral-600 font-light leading-relaxed border-t border-[#EAEAEA]/80 ml-8"
              >
                <p className="whitespace-pre-line">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
