"use client";

import { useState } from "react";
import { portfolioItems, portfolioCategories } from "@/data/portfolio";
import { PortfolioItem } from "@/types";
import PortfolioCard from "@/components/ui/PortfolioCard";
import { AlertCircle } from "lucide-react";

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Projects");

  const filteredItems =
    selectedCategory === "All Projects"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
        {portfolioCategories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#C8A45D] text-[#080808] font-bold border border-[#C8A45D] shadow-sm"
                  : "bg-[#191919] text-[#B3B3B3] border border-[#2B2B2B] hover:bg-[#202020] hover:border-[#C8A45D] hover:text-white"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Grid of Portfolio Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredItems.map((item: PortfolioItem) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>

      {/* Demonstration Notice */}
      <div className="p-5 bg-[#141414] border border-[#2B2B2B] rounded-xs flex items-start gap-3 text-xs text-[#B3B3B3] leading-relaxed font-light">
        <AlertCircle className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
        <p>
          <strong className="text-white font-medium">Demonstration Project Disclosure:</strong>{" "}
          Projects featured in this portfolio showcase representative concept designs and technical capabilities across paper stocks, foils, and binding methods. In adherence to enterprise client confidentiality and non-disclosure agreements, proprietary brand artwork is replaced with studio concept demonstrations.
        </p>
      </div>
    </div>
  );
}
