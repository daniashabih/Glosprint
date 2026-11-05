"use client";

import { useState, useEffect } from "react";
import { MessageSquare, ArrowUp } from "lucide-react";
import { createWhatsAppChatUrl } from "@/lib/whatsapp";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const whatsappUrl = createWhatsAppChatUrl();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          className="w-11 h-11 rounded-full bg-white dark:bg-[#1C1F26] text-[#171717] dark:text-white border border-[#EAEAEA] dark:border-[#30333B] shadow-md hover:border-[#C8A45D] dark:hover:border-[#DFCA95] hover:text-[#C8A45D] dark:hover:text-[#DFCA95] flex items-center justify-center transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp with GLOSPRINT Dubai"
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#20ba59] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageSquare className="w-5 h-5" />
        <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline-block">
          WhatsApp Quote
        </span>
      </a>
    </div>
  );
}
