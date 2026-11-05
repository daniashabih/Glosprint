import Link from "next/link";
import { Phone, MessageSquare, Clock, MapPin } from "lucide-react";
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
      {/* Top Announcement & Quick Contact Bar (Dubai Luxury Standard) */}
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
        <div className="flex items-center justify-between h-20 md:h-22">
          {/* Logo with strict preservation of supplied asset */}
          <div className="flex items-center">
            <Logo size="md" priority />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {headerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium uppercase tracking-widest text-[#171717] hover:text-[#C8A45D] transition-colors relative py-1 group"
              >
                {item.title}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C8A45D] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Action Buttons & Mobile Nav */}
          <div className="flex items-center gap-4">
            <Button
              href="/request-a-quote"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
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
