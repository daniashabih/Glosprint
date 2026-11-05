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
            className={`border rounded-xs transition-all duration-300 overflow-hidden ${
              isOpen
                ? "border-[#C8A45D] bg-[#202020] shadow-md ring-1 ring-[#C8A45D]/40"
                : "border-[#2B2B2B] bg-[#191919] hover:bg-[#202020] hover:border-[#C8A45D]"
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
                    isOpen ? "text-[#C8A45D]" : "text-[#858585]"
                  }`}
                />
                <span className="text-base font-semibold text-white font-serif leading-snug">
                  {faq.question}
                </span>
              </span>

              <span
                className={`w-7 h-7 rounded-xs flex items-center justify-center shrink-0 border transition-all duration-300 ${
                  isOpen
                    ? "bg-[#C8A45D] text-[#080808] border-[#C8A45D] rotate-180 shadow-xs"
                    : "bg-[#141414] text-[#B3B3B3] border-[#2B2B2B]"
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
                className="px-6 pb-6 pt-3 text-sm text-[#B3B3B3] font-light leading-relaxed border-t border-[#2B2B2B] ml-8"
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
