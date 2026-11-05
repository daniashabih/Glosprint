import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ShowcasesSection() {
  return (
    <section className="py-20 md:py-28 bg-[#080808] border-b border-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Showcase 1: Business Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/3 w-full rounded-xs overflow-hidden border border-[#2B2B2B] bg-[#191919] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1589330694653-dad6d3240a2b?auto=format&fit=crop&w=1000&q=80"
                alt="GLOSPRINT Luxury Business Cards Showcase"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#080808]/90 backdrop-blur-xs text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-xs border border-[#2B2B2B]">
                Executive Stationery
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A45D]">
              Showcase 01
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-white">
              Luxury &amp; Executive Business Cards
            </h2>
            <p className="text-xs sm:text-sm text-[#B3B3B3] font-light leading-relaxed">
              In high-stakes corporate interactions, your business card is your brand&apos;s physical ambassador. We engineer cards on heavyweight 350 to 700 GSM boards, featuring genuine hot foil stamping, velvet soft-touch films, and painted metallic edges.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-[#B3B3B3]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                <span>350 to 700 GSM Cardstocks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                <span>24K Gold &amp; Silver Foils</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                <span>Soft-Touch Velvet Coatings</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                <span>Painted &amp; Gilded Edges</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/products/luxury-foil-business-cards"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C8A45D] hover:text-[#DFCA95] transition-colors"
              >
                <span>View Foil Business Cards</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-[#2B2B2B]">|</span>
              <Link
                href="/products?category=business-corporate"
                className="text-xs text-[#858585] hover:text-white transition-colors"
              >
                All 10 Corporate Formats →
              </Link>
            </div>
          </div>
        </div>

        {/* Showcase 2: Custom Packaging & Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 lg:order-2 relative">
            <div className="relative aspect-4/3 w-full rounded-xs overflow-hidden border border-[#2B2B2B] bg-[#191919] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1000&q=80"
                alt="GLOSPRINT Custom Rigid Boxes Showcase"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#080808]/90 backdrop-blur-xs text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-xs border border-[#2B2B2B]">
                Structural Packaging
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:order-1 space-y-5">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A45D]">
              Showcase 02
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-white">
              Custom Rigid Boxes &amp; Luxury Packaging
            </h2>
            <p className="text-xs sm:text-sm text-[#B3B3B3] font-light leading-relaxed">
              Transform your unboxing into an emotional ritual. We manufacture custom rigid set-up boxes, magnetic closure gift cases, folding cartons, and laser-profiled EVA velvet fitment trays for perfumery, jewelry, and corporate gifting.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-[#B3B3B3]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                <span>1200–2000 GSM Greyboards</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                <span>Concealed Neodymium Magnets</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                <span>Laser-Cut Velvet EVA Inserts</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                <span>CAD Physical White Mockups</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/products/custom-rigid-boxes"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C8A45D] hover:text-[#DFCA95] transition-colors"
              >
                <span>View Custom Rigid Boxes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-[#2B2B2B]">|</span>
              <Link
                href="/products?category=packaging-custom-boxes"
                className="text-xs text-[#858585] hover:text-white transition-colors"
              >
                All 8 Packaging Styles →
              </Link>
            </div>
          </div>
        </div>

        {/* Showcase 3: Corporate Stationery & Marketing Collateral */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/3 w-full rounded-xs overflow-hidden border border-[#2B2B2B] bg-[#191919] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1000&q=80"
                alt="GLOSPRINT Corporate Stationery Suites"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#080808]/90 backdrop-blur-xs text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-xs border border-[#2B2B2B]">
                Brand Identity Suites
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A45D]">
              Showcase 03
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-white">
              Unified Corporate Stationery &amp; Collateral
            </h2>
            <p className="text-xs sm:text-sm text-[#B3B3B3] font-light leading-relaxed">
              Maintain exact Pantone color fidelity across letterheads, peel-and-seal envelopes, presentation folders, and PUR perfect-bound product catalogues. Calibrated under ISO 12647-2 standards for total brand harmony.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-[#B3B3B3]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                <span>Laser-Safe Bond Papers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                <span>Exact Pantone PMS Matching</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                <span>Die-Cut Presentation Folders</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                <span>PUR Perfect-Bound Catalogues</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <Link
                href="/products/presentation-folders"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C8A45D] hover:text-[#DFCA95] transition-colors"
              >
                <span>View Presentation Folders</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-[#2B2B2B]">|</span>
              <Link
                href="/products/catalogues"
                className="text-xs text-[#858585] hover:text-white transition-colors"
              >
                Product Catalogues →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
