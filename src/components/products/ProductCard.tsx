import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Layers, Sparkles } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <div className="group bg-white border border-[#EAEAEA] rounded-xs overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:border-[#C8A45D]/60">
      {/* Product Image */}
      <Link
        href={`/products/${product.slug}`}
        className="relative aspect-4/3 overflow-hidden bg-[#F5F5F5] block"
      >
        <Image
          src={product.heroImage}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Badge */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="text-[10px] font-semibold uppercase tracking-wider bg-white/95 backdrop-blur-xs text-[#171717] px-2.5 py-1 rounded-xs shadow-xs">
            {product.categoryName.split("&")[0].trim()}
          </span>
          {product.isFeatured && (
            <span className="text-[10px] font-semibold uppercase tracking-wider bg-[#C8A45D] text-white px-2 py-1 rounded-xs shadow-xs flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              <span>Featured</span>
            </span>
          )}
        </div>

        {/* MOQ Tag */}
        <div className="absolute bottom-3 right-3 z-10">
          <span className="text-[10px] font-medium bg-[#171717]/85 backdrop-blur-xs text-white px-2.5 py-1 rounded-xs">
            MOQ: {product.minOrderQuantity}
          </span>
        </div>
      </Link>

      {/* Card Details */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <Link href={`/products/${product.slug}`}>
            <h3 className="text-base sm:text-lg font-serif font-medium text-[#171717] group-hover:text-[#C8A45D] transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>
          <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed font-light">
            {product.shortDescription}
          </p>
        </div>

        {/* Quick Specs Snippets */}
        <div className="pt-3 border-t border-[#EAEAEA]/80 space-y-1.5 text-[11px] text-neutral-500">
          <div className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
            <span className="line-clamp-1">
              <strong className="text-neutral-700 font-medium">Stock:</strong>{" "}
              {product.paperMaterials[0]}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
            <span className="line-clamp-1">
              <strong className="text-neutral-700 font-medium">Lead Time:</strong>{" "}
              {product.productionTime.split("(")[0].trim()}
            </span>
          </div>
        </div>

        {/* Card Actions */}
        <div className="pt-2 flex items-center gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#171717] bg-[#FAF9F6] border border-[#EAEAEA] hover:border-[#C8A45D] hover:text-[#C8A45D] transition-all rounded-xs"
          >
            <span>Specs & Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href={`/request-quote?product=${encodeURIComponent(product.name)}&category=${product.categoryId}`}
            className="inline-flex items-center justify-center px-3.5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#171717] hover:bg-[#C8A45D] transition-colors rounded-xs shadow-xs"
            title="Request a Custom Quote"
          >
            Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
