import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ServicesListing from "@/components/sections/ServicesListing";
import CtaBanner from "@/components/sections/CtaBanner";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Commercial & Luxury Printing Services Dubai | GLOSPRINT",
  description:
    "Explore GLOSPRINT's comprehensive printing services in Dubai: luxury business cards, rigid boxes, packaging, brochures, corporate stationery, signage, and offset printing.",
  canonicalPath: "/services",
  keywords: [
    "Printing Services in Dubai",
    "Commercial Printers Dubai",
    "Luxury Printing Dubai",
    "Custom Packaging Dubai",
    "Business Card Printing Dubai",
    "Brochure Printing Dubai",
  ],
});

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#101010] border-b border-[#2B2B2B] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Services", url: "/services" }]} />

          <div className="mt-6 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8A45D]">
              Bespoke Print Solutions
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-white font-serif leading-tight">
              Our Printing Services
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#B3B3B3] font-light leading-relaxed">
              Explore our complete suite of 15 commercial, digital, packaging, and architectural print specialties engineered to elevate corporate and luxury brands in Dubai.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid Section with Filter */}
      <section className="py-20 md:py-28 bg-[#080808] border-b border-[#2B2B2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServicesListing />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
