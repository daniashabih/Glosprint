import { Suspense } from "react";
import { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CatalogView from "@/components/catalog/CatalogView";
import CtaBanner from "@/components/sections/CtaBanner";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Commercial & Luxury Printing Products Catalog | GLOSPRINT Dubai",
  description:
    "Explore GLOSPRINT's comprehensive printing product catalog across business stationery, custom rigid packaging, marketing brochures, waterproof stickers, signage, and corporate gifts.",
  canonicalPath: "/products",
  keywords: [
    "Printing Product Catalog Dubai",
    "Business Cards Dubai",
    "Packaging Boxes Dubai",
    "Custom Stickers Dubai",
    "Roll Up Banners Dubai",
    "Brochure Printing Dubai",
  ],
});

export default function ProductsPage() {
  return (
    <>
      {/* Header Banner */}
      <div className="bg-[#FAF9F6] border-b border-[#EAEAEA] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Products", url: "/products" }]} />

          <div className="mt-6 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8A45D]">
              Complete Commercial Catalog
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-[#171717] font-serif leading-tight">
              Printing & Packaging Products
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              Explore our full spectrum of 66 industrial and bespoke print formats. Filter by category, paper stock, or luxury finishing, and request a tailored trade quotation.
            </p>
          </div>
        </div>
      </div>

      {/* Main Catalog Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Suspense
          fallback={
            <div className="py-20 text-center text-xs text-neutral-400">
              Loading GLOSPRINT product catalog...
            </div>
          }
        >
          <CatalogView />
        </Suspense>
      </div>

      {/* Conversion Banner */}
      <CtaBanner />
    </>
  );
}
