"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageSquare, ArrowRight } from "lucide-react";
import { headerNav, quickServiceLinks } from "@/data/navigation";
import { companyInfo } from "@/data/company";
import { createWhatsAppChatUrl } from "@/lib/whatsapp";
import Logo from "@/components/ui/Logo";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const whatsappUrl = createWhatsAppChatUrl();

  return (
    <div className="lg:hidden flex items-center">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[#171717] hover:text-[#C8A45D] transition-colors focus:outline-hidden"
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Slide-out Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top Header of Drawer */}
        <div className="flex items-center justify-between p-5 border-b border-[#EAEAEA]">
          <Logo size="sm" />
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-neutral-500 hover:text-[#171717]"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <nav className="flex flex-col space-y-4">
            {headerNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors py-1 flex items-center justify-between ${
                    isActive
                      ? "text-[#C8A45D] font-semibold"
                      : "text-[#171717] hover:text-[#C8A45D]"
                  }`}
                >
                  <span>{item.title}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </Link>
              );
            })}
          </nav>

          {/* Quick Service Highlights */}
          <div className="pt-4 border-t border-[#EAEAEA]">
            <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3">
              Popular Services
            </p>
            <div className="grid grid-cols-1 gap-2">
              {quickServiceLinks.slice(0, 5).map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="text-sm text-neutral-600 hover:text-[#C8A45D] py-1 transition-colors"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Contact CTAs in Drawer */}
          <div className="pt-4 border-t border-[#EAEAEA] space-y-3">
            <Link
              href="/request-a-quote"
              className="flex items-center justify-center w-full py-3 px-4 bg-[#171717] text-white text-sm font-semibold uppercase tracking-wider rounded-xs hover:bg-[#C8A45D] hover:text-[#171717] transition-all"
            >
              Request a Quote
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#25D366] text-white text-sm font-semibold uppercase tracking-wider rounded-xs hover:bg-[#20ba59] transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>

            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 border border-[#EAEAEA] text-[#171717] text-sm font-medium rounded-xs hover:border-[#C8A45D] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C8A45D]" />
              <span>{companyInfo.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Footer of Drawer */}
        <div className="p-4 bg-[#FAF9F6] border-t border-[#EAEAEA] text-xs text-neutral-500 text-center">
          {companyInfo.tagline} • Dubai, UAE
        </div>
      </div>
    </div>
  );
}
