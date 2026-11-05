import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { companyInfo } from "@/data/company";
import { footerLinks } from "@/data/navigation";
import { createWhatsAppChatUrl } from "@/lib/whatsapp";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = createWhatsAppChatUrl();

  return (
    <footer className="bg-[#FAF9F6] border-t border-[#EAEAEA] text-[#171717]">
      {/* Top Pre-Footer Highlight */}
      <div className="border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xs bg-white border border-[#EAEAEA] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#C8A45D]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-neutral-400">Atelier & Press</p>
                <p className="text-sm font-medium text-[#171717]">{companyInfo.address.street}, {companyInfo.address.city}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xs bg-white border border-[#EAEAEA] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#C8A45D]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-neutral-400">Direct Consultation</p>
                <a href={`tel:${companyInfo.phone}`} className="text-sm font-medium text-[#171717] hover:text-[#C8A45D] transition-colors">
                  {companyInfo.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xs bg-white border border-[#EAEAEA] flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider font-semibold text-neutral-400">Instant VIP Inquiry</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-1"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-6">
            <Logo size="lg" />
            <p className="text-sm text-neutral-600 max-w-md leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="space-y-2 text-xs text-neutral-500">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <span>Monday – Saturday: 8:30 AM – 7:30 PM (GST)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-[#C8A45D] transition-colors">
                  {companyInfo.email}
                </a>
              </div>
            </div>
            {/* Brand Pillars */}
            <div className="flex flex-wrap gap-2 pt-2">
              {companyInfo.brandPillars.slice(0, 4).map((pillar, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-medium bg-white border border-[#EAEAEA] text-neutral-600 px-2.5 py-1 rounded-xs"
                >
                  {pillar}
                </span>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#171717] mb-5 border-b border-[#C8A45D]/40 pb-2 inline-block">
              Products
            </h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-600 hover:text-[#C8A45D] transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#171717] mb-5 border-b border-[#C8A45D]/40 pb-2 inline-block">
              Capabilities
            </h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.capabilities.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-600 hover:text-[#C8A45D] transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Quote */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#171717] mb-5 border-b border-[#C8A45D]/40 pb-2 inline-block">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-600 hover:text-[#C8A45D] transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-4 border-t border-[#EAEAEA]">
              <Link
                href="/request-quote"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C8A45D] hover:text-[#B59148] transition-colors"
              >
                <span>Interactive Quote Estimator</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-[#EAEAEA] py-6 text-xs text-neutral-500 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} {companyInfo.legalName}. All rights reserved.</p>
          <p className="text-neutral-400">
            Registered commercial & luxury printing atelier in Dubai, United Arab Emirates.
          </p>
        </div>
      </div>
    </footer>
  );
}
