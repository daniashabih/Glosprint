import Image from "next/image";
import Link from "next/link";
import { Sparkles, Layers, ArrowRight } from "lucide-react";
import { PortfolioItem } from "@/types";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="group flex flex-col bg-[#191919] border border-[#2B2B2B] rounded-xs overflow-hidden transition-all duration-300 hover:bg-[#202020] hover:border-[#C8A45D] hover:shadow-2xl hover:shadow-black/60">
      {/* Image Preview Container */}
      <div className="relative aspect-16/10 overflow-hidden bg-[#101010]">
        <Image
          src={item.image}
          alt={`${item.title} — GLOSPRINT Dubai`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />

        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-[#080808]/90 backdrop-blur-xs text-[11px] font-semibold uppercase tracking-wider text-white rounded-xs border border-[#2B2B2B]">
            {item.category}
          </span>
          {item.isDemonstration && (
            <span className="px-2.5 py-1 bg-[#141414]/90 backdrop-blur-xs text-[10px] uppercase tracking-wider text-[#B3B3B3] rounded-xs border border-[#2B2B2B]">
              Studio Concept
            </span>
          )}
        </div>
      </div>

      {/* Details Container */}
      <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#C8A45D]">
            {item.clientType}
          </p>
          <h3 className="text-xl font-medium text-white group-hover:text-[#C8A45D] transition-colors font-serif leading-snug">
            {item.title}
          </h3>
          <p className="text-sm text-[#B3B3B3] leading-relaxed font-light">
            {item.description}
          </p>
        </div>

        {/* Technical Stock & Embellishments */}
        <div className="pt-4 border-t border-[#2B2B2B] space-y-3">
          <div className="flex items-start gap-2 text-xs text-[#B3B3B3] font-light">
            <Layers className="w-3.5 h-3.5 text-[#C8A45D] shrink-0 mt-0.5" />
            <span>
              <strong className="text-white font-medium">Stock:</strong> {item.paperStock}
            </span>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#858585] mb-1.5 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#C8A45D]" />
              <span>Embellishments</span>
            </p>
            <div className="flex flex-wrap gap-1.5">
              {item.finishes.map((finish) => (
                <span
                  key={finish}
                  className="text-xs px-2.5 py-1 bg-[#141414] border border-[#2B2B2B] text-[#B3B3B3] rounded-xs"
                >
                  {finish}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Link
            href={`/request-a-quote?product=${encodeURIComponent(item.title)}`}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 border border-[#2B2B2B] hover:border-[#C8A45D] hover:text-[#C8A45D] text-white text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs bg-[#141414] hover:bg-[#191919]"
          >
            <span>Request Similar Specifications</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
