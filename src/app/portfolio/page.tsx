import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PortfolioGallery from "@/components/sections/PortfolioGallery";
import CtaBanner from "@/components/sections/CtaBanner";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio & Print Gallery | GLOSPRINT Dubai",
  description:
    "Explore GLOSPRINT's gallery of luxury packaging, foil-stamped business cards, executive stationery, coffee-table lookbooks, and 3D architectural signage in Dubai.",
  canonicalPath: "/portfolio",
  keywords: [
    "Printing Portfolio Dubai",
    "Luxury Packaging Showcase",
    "Foil Stamped Cards Gallery",
    "Commercial Print Samples Dubai",
    "Signage Projects UAE",
  ],
});

export default function PortfolioPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#101010] border-b border-[#2B2B2B] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Portfolio", url: "/portfolio" }]} />
          
          <div className="mt-6 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8A45D]">
              Artisan Portfolio
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-white font-serif leading-tight">
              Selected Works
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#B3B3B3] font-light leading-relaxed">
              Discover how our mastery of Heidelberg offset presses, bespoke Swiss cutting, and hand-applied luxury foils brings corporate and luxury brand identities to life.
            </p>
          </div>
        </div>
      </div>

      {/* Main Portfolio Interactive Gallery */}
      <section className="py-20 md:py-28 bg-[#080808] border-b border-[#2B2B2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioGallery />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
