import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquare, ShieldCheck, Zap, Sparkles, Layers } from "lucide-react";
import Button from "@/components/ui/Button";
import { createWhatsAppChatUrl } from "@/lib/whatsapp";

export default function Hero() {
  const whatsappUrl = createWhatsAppChatUrl();

  return (
    <section className="relative overflow-hidden bg-[#080808] pt-12 pb-20 md:pt-20 md:pb-32 border-b border-[#2B2B2B]">
      {/* Subtle Luxury Background Grid & Ambient Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#C8A45D_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-[#C8A45D]/8 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Action */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Prestige Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs bg-[#191919] border border-[#C8A45D]/50 text-[#DFCA95] text-xs font-semibold uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span>Premium Printing Solutions &amp; Creative Branding</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white tracking-tight leading-[1.08] font-serif">
              Precision Print. <br />
              <span className="font-normal italic text-[#B3B3B3]">Uncompromising</span>{" "}
              <span className="gold-gradient-text font-normal font-serif">Branding.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#B3B3B3] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              GLOSPRINT is Dubai&apos;s full-spectrum commercial printing and luxury packaging atelier. We engineer bespoke business stationery, custom rigid gift boxes, high-impact marketing collateral, and architectural signage with dedicated professional service.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button href="/request-a-quote" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Request a Custom Quote
              </Button>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#191919] hover:bg-[#202020] border border-[#2B2B2B] hover:border-[#C8A45D] hover:text-[#C8A45D] transition-colors rounded-xs shadow-xs"
              >
                Browse Product Catalog
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/30 hover:bg-emerald-900/40 border border-emerald-800/60 rounded-xs transition-colors"
                aria-label="Direct WhatsApp Consultation"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Direct</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-[#2B2B2B] grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <span className="text-xs font-medium text-[#B3B3B3]">ISO 12647-2 Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <span className="text-xs font-medium text-[#B3B3B3]">Same-Day Express Dubai</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#C8A45D] shrink-0" />
                <span className="text-xs font-medium text-[#B3B3B3]">100% Pantone Match</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Luxury Imagery Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Visual Showcase Card */}
              <div className="relative rounded-xs overflow-hidden border border-[#2B2B2B] bg-[#191919] shadow-2xl">
                <div className="aspect-4/5 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80"
                    alt="GLOSPRINT Premium Printing & Custom Rigid Boxes Dubai"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A45D]">
                      Atelier Production
                    </span>
                    <h3 className="text-xl font-light font-serif text-white">
                      Bespoke Packaging &amp; Hot Foil Stamping
                    </h3>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-[#202020] border border-[#2B2B2B] p-4 rounded-xs shadow-2xl items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#141414] border border-[#C8A45D]/40 flex items-center justify-center text-[#C8A45D]">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-[#858585]">
                    Product Formats
                  </p>
                  <p className="text-sm font-semibold text-white">
                    66 Catalog Products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
