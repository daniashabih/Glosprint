import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import {
  MessageSquare,
  ArrowRight,
  Sparkles,
  Clock,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
} from "lucide-react";
import { products, getProductBySlug } from "@/data/products";
import { buildMetadata } from "@/lib/seo";
import { createProductWhatsAppUrl } from "@/lib/whatsapp";
import { createProductSchema, createBreadcrumbSchema } from "@/lib/structured-data";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import ProductGallery from "@/components/products/ProductGallery";
import ProductSpecTable from "@/components/products/ProductSpecTable";
import ProductCard from "@/components/products/ProductCard";
import CtaBanner from "@/components/sections/CtaBanner";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | GLOSPRINT Dubai",
    };
  }

  return buildMetadata({
    title: product.seoTitle || `${product.name} | GLOSPRINT Dubai`,
    description:
      product.seoDescription ||
      `${product.name} printing in Dubai. ${product.shortDescription} Available on premium stocks with fast turnaround.`,
    canonicalPath: `/products/${product.slug}`,
    image: product.heroImage,
    keywords: [
      `${product.name} Dubai`,
      `${product.categoryName} Dubai`,
      "Commercial Printing Press Dubai",
      "Luxury Print Finishes UAE",
    ],
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Pre-generate WhatsApp inquiry link
  const whatsappUrl = createProductWhatsAppUrl(product);

  // Related products
  const relatedProducts = product.relatedProductSlugs
    .map((s) => getProductBySlug(s))
    .filter((p): p is typeof product => Boolean(p))
    .slice(0, 4);

  // Structured Data
  const productSchema = createProductSchema(product);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Products", url: "/products" },
    { name: product.categoryName, url: `/products?category=${product.categoryId}` },
    { name: product.name, url: `/products/${product.slug}` },
  ]);

  return (
    <>
      <JsonLd data={productSchema} />
      <JsonLd data={breadcrumbSchema} />

      {/* Breadcrumb Navigation Header */}
      <div className="bg-[#101010] border-b border-[#2B2B2B] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Products", url: "/products" },
              { name: product.categoryName, url: `/products?category=${product.categoryId}` },
              { name: product.name, url: `/products/${product.slug}` },
            ]}
          />
        </div>
      </div>

      {/* Main Product Overview Section */}
      <section className="py-12 md:py-20 bg-[#080808] border-b border-[#2B2B2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Product Image Gallery */}
            <div className="lg:col-span-6">
              <ProductGallery
                images={product.galleryImages}
                productName={product.name}
              />
            </div>

            {/* Right: Product Highlights & Quick Quoting */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C8A45D] bg-[#191919] border border-[#2B2B2B] px-2.5 py-1 rounded-xs">
                    {product.categoryName}
                  </span>
                  {product.isFeatured && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#080808] bg-[#C8A45D] px-2.5 py-1 rounded-xs flex items-center gap-1 shadow-xs">
                      <Sparkles className="w-2.5 h-2.5" />
                      <span>Featured Product</span>
                    </span>
                  )}
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white leading-tight">
                  {product.name}
                </h1>
                <p className="text-sm sm:text-base text-[#B3B3B3] font-light leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              {/* Highlights & Key Features */}
              <div className="pt-4 border-t border-[#2B2B2B] space-y-2.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  Key Technical Features
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {product.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-[#B3B3B3] font-light"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C8A45D] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Parameters Summary Box */}
              <div className="bg-[#191919] border border-[#2B2B2B] rounded-xs p-5 space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[#858585] font-light block">Min Order Quantity:</span>
                    <strong className="text-white font-medium text-sm">
                      {product.minOrderQuantity}
                    </strong>
                  </div>
                  <div>
                    <span className="text-[#858585] font-light block">Standard Lead Time:</span>
                    <strong className="text-white font-medium text-sm">
                      {product.productionTime.split("(")[0].trim()}
                    </strong>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#2B2B2B] flex items-center justify-between">
                  <span className="text-[#858585] font-light">Pricing Structure:</span>
                  <span className="font-semibold text-[#C8A45D] uppercase tracking-wider">
                    Quote on Request
                  </span>
                </div>
              </div>

              {/* Primary Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <Link
                  href={`/request-a-quote?product=${encodeURIComponent(product.name)}&category=${product.categoryId}`}
                  className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#C8A45D] hover:bg-[#DFCA95] text-[#080808] px-6 py-4 rounded-xs text-xs font-bold uppercase tracking-widest transition-colors shadow-md"
                >
                  <span>Request a Custom Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-4 rounded-xs text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Specs</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 border-t border-[#2B2B2B] grid grid-cols-3 gap-2 text-center text-[10px] text-[#858585] font-light">
                <div className="flex flex-col items-center gap-1">
                  <FileCheck className="w-4 h-4 text-[#C8A45D]" />
                  <span>Free PDF Proofing</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-[#C8A45D]" />
                  <span>ISO 12647-2 Certified</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Clock className="w-4 h-4 text-[#C8A45D]" />
                  <span>Express Option Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description & Specifications Section */}
      <section className="py-16 md:py-24 bg-[#101010] border-b border-[#2B2B2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Long Description & Popular Uses */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-serif text-white">
                  About {product.name}
                </h2>
                <p className="text-sm text-[#B3B3B3] font-light leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              <div className="space-y-3 bg-[#191919] p-6 border border-[#2B2B2B] rounded-xs">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                  Recommended Commercial Uses
                </h3>
                <ul className="space-y-2 text-xs text-[#B3B3B3] font-light">
                  {product.popularUses.map((use, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D] shrink-0" />
                      <span>{use}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Specifications Table */}
            <div className="lg:col-span-7">
              <ProductSpecTable product={product} />
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 bg-[#080808] border-b border-[#2B2B2B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A45D]">
                  Complementary Solutions
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-white mt-1">
                  Frequently Paired With {product.name}
                </h2>
              </div>
              <Link
                href="/products"
                className="text-xs font-semibold uppercase tracking-wider text-[#C8A45D] hover:text-[#DFCA95] transition-colors inline-flex items-center gap-1"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Global Conversion Banner */}
      <CtaBanner />
    </>
  );
}
