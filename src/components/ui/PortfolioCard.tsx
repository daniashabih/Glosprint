import Image from "next/image";
import Link from "next/link";
import { Sparkles, Layers, ArrowRight } from "lucide-react";
import { PortfolioItem } from "@/types";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="group flex flex-col bg-white dark:bg-[#1C1F26] border border-[#EAEAEA] dark:border-[#30333B] rounded-xs overflow-hidden transition-all duration-300 hover:border-[#C8A45D] dark:hover:border-[#DFCA95] hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-[#C8A45D]/10">
      {/* Image Preview Container */}
      <div className="relative aspect-16/10 overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        <Image
          src={item.image}
          alt={`${item.title} — GLOSPRINT Dubai`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-white/95 dark:bg-[#101114]/90 backdrop-blur-xs text-[11px] font-semibold uppercase tracking-wider text-[#171717] dark:text-white rounded-xs border border-[#EAEAEA] dark:border-[#30333B]">
            {item.category}
          </span>
          {item.isDemonstration && (
            <span className="px-2.5 py-1 bg-[#171717]/80 dark:bg-[#101114]/80 backdrop-blur-xs text-[10px] uppercase tracking-wider text-neutral-300 rounded-xs">
              Studio Concept
            </span>
          )}
        </div>
      </div>

      {/* Details Container */}
      <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#C8A45D] dark:text-[#DFCA95]">
            {item.clientType}
          </p>
          <h3 className="text-xl font-medium text-[#171717] dark:text-white font-serif leading-snug">
            {item.title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-[#A1A1AA] leading-relaxed font-light">
            {item.description}
          </p>
        </div>

        {/* Technical Stock & Embellishments */}
        <div className="pt-4 border-t border-[#EAEAEA] dark:border-[#30333B] space-y-3">
          <div className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400 font-light">
            <Layers className="w-3.5 h-3.5 text-[#C8A45D] shrink-0 mt-0.5" />
            <span>
              <strong className="text-neutral-900 dark:text-neutral-200 font-medium">Stock:</strong> {item.paperStock}
            </span>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-1.5 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#C8A45D]" />
              <span>Embellishments</span>
            </p>
            <div className="flex flex-wrap gap-1.5">
              {item.finishes.map((finish) => (
                <span
                  key={finish}
                  className="text-xs px-2.5 py-1 bg-[#FAF9F6] dark:bg-[#181A20] border border-[#EAEAEA] dark:border-[#30333B] text-neutral-700 dark:text-neutral-300 rounded-xs"
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
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 border border-[#EAEAEA] dark:border-[#30333B] hover:border-[#C8A45D] dark:hover:border-[#DFCA95] hover:text-[#C8A45D] dark:hover:text-[#DFCA95] text-neutral-800 dark:text-neutral-200 text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs bg-[#FAF9F6] dark:bg-[#181A20]"
          >
            <span>Request Similar Specifications</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
