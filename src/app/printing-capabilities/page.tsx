import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { printingCapabilities } from "@/data/capabilities";
import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CtaBanner from "@/components/sections/CtaBanner";
import FinishesShowcase from "@/components/sections/FinishesShowcase";
import HowItWorks from "@/components/sections/HowItWorks";

export const metadata: Metadata = buildMetadata({
  title: "Commercial Printing Capabilities & Artisanal Finishes | GLOSPRINT Dubai",
  description:
    "Explore GLOSPRINT's 15 industrial printing and luxury finishing capabilities in Dubai: Offset litho, digital express, large format UV, hot foil stamping, embossing, raised 3D spot UV, and custom binding.",
  canonicalPath: "/printing-capabilities",
  keywords: [
    "Printing Capabilities Dubai",
    "Offset Printing Press Dubai",
    "Digital Printing Press UAE",
    "Gold Foil Stamping Dubai",
    "Embossing and Debossing Press",
    "Raised Spot UV Printing Dubai",
    "Large Format Printing Press",
  ],
});

export default function PrintingCapabilitiesPage() {

  return (
    <>
      {/* Header Banner */}
      <div className="bg-[#FAF9F6] border-b border-[#EAEAEA] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ name: "Printing Capabilities", url: "/printing-capabilities" }]}
          />

          <div className="mt-6 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8A45D]">
              Industrial & Artisanal Mastery
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-[#171717] font-serif leading-tight">
              Printing & Finishing Capabilities
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              Explore our comprehensive repertoire of 15 advanced commercial printing technologies, tactile luxury embellishments, and structural bookbinding solutions crafted for world-class brand presentation.
            </p>
          </div>
        </div>
      </div>

      {/* Capabilities Navigation Quick Jump */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#EAEAEA] py-3 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-neutral-400 font-semibold uppercase tracking-wider shrink-0 mr-2">
            Techniques:
          </span>
          {printingCapabilities.map((cap) => (
            <a
              key={cap.id}
              href={`#${cap.slug}`}
              className="px-3 py-1 bg-[#FAF9F6] border border-[#EAEAEA] hover:border-[#C8A45D] hover:text-[#C8A45D] text-neutral-700 rounded-xs shrink-0 transition-colors"
            >
              {cap.name.split("(")[0].trim()}
            </a>
          ))}
        </div>
      </div>

      {/* Main Capabilities Listing */}
      <div className="py-16 md:py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {printingCapabilities.map((cap, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={cap.id}
                id={cap.slug}
                className="scroll-mt-36 pt-4 border-t border-[#EAEAEA] first:border-t-0 first:pt-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Visual Image */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative aspect-4/3 w-full bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs overflow-hidden shadow-md group">
                      <Image
                        src={cap.featuredImage}
                        alt={cap.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] font-semibold uppercase tracking-wider bg-[#171717]/85 backdrop-blur-xs text-white px-3 py-1 rounded-xs">
                          {cap.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Text Information */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="space-y-2">
                      <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A45D]">
                        Process {String(index + 1).padStart(2, "0")} • {cap.category}
                      </span>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-light text-[#171717]">
                        {cap.name}
                      </h2>
                      <p className="text-sm font-medium text-neutral-800">
                        {cap.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                      {cap.explanation}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-neutral-800">
                        Process Advantages & Benefits
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {cap.benefits.map((b, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-neutral-600 font-light"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A45D] shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Suitable Products */}
                    <div className="p-4 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs space-y-2">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-800">
                        Optimal Applications & Formats:
                      </span>
                      <p className="text-xs text-neutral-600 font-light leading-relaxed">
                        {cap.suitableProducts.join(" • ")}
                      </p>
                    </div>

                    {/* Technical Specs if available */}
                    {cap.technicalSpecs && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-[11px]">
                        {cap.technicalSpecs.map((spec, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-2.5 bg-white border border-[#EAEAEA] rounded-xs"
                          >
                            <span className="text-neutral-400 block font-light">
                              {spec.label}
                            </span>
                            <span className="font-medium text-neutral-800 block mt-0.5">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Actions */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/request-quote?finishing=${encodeURIComponent(cap.name)}`}
                        className="inline-flex items-center gap-2 bg-[#171717] hover:bg-[#C8A45D] text-white px-5 py-3 rounded-xs text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
                      >
                        <span>Request a Quote for {cap.name.split("(")[0].trim()}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      {cap.relatedProducts[0] && (
                        <Link
                          href={`/products/${cap.relatedProducts[0].slug}`}
                          className="inline-flex items-center gap-1.5 bg-white border border-[#EAEAEA] hover:border-[#C8A45D] text-neutral-700 hover:text-[#C8A45D] px-4 py-3 rounded-xs text-xs font-semibold uppercase tracking-wider transition-colors"
                        >
                          <span>See Example: {cap.relatedProducts[0].name}</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Production Verification & Scope Disclaimer */}
      <div className="bg-[#FAF9F6] py-12 border-b border-[#EAEAEA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="w-10 h-10 rounded-full bg-white border border-[#EAEAEA] flex items-center justify-center mx-auto text-[#C8A45D]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#171717]">
            Production Capabilities & Verification Scope
          </h3>
          <p className="text-xs text-neutral-600 font-light leading-relaxed">
            Technical processes, finishing options, and press specifications described on this page reflect current commercial production standards. In-house production equipment, machinery parameters, and ISO color certifications are confirmed and scheduled during specific project onboarding.
          </p>
        </div>
      </div>

      {/* Editorial Finishes Showcase */}
      <FinishesShowcase />

      {/* Customer Workflow */}
      <HowItWorks />

      {/* Global Conversion Banner */}
      <CtaBanner />
    </>
  );
}
