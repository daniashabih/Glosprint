"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageSquare, Clock, MapPin, ChevronDown } from "lucide-react";
import { headerNav } from "@/data/navigation";
import { companyInfo } from "@/data/company";
import { createWhatsAppChatUrl } from "@/lib/whatsapp";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import MobileNav from "@/components/layout/MobileNav";

export default function Header() {
  const pathname = usePathname();
  const whatsappUrl = createWhatsAppChatUrl();

  const isNavActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#080808]/95 backdrop-blur-md border-b border-[#2B2B2B]">
      {/* Top Announcement & Quick Contact Bar */}
      <div className="hidden md:block bg-[#101010] border-b border-[#2B2B2B] py-2 text-xs text-[#B3B3B3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span>{companyInfo.address.neighborhood}, {companyInfo.address.city}, UAE</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span>Mon – Sat: 8:30 AM – 7:30 PM GST</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-1.5 text-[#B3B3B3] hover:text-[#C8A45D] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span>{companyInfo.phoneDisplay}</span>
            </a>
            <span className="text-[#2B2B2B]">|</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="flex items-center justify-between gap-4 min-h-[76px] md:min-h-[88px] py-2.5 overflow-visible">
          {/* Logo Container */}
          <div className="logo-container shrink-0">
            <Logo priority />
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-4 xl:gap-6 whitespace-nowrap"
            aria-label="Main Navigation"
          >
            {headerNav.map((item) => {
              const active = isNavActive(item.href);

              return item.children ? (
                <div key={item.href} className="relative group py-4">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 text-[11px] xl:text-xs font-semibold uppercase tracking-wider xl:tracking-widest transition-colors ${
                      active
                        ? "text-[#C8A45D]"
                        : "text-white hover:text-[#C8A45D]"
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 ${
                        active ? "text-[#C8A45D]" : "text-[#B3B3B3] group-hover:text-[#C8A45D]"
                      }`}
                    />
                  </Link>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 w-80 bg-[#191919] border border-[#2B2B2B] shadow-2xl rounded-xs p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 whitespace-normal">
                    <div className="space-y-1">
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block p-2.5 rounded-xs hover:bg-[#202020] transition-colors group/item"
                        >
                          <div className="text-xs font-semibold text-white group-hover/item:text-[#C8A45D] transition-colors">
                            {subItem.title}
                          </div>
                          {subItem.description && (
                            <div className="text-[11px] text-[#B3B3B3] font-light mt-0.5 line-clamp-1">
                              {subItem.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[11px] xl:text-xs font-semibold uppercase tracking-wider xl:tracking-widest transition-colors relative py-1 group ${
                    active
                      ? "text-[#C8A45D]"
                      : "text-white hover:text-[#C8A45D]"
                  }`}
                >
                  {item.title}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#C8A45D] transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Nav */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <Button
              href="/request-a-quote"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex tracking-wider text-xs uppercase whitespace-nowrap"
            >
              Request a Quote
            </Button>

            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
