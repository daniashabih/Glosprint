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
          </div>

          {/* Quick Links */}
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
          </div>

          {/* Core Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#171717] mb-5 border-b border-[#C8A45D]/40 pb-2 inline-block">
              Print Services
            </h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-600 hover:text-[#C8A45D] transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialty Solutions */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#171717] mb-5 border-b border-[#C8A45D]/40 pb-2 inline-block">
              Specialties
            </h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-neutral-600 hover:text-[#C8A45D] transition-colors">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer */}
      <div className="border-t border-[#EAEAEA] bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {currentYear} {companyInfo.legalName}. All rights reserved. Registered in Dubai, UAE.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#C8A45D] font-medium">{companyInfo.tagline}</span>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#171717] transition-colors">
              Support & Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
