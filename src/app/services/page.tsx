import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Layers } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CtaBanner from "@/components/sections/CtaBanner";
import { services } from "@/data/services";
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
      <div className="bg-[#FAF9F6] border-b border-[#EAEAEA] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Services", url: "/services" }]} />
          
          <div className="mt-6 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8A45D]">
              Bespoke Print Solutions
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-[#171717] font-serif leading-tight">
              Our Printing Services
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-600 font-light leading-relaxed">
              Explore our complete suite of 15 commercial, digital, packaging, and architectural print specialties engineered to elevate corporate and luxury brands in Dubai.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <section className="py-20 md:py-28 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col bg-white border border-[#EAEAEA] rounded-xs overflow-hidden transition-all duration-300 hover:border-[#C8A45D] hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                  <Image
                    src={service.heroImage}
                    alt={`${service.name} Dubai — GLOSPRINT`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-2.5 py-1 bg-white/95 backdrop-blur-xs text-[11px] font-semibold uppercase tracking-wider text-[#171717] rounded-xs border border-[#EAEAEA]">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <h2 className="text-xl font-medium text-[#171717] group-hover:text-[#C8A45D] transition-colors font-serif">
                      <Link href={`/services/${service.slug}`}>
                        {service.name}
                      </Link>
                    </h2>
                    <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed font-light">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Finishes and Specs Preview */}
                  <div className="pt-3 border-t border-[#EAEAEA] space-y-2">
                    <div className="flex items-center justify-between text-xs text-neutral-500">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#C8A45D]" />
                        <span>{service.turnaround}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <Layers className="w-3.5 h-3.5 text-[#C8A45D]" />
                        <span>Min: {service.minOrder}</span>
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {service.finishes.slice(0, 3).map((finish) => (
                        <span
                          key={finish}
                          className="text-[11px] px-2 py-0.5 bg-[#FAF9F6] text-neutral-600 border border-[#EAEAEA] rounded-xs"
                        >
                          {finish}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#EAEAEA] flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#171717] group-hover:text-[#C8A45D] transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <Link
                      href={`/request-a-quote?service=${encodeURIComponent(service.name)}`}
                      className="text-xs text-[#C8A45D] hover:underline font-medium"
                    >
                      Instant Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
