"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, AlertCircle, Layers, ChevronLeft, ChevronRight, X } from "lucide-react";
import { products } from "@/data/products";
import { productCategories } from "@/data/categories";
import ProductCard from "@/components/products/ProductCard";

const ITEMS_PER_PAGE = 12;

export default function CatalogView() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const paramCategory = searchParams.get("category") || "all";
  const initialSearch = searchParams.get("search") || "";

  const [selectedCategory, setSelectedCategory] = useState<string>(paramCategory);
  const [prevParamCategory, setPrevParamCategory] = useState<string>(paramCategory);
  const [searchQuery, setSearchQuery] = useState<string>(initialSearch);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Sync state if URL query params change
  if (paramCategory !== prevParamCategory) {
    setPrevParamCategory(paramCategory);
    setSelectedCategory(paramCategory);
  }

  // Filter products by category and search term
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.categoryId === selectedCategory;

      const matchesSearch =
        !searchQuery.trim() ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.paperMaterials.some((m) =>
          m.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        product.finishingOptions.some((f) =>
          f.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE) || 1;
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
    if (categoryId === "all") {
      router.push("/products", { scroll: false });
    } else {
      router.push(`/products?category=${categoryId}`, { scroll: false });
    }
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
    setCurrentPage(1);
    router.push("/products", { scroll: false });
  };

  const activeCategoryObj = productCategories.find((c) => c.id === selectedCategory);

  return (
    <div className="space-y-10">
      {/* Search & Filter Toolbar */}
      <div className="bg-[#141414] border border-[#2B2B2B] rounded-xs p-5 sm:p-6 space-y-5">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-[#858585] absolute left-3.5 top-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search products, materials, finishes (e.g. Gold Foil, Rigid Box)..."
              className="w-full pl-10 pr-10 py-2.5 bg-[#101010] border border-[#2B2B2B] rounded-xs text-xs text-white placeholder:text-[#858585] focus:outline-hidden focus:border-[#C8A45D] focus:ring-1 focus:ring-[#C8A45D]/30 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => handleSearchChange("")}
                className="absolute right-3 top-3 text-[#858585] hover:text-white cursor-pointer"
                aria-label="Clear Search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Product Count Indicator */}
          <div className="text-xs text-[#858585] font-light flex items-center gap-2 self-start md:self-auto">
            <span>
              Showing <strong className="text-white font-medium">{filteredProducts.length}</strong> of{" "}
              {products.length} printing formats
            </span>
            {(selectedCategory !== "all" || searchQuery) && (
              <button
                onClick={handleClearFilters}
                className="text-[#C8A45D] hover:text-[#DFCA95] hover:underline font-medium text-xs ml-2 cursor-pointer"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1">
          <button
            onClick={() => handleCategorySelect("all")}
            className={`px-3.5 py-2 rounded-xs text-xs font-semibold uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
              selectedCategory === "all"
                ? "bg-[#C8A45D] text-[#080808] font-bold border border-[#C8A45D] shadow-sm"
                : "bg-[#191919] border border-[#2B2B2B] text-[#B3B3B3] hover:bg-[#202020] hover:border-[#C8A45D]/60 hover:text-white"
            }`}
          >
            All Products ({products.length})
          </button>
          {productCategories.map((cat) => {
            const count = products.filter((p) => p.categoryId === cat.id).length;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategorySelect(cat.id)}
                className={`px-3.5 py-2 rounded-xs text-xs font-semibold uppercase tracking-wider shrink-0 transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#C8A45D] text-[#080808] font-bold border border-[#C8A45D] shadow-sm"
                    : "bg-[#191919] border border-[#2B2B2B] text-[#B3B3B3] hover:bg-[#202020] hover:border-[#C8A45D]/60 hover:text-white"
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Category Description Banner (if single category selected) */}
      {activeCategoryObj && (
        <div className="bg-[#191919] border-l-2 border-[#C8A45D] p-5 border border-[#2B2B2B] rounded-xs space-y-1">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
            {activeCategoryObj.name}
          </h2>
          <p className="text-xs text-[#B3B3B3] font-light leading-relaxed">
            {activeCategoryObj.description}
          </p>
        </div>
      )}

      {/* Product Grid */}
      {paginatedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 bg-[#141414] border border-[#2B2B2B] rounded-xs p-8 space-y-4">
          <Layers className="w-10 h-10 text-[#858585] mx-auto" />
          <h3 className="text-lg font-serif text-white">No Products Match Your Criteria</h3>
          <p className="text-xs text-[#B3B3B3] font-light max-w-md mx-auto">
            We couldn&apos;t find any products matching &quot;{searchQuery}&quot; in the selected category. Please try a different search keyword or clear your filter.
          </p>
          <button
            onClick={handleClearFilters}
            className="px-5 py-2.5 bg-[#C8A45D] text-[#080808] text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-[#DFCA95] transition-colors cursor-pointer"
          >
            Show All 66 Products
          </button>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between border-t border-[#2B2B2B] pt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#191919] border border-[#2B2B2B] rounded-xs text-white hover:bg-[#202020] hover:border-[#C8A45D] disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <span className="text-xs text-[#858585] font-light">
            Page <strong className="text-white font-medium">{currentPage}</strong> of{" "}
            <strong className="text-white font-medium">{totalPages}</strong>
          </span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#191919] border border-[#2B2B2B] rounded-xs text-white hover:bg-[#202020] hover:border-[#C8A45D] disabled:opacity-40 disabled:pointer-events-none transition-colors cursor-pointer"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Catalog Disclaimer */}
      <div className="p-5 bg-[#141414] border border-[#2B2B2B] rounded-xs flex items-start gap-3 text-xs text-[#B3B3B3] leading-relaxed font-light">
        <AlertCircle className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
        <p>
          <strong className="text-white font-medium">Catalog Notice:</strong>{" "}
          Product specifications and availability shown are representative of common industry configurations. Final materials, exact stock availability, custom dies, and production lead times are confirmed during technical consultation and proof sign-off.
        </p>
      </div>
    </div>
  );
}
