"use client";

import { useState } from "react";
import { portfolioItems } from "@/data/portfolio";
import { PortfolioItem } from "@/types";
import PortfolioCard from "@/components/ui/PortfolioCard";

type CategoryFilter =
  | "All"
  | "Luxury Packaging"
  | "Corporate Stationery"
  | "Marketing Collateral"
  | "Large Format & Signage"
  | "Premium Invitations";

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");

  const categories: CategoryFilter[] = [
    "All",
    "Luxury Packaging",
    "Corporate Stationery",
    "Marketing Collateral",
    "Large Format & Signage",
    "Premium Invitations",
  ];

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-xs transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#171717] text-white border border-[#171717] shadow-sm"
                  : "bg-white text-neutral-600 border border-[#EAEAEA] hover:border-[#C8A45D] hover:text-[#171717]"
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
    </div>
  );
}
