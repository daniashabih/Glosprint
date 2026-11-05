import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 8);

  return (
    <section className="py-20 md:py-28 bg-[#141414] border-b border-[#2B2B2B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="Flagship Products"
          title="Popular Printing Formats & Bestsellers"
          description="A curated selection of our most requested corporate cards, rigid unboxing boxes, event displays, and brand merchandise."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {featured.map((product, idx) => (
            <ProductCard key={product.id} product={product} priority={idx < 4} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C8A45D] hover:bg-[#DFCA95] text-[#080808] text-xs font-bold uppercase tracking-widest rounded-xs transition-colors shadow-md"
          >
            <span>Explore All 66 Catalog Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
