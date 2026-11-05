import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageSquare, ShieldCheck, Zap, Sparkles, Layers } from "lucide-react";
import Button from "@/components/ui/Button";
import { createWhatsAppChatUrl } from "@/lib/whatsapp";

export default function Hero() {
  const whatsappUrl = createWhatsAppChatUrl();

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#101114] pt-12 pb-20 md:pt-20 md:pb-32 border-b border-[#EAEAEA] dark:border-[#30333B] transition-colors duration-250">
      {/* Subtle Luxury Background Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#C8A45D_1px,transparent_1px)] [background-size:32px_32px] opacity-15 dark:opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Action */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Prestige Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs bg-[#FAF9F6] dark:bg-[#1C1F26] border border-[#C8A45D]/40 dark:border-[#C8A45D]/60 text-[#9E7B35] dark:text-[#DFCA95] text-xs font-semibold uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span>Premium Printing Solutions &amp; Creative Branding</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-[#171717] dark:text-white tracking-tight leading-[1.08] font-serif">
              Precision Print. <br />
              <span className="font-normal italic text-[#171717] dark:text-neutral-200">Uncompromising</span>{" "}
              <span className="gold-gradient-text font-normal font-serif">Branding.</span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-[#A1A1AA] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              GLOSPRINT is Dubai&apos;s full-spectrum commercial printing and luxury packaging atelier. We engineer bespoke business stationery, custom rigid gift boxes, high-impact marketing collateral, and architectural signage with dedicated professional service.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button href="/request-a-quote" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Request a Custom Quote
              </Button>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#171717] dark:text-neutral-200 bg-[#FAF9F6] dark:bg-[#1C1F26] border border-[#EAEAEA] dark:border-[#30333B] hover:border-[#C8A45D] dark:hover:border-[#DFCA95] hover:text-[#C8A45D] dark:hover:text-[#DFCA95] transition-colors rounded-xs shadow-xs"
              >
                Browse Product Catalog
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-950/30 hover:bg-emerald-100/80 dark:hover:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-800/60 rounded-xs transition-colors"
                aria-label="Direct WhatsApp Consultation"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>WhatsApp Direct</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-[#EAEAEA] dark:border-[#30333B] grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C8A45D]" shrink-0 />
                <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">ISO 12647-2 Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#C8A45D]" shrink-0 />
                <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Same-Day Express Dubai</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#C8A45D]" shrink-0 />
                <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">100% Pantone Match</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Luxury Imagery Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Visual Showcase Card */}
              <div className="relative rounded-xs overflow-hidden border border-[#EAEAEA] dark:border-[#30333B] bg-white dark:bg-[#1C1F26] shadow-xl">
                <div className="aspect-4/5 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80"
                    alt="GLOSPRINT Premium Printing & Custom Rigid Boxes Dubai"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DFCA95]">
                      Atelier Production
                    </span>
                    <h3 className="text-xl font-light font-serif">
                      Bespoke Packaging &amp; Hot Foil Stamping
                    </h3>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white dark:bg-[#1C1F26] border border-[#EAEAEA] dark:border-[#30333B] p-4 rounded-xs shadow-xl items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#FAF9F6] dark:bg-[#181A20] border border-[#C8A45D]/40 flex items-center justify-center text-[#C8A45D]">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                    Product Formats
                  </p>
                  <p className="text-sm font-semibold text-[#171717] dark:text-white">
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
