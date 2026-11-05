import { ArrowRight, MessageSquare, PhoneCall, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { companyInfo } from "@/data/company";
import { createWhatsAppChatUrl } from "@/lib/whatsapp";

export default function CtaBanner() {
  const whatsappUrl = createWhatsAppChatUrl();

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-[#101010] via-[#080808] to-[#101010] border-t border-b border-[#2B2B2B] text-white">
      {/* Subtle Gold Ambient Gradient Accents */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#C8A45D]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#C8A45D]/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs bg-[#191919] border border-[#C8A45D]/40 text-[#DFCA95] text-xs font-semibold uppercase tracking-[0.25em]">
          <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
          <span>Elevate Your Brand Today</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif tracking-tight leading-tight text-white">
          Ready to Experience <br />
          <span className="gold-gradient-text font-normal font-serif">True Printing Glamour</span> in Dubai?
        </h2>

        <p className="text-base sm:text-lg text-[#B3B3B3] max-w-2xl mx-auto leading-relaxed font-light">
          Whether you need 250 bespoke foiled business cards, 5,000 luxury perfume boxes, or same-day exhibition displays for DWTC, our master craftsmen are at your service.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button
            href="/request-a-quote"
            variant="gold"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Request a Fast Quote
          </Button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm md:text-base font-semibold uppercase tracking-wider bg-[#191919] hover:bg-[#202020] text-white border border-[#2B2B2B] hover:border-[#C8A45D] rounded-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${companyInfo.phone}`}
            className="inline-flex items-center gap-2 px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#B3B3B3] hover:text-white transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-[#C8A45D]" />
            <span>{companyInfo.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
