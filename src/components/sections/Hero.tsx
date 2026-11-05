import Image from "next/image";
import { ArrowRight, CheckCircle2, MessageSquare, ShieldCheck, Zap, Sparkles } from "lucide-react";
import Button from "@/components/ui/Button";
import { createWhatsAppChatUrl } from "@/lib/whatsapp";

export default function Hero() {
  const whatsappUrl = createWhatsAppChatUrl();

  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 md:pt-20 md:pb-32 border-b border-[#EAEAEA]">
      {/* Subtle Luxury Background Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#C8A45D_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Action */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Prestige Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs bg-[#FAF9F6] border border-[#C8A45D]/40 text-[#9E7B35] text-xs font-semibold uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span>Dubai&apos;s Bespoke Commercial &amp; Luxury Press</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-[#171717] tracking-tight leading-[1.08] font-serif">
              Where Print <br />
              <span className="font-normal italic text-[#171717]">Meets</span>{" "}
              <span className="gold-gradient-text font-normal font-serif">Glamour.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              GLOSPRINT crafts exquisite tactile print experiences for Dubai&apos;s leading corporate enterprises, luxury retailers, real estate titans, and visionary founders. From 600gsm gold-foiled stationery and handcrafted rigid gift boxes to large-format architectural displays.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button href="/request-a-quote" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Request a Quote
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-4 text-sm font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50/70 hover:bg-emerald-100/70 border border-emerald-200 rounded-xs transition-colors"
                aria-label="Direct WhatsApp Consultation"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp VIP</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-[#EAEAEA] grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <span className="text-xs font-medium text-neutral-700">Heidelberg Precision</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <span className="text-xs font-medium text-neutral-700">24h Express Dubai</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <span className="text-xs font-medium text-neutral-700">100% Pantone Match</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Luxury Imagery Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Visual Showcase Card */}
              <div className="relative rounded-xs overflow-hidden border border-[#EAEAEA] bg-white shadow-xl">
                <div className="aspect-[4/5] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80"
                    alt="GLOSPRINT Luxury Packaging & Gold Foil Printing Dubai"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DFCA95]">
                      Atelier Craftsmanship
                    </span>
                    <h3 className="text-xl font-light font-serif">
                      Bespoke Rigid Boxes & Gold Foil Stamping
                    </h3>
                  </div>
                </div>
              </div>

              {/* Floating Luxury Tag Badge */}
              <div className="absolute -bottom-6 -left-6 sm:bottom-8 sm:-left-8 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-xs border border-[#C8A45D]/30 shadow-lg max-w-[240px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xs bg-[#FAF9F6] border border-[#C8A45D]/40 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-[#C8A45D]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#171717] uppercase tracking-wide">
                      Champagne Gold
                    </p>
                    <p className="text-[11px] text-neutral-500">
                      Artisan Foil Stamping & 3D Spot UV
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
