import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import Button from "@/components/ui/Button";

interface ServicesGridProps {
  limit?: number;
  showAllLink?: boolean;
}

export default function ServicesGrid({ limit = 6, showAllLink = true }: ServicesGridProps) {
  const displayServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="Our Printing Expertise"
          title="Bespoke Printing Services in Dubai"
          description="Crafted with German offset litho engineering and artisan embellishments. Each service is tailored for corporations, retail brands, and creative leaders."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col bg-white border border-[#EAEAEA] rounded-xs overflow-hidden transition-all duration-300 hover:border-[#C8A45D] hover:shadow-xl"
            >
              {/* Service Visual Preview */}
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
                  <span className="inline-block px-2.5 py-1 bg-white/90 backdrop-blur-xs text-[11px] font-semibold uppercase tracking-wider text-[#171717] rounded-xs border border-[#EAEAEA]">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Service Card Content */}
              <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-medium text-[#171717] group-hover:text-[#C8A45D] transition-colors font-serif">
                    <Link href={`/services/${service.slug}`} className="focus:outline-hidden">
                      {service.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Finishes Pills */}
                <div className="pt-2 border-t border-[#EAEAEA]/80">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 mb-2 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#C8A45D]" />
                    <span>Key Embellishments</span>
                  </p>
                  <div className="flex flex-wrap gap-1.5">
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

                {/* Footer of Card */}
                <div className="pt-4 border-t border-[#EAEAEA] flex items-center justify-between">
                  <span className="text-xs text-neutral-500">
                    Min: {service.minOrder}
                  </span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#171717] group-hover:text-[#C8A45D] transition-colors"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showAllLink && (
          <div className="mt-14 text-center">
            <Button href="/services" variant="outline" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              View All 15 Printing Services
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
