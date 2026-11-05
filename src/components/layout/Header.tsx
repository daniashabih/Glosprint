import Link from "next/link";
import { Phone, MessageSquare, Clock, MapPin, ChevronDown } from "lucide-react";
import { headerNav } from "@/data/navigation";
import { companyInfo } from "@/data/company";
import { createWhatsAppChatUrl } from "@/lib/whatsapp";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import MobileNav from "@/components/layout/MobileNav";

export default function Header() {
  const whatsappUrl = createWhatsAppChatUrl();

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-[#EAEAEA] transition-shadow duration-300">
      {/* Top Announcement & Quick Contact Bar */}
      <div className="hidden md:block bg-[#FAF9F6] border-b border-[#EAEAEA]/80 py-2 text-xs text-neutral-600">
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
              className="flex items-center gap-1.5 hover:text-[#C8A45D] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span>{companyInfo.phoneDisplay}</span>
            </a>
            <span className="text-neutral-300">|</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 font-medium transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Logo size="md" priority />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
            {headerNav.map((item) =>
              item.children ? (
                <div key={item.href} className="relative group py-6">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-[#171717] hover:text-[#C8A45D] transition-colors"
                  >
                    <span>{item.title}</span>
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 w-80 bg-white border border-[#EAEAEA] shadow-xl rounded-sm p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="space-y-1">
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block p-2.5 rounded-sm hover:bg-[#FAF9F6] transition-colors group/item"
                        >
                          <div className="text-xs font-semibold text-[#171717] group-hover/item:text-[#C8A45D] transition-colors">
                            {subItem.title}
                          </div>
                          {subItem.description && (
                            <div className="text-[11px] text-neutral-500 font-light mt-0.5 line-clamp-1">
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
                  className="text-xs font-semibold uppercase tracking-widest text-[#171717] hover:text-[#C8A45D] transition-colors relative py-1 group"
                >
                  {item.title}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C8A45D] transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </nav>

          {/* Action Buttons & Mobile Nav */}
          <div className="flex items-center gap-4">
            <Button
              href="/request-quote"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex tracking-wider text-xs uppercase"
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
