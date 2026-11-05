"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, Eye } from "lucide-react";
import { premiumFinishes } from "@/data/finishes";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FinishesShowcase() {
  const [selectedFinish, setSelectedFinish] = useState(premiumFinishes[0]);

  return (
    <section className="py-20 md:py-28 bg-[#080808] border-b border-[#2B2B2B] text-white overflow-hidden relative" id="finishes">
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C8A45D]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          overline="Artisanal Embellishment"
          title="The Haute-Couture Finishing Showcase"
          description="Transform ordinary cardstock into extraordinary sensory artifacts. Explore our tactile library of metallic foils, 3D relief, velvety laminations, and gilded edges."
        />

        {/* Interactive Finishes Gallery */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Interactive Highlight Card */}
          <div className="lg:col-span-5 bg-[#191919] border border-[#2B2B2B] rounded-xs overflow-hidden shadow-xl flex flex-col justify-between">
            <div className="relative aspect-4/3 w-full bg-[#101010] overflow-hidden">
              <Image
                src={selectedFinish.image}
                alt={selectedFinish.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-all duration-500"
              />
              <div className="absolute top-3 left-3 bg-[#080808]/90 backdrop-blur-xs text-[#C8A45D] text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-xs flex items-center gap-1.5 border border-[#C8A45D]/40 shadow-xs">
                <Sparkles className="w-3 h-3" />
                <span>Luxury Specification</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#C8A45D] font-semibold">
                  Selected Technique
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-light text-white">
                  {selectedFinish.name}
                </h3>
              </div>

              <p className="text-xs text-[#B3B3B3] font-light leading-relaxed">
                {selectedFinish.textureDescription}
              </p>

              <div className="space-y-2 pt-2 border-t border-[#2B2B2B] text-xs">
                <div>
                  <span className="text-[#858585] font-light">Visual Effect: </span>
                  <span className="text-white font-medium">{selectedFinish.visualEffect}</span>
                </div>
                <div>
                  <span className="text-[#858585] font-light">Recommended For: </span>
                  <span className="text-white font-medium">{selectedFinish.bestFor}</span>
                </div>
                <div>
                  <span className="text-[#858585] font-light">Ideal Substrate: </span>
                  <span className="text-white font-medium">{selectedFinish.recommendedStock}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={`/request-a-quote?finishing=${encodeURIComponent(selectedFinish.name)}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C8A45D] hover:underline transition-colors"
                >
                  <span>Request a Quote With This Finish</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Selectable Finishing Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-3 sm:gap-4">
            {premiumFinishes.map((finish) => {
              const isSelected = selectedFinish.id === finish.id;
              return (
                <button
                  key={finish.id}
                  type="button"
                  onClick={() => setSelectedFinish(finish)}
                  className={`text-left p-4 sm:p-5 rounded-xs border transition-all duration-200 group flex flex-col justify-between space-y-3 cursor-pointer ${
                    isSelected
                      ? "bg-[#202020] border-[#C8A45D] shadow-md ring-1 ring-[#C8A45D]"
                      : "bg-[#141414] border-[#2B2B2B] hover:bg-[#191919] hover:border-[#C8A45D]/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="w-3 h-3 rounded-full shrink-0 border border-white/20"
                      style={{ backgroundColor: finish.accentColor }}
                    />
                    <Eye
                      className={`w-3.5 h-3.5 transition-opacity ${
                        isSelected ? "text-[#C8A45D] opacity-100" : "text-[#858585] opacity-50 group-hover:opacity-100"
                      }`}
                    />
                  </div>

                  <div>
                    <h4
                      className={`text-sm font-medium font-serif transition-colors ${
                        isSelected ? "text-[#C8A45D]" : "text-white group-hover:text-[#C8A45D]"
                      }`}
                    >
                      {finish.name}
                    </h4>
                    <p className="text-[11px] text-[#B3B3B3] font-light line-clamp-2 mt-1 leading-snug">
                      {finish.visualEffect}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* View All Capabilities CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/printing-capabilities"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#191919] border border-[#2B2B2B] hover:bg-[#202020] hover:border-[#C8A45D] hover:text-[#C8A45D] text-white text-xs font-semibold uppercase tracking-widest transition-all rounded-xs shadow-xs"
          >
            <span>Explore All 15 Printing & Finishing Capabilities</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
