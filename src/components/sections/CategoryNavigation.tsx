import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";
import { productCategories } from "@/data/categories";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CategoryNavigation() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-[#EAEAEA]" id="categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          overline="Complete Printing Catalog"
          title="Explore Our Core Product Categories"
          description="Engineered across seven dedicated printing and manufacturing divisions to fulfill corporate, retail, and experiential branding requirements."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-14">
          {productCategories.map((category) => (
            <div
              key={category.id}
              className="group bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-[#C8A45D]/60"
            >
              <div>
                {/* Category Image Header */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-neutral-200">
                  <Image
                    src={category.featuredImage}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <span className="text-[10px] font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded-xs">
                      {category.itemCountDescription}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-lg font-serif font-medium text-[#171717] group-hover:text-[#C8A45D] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed line-clamp-2">
                    {category.description}
                  </p>

                  {/* Sub-item links */}
                  <div className="pt-2 border-t border-[#EAEAEA] space-y-1">
                    {category.popularProductNames.slice(0, 3).map((item, idx) => (
                      <div
                        key={idx}
                        className="text-[11px] text-neutral-500 font-light flex items-center gap-1.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#C8A45D]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 sm:p-6 pt-0">
                <Link
                  href={`/products?category=${category.id}`}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#171717] group-hover:text-[#C8A45D] pt-3 border-t border-[#EAEAEA] transition-colors"
                >
                  <span>Browse Category</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}

          {/* Catalog Index Card */}
          <div className="bg-[#171717] text-white p-6 sm:p-8 rounded-xs flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-[#C8A45D] font-semibold">
                Direct Catalog Access
              </span>
              <h3 className="text-2xl font-serif font-light leading-tight">
                All 66 Printing Formats In One Catalog
              </h3>
              <p className="text-xs text-neutral-300 font-light leading-relaxed">
                Filter by technique, paper GSM, finishing, or minimum order quantities across all commercial categories.
              </p>
            </div>

            <div>
              <Link
                href="/products"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#C8A45D] hover:bg-[#B59148] text-[#171717] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-sm"
              >
                <Layers className="w-4 h-4" />
                <span>View Full Catalog</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
