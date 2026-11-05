import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { printingCapabilities } from "@/data/capabilities";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CapabilitiesSection() {
  const previewCapabilities = printingCapabilities.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-[#141414] border-b border-[#2B2B2B]" id="capabilities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="Manufacturing Capabilities"
          title="Industrial Precision & Artisanal Craft"
          description="From high-speed Heidelberg offset and digital express presses to micro-precision foil stamping and PUR adhesive bookbinding."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {previewCapabilities.map((cap) => (
            <div
              key={cap.id}
              className="group bg-[#191919] border border-[#2B2B2B] rounded-xs overflow-hidden flex flex-col justify-between transition-all duration-300 hover:bg-[#202020] hover:shadow-2xl hover:shadow-black/60 hover:border-[#C8A45D]"
            >
              <div>
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#101010]">
                  <Image
                    src={cap.featuredImage}
                    alt={cap.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider bg-[#080808]/90 border border-[#2B2B2B] backdrop-blur-xs text-white px-2.5 py-1 rounded-xs">
                      {cap.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-lg font-serif font-medium text-white group-hover:text-[#C8A45D] transition-colors">
                    {cap.name}
                  </h3>
                  <p className="text-xs text-[#B3B3B3] font-light leading-relaxed line-clamp-3">
                    {cap.explanation}
                  </p>

                  <div className="pt-3 border-t border-[#2B2B2B] space-y-1.5">
                    {cap.benefits.slice(0, 2).map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-[11px] text-[#858585] font-light"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A45D] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/printing-capabilities#${cap.slug}`}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white group-hover:text-[#C8A45D] pt-3 border-t border-[#2B2B2B] transition-colors"
                >
                  <span>Learn Technique</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/printing-capabilities"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C8A45D] hover:bg-[#DFCA95] text-[#080808] text-xs font-bold uppercase tracking-widest rounded-xs transition-colors shadow-md"
          >
            <span>View All 15 Printing & Finishing Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
