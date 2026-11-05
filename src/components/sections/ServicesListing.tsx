"use client";

import { useState } from "react";
import { services } from "@/data/services";
import { Service } from "@/types";
import ServiceCard from "@/components/ui/ServiceCard";

type ServiceCategory =
  | "All"
  | "Commercial & Offset"
  | "Digital & Quick Print"
  | "Packaging & Boxes"
  | "Signage & Large Format"
  | "Luxury & Wedding"
  | "Promotional";

export default function ServicesListing() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>("All");

  const categories: ServiceCategory[] = [
    "All",
    "Commercial & Offset",
    "Digital & Quick Print",
    "Packaging & Boxes",
    "Signage & Large Format",
    "Luxury & Wedding",
    "Promotional",
  ];

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((s: Service) => s.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-xs transition-all duration-200 cursor-pointer ${
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

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service, index) => (
          <ServiceCard key={service.id} service={service} priority={index < 3} />
        ))}
      </div>
    </div>
  );
}
