"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageSquare, ArrowRight, ChevronRight } from "lucide-react";
import { headerNav } from "@/data/navigation";
import { companyInfo } from "@/data/company";
import { productCategories } from "@/data/categories";
import { createWhatsAppChatUrl } from "@/lib/whatsapp";
import Logo from "@/components/ui/Logo";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [showCategoryDrawer, setShowCategoryDrawer] = useState(false);
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
          onClick={() => {
            setIsOpen(false);
            setShowCategoryDrawer(false);
          }}
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
            onClick={() => {
              setIsOpen(false);
              setShowCategoryDrawer(false);
            }}
            className="p-2 text-neutral-500 hover:text-[#171717]"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <nav className="flex flex-col space-y-3">
            {headerNav.map((item) => {
              const isActive = pathname === item.href;
              if (item.children) {
                return (
                  <div key={item.href} className="border-b border-[#EAEAEA]/60 pb-3">
                    <button
                      onClick={() => setShowCategoryDrawer(!showCategoryDrawer)}
                      className="w-full text-base font-semibold text-[#171717] hover:text-[#C8A45D] py-1 flex items-center justify-between transition-colors"
                    >
                      <span>{item.title}</span>
                      <ChevronRight
                        className={`w-4 h-4 text-[#C8A45D] transition-transform duration-200 ${
                          showCategoryDrawer ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {showCategoryDrawer && (
                      <div className="mt-2 pl-3 space-y-2 border-l-2 border-[#C8A45D]/30">
                        <Link
                          href="/products"
                          onClick={() => setIsOpen(false)}
                          className="block text-xs font-semibold text-[#C8A45D] py-1"
                        >
                          View All Products →
                        </Link>
                        {productCategories.map((cat) => (
                          <Link
                            key={cat.id}
                            href={`/products?category=${cat.id}`}
                            onClick={() => setIsOpen(false)}
                            className="block text-xs text-neutral-600 hover:text-[#171717] py-1"
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors py-1 flex items-center justify-between ${
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

          {/* Direct CTA */}
          <div className="pt-2">
            <Link
              href="/request-quote"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center px-5 py-3 text-xs font-semibold uppercase tracking-wider bg-[#171717] text-white hover:bg-[#C8A45D] transition-colors rounded-xs shadow-xs"
            >
              Request a Custom Quote
            </Link>
          </div>

          {/* Drawer Footer Contact */}
          <div className="pt-6 border-t border-[#EAEAEA] space-y-3">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-3 text-xs text-neutral-600 hover:text-[#C8A45D] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C8A45D]" />
              <span>{companyInfo.phoneDisplay}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-xs text-emerald-700 font-medium hover:text-emerald-800 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
