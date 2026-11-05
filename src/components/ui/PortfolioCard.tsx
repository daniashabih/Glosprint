import Image from "next/image";
import { Sparkles, Layers } from "lucide-react";
import { PortfolioItem } from "@/types";
import Button from "@/components/ui/Button";

interface PortfolioCardProps {
  item: PortfolioItem;
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  return (
    <div className="group flex flex-col bg-white border border-[#EAEAEA] rounded-xs overflow-hidden transition-all duration-300 hover:border-[#C8A45D] hover:shadow-xl">
      {/* Image Preview Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
        <Image
          src={item.image}
          alt={`${item.title} — GLOSPRINT Dubai`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/95 backdrop-blur-xs text-[11px] font-semibold uppercase tracking-wider text-[#171717] rounded-xs border border-[#EAEAEA]">
            {item.category}
          </span>
        </div>
      </div>

      {/* Details Container */}
      <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#C8A45D]">
            {item.clientType}
          </p>
          <h3 className="text-xl font-medium text-[#171717] font-serif leading-snug">
            {item.title}
          </h3>
          <p className="text-sm text-neutral-600 leading-relaxed font-light">
            {item.description}
          </p>
        </div>

        {/* Technical Stock & Embellishments */}
        <div className="pt-4 border-t border-[#EAEAEA] space-y-3">
          <div className="flex items-start gap-2 text-xs text-neutral-600">
            <Layers className="w-3.5 h-3.5 text-[#C8A45D] shrink-0 mt-0.5" />
            <span>
              <strong>Stock:</strong> {item.paperStock}
            </span>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400 mb-1.5 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#C8A45D]" />
              <span>Embellishments</span>
            </p>
            <div className="flex flex-wrap gap-1.5">
              {item.finishes.map((finish) => (
                <span
                  key={finish}
                  className="text-xs px-2.5 py-1 bg-[#FAF9F6] border border-[#EAEAEA] text-neutral-700 rounded-xs"
                >
                  {finish}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <Button
            href={`/request-a-quote?service=${encodeURIComponent(item.category)}`}
            variant="outline"
            size="sm"
            className="w-full"
          >
            Request Similar Project
          </Button>
        </div>
      </div>
    </div>
  );
}
