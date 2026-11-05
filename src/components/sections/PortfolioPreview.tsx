import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { portfolioItems } from "@/data/portfolio";
import Button from "@/components/ui/Button";

export default function PortfolioPreview() {
  const previewItems = portfolioItems.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#EAEAEA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeading
            overline="Selected Works"
            title="Where Craftsmanship Meets Vision"
            description="A glimpse into recent bespoke packaging, executive corporate suites, and architectural signage engineered in our Dubai facility."
            align="left"
            className="mb-0"
          />

          <div className="mt-6 md:mt-0">
            <Button href="/portfolio" variant="secondary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
              Explore Full Portfolio
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {previewItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs overflow-hidden transition-all duration-300 hover:border-[#C8A45D] hover:shadow-xl"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-200">
                <Image
                  src={item.image}
                  alt={`${item.title} — GLOSPRINT Dubai`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-xs text-xs font-semibold uppercase tracking-wider text-[#171717] rounded-xs border border-[#EAEAEA]">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Information Container */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#C8A45D] mb-1">
                    {item.clientType}
                  </p>
                  <h3 className="text-xl font-medium text-[#171717] font-serif">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600 line-clamp-2 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EAEAEA] space-y-2">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#C8A45D]" />
                    <span>Embellishments</span>
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.finishes.map((f) => (
                      <span
                        key={f}
                        className="text-xs px-2.5 py-1 bg-white border border-[#EAEAEA] text-neutral-700 rounded-xs"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
