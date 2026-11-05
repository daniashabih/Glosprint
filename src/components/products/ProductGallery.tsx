"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const displayImages = images && images.length > 0 ? images : [
    "https://images.unsplash.com/photo-1589330694653-dad6d3240a2b?auto=format&fit=crop&w=1200&q=80"
  ];

  const currentImage = displayImages[activeImageIndex] || displayImages[0];

  return (
    <div className="space-y-4">
      {/* Main Image Container */}
      <div className="relative aspect-4/3 sm:aspect-16/11 bg-[#F9F9F9] border border-[#EAEAEA] rounded-xs overflow-hidden shadow-xs">
        <Image
          src={currentImage}
          alt={`${productName} view ${activeImageIndex + 1}`}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transition-all duration-300"
        />
        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-xs">
          Visual Sample • Configurable Specification
        </div>
      </div>

      {/* Thumbnail Selector */}
      {displayImages.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-1">
          {displayImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`relative w-20 h-16 shrink-0 rounded-xs overflow-hidden border-2 transition-all ${
                activeImageIndex === idx
                  ? "border-[#C8A45D] shadow-xs"
                  : "border-[#EAEAEA] hover:border-neutral-400 opacity-70 hover:opacity-100"
              }`}
              aria-label={`View ${productName} image ${idx + 1}`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
