import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import CtaBanner from "@/components/sections/CtaBanner";
import { blogPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog & Printing Insights Dubai | GLOSPRINT",
  description:
    "Expert technical articles, luxury packaging trends, paper guides, and commercial print insights for marketing directors and founders in Dubai and the GCC.",
  canonicalPath: "/blog",
  keywords: [
    "Dubai Printing Blog",
    "Luxury Packaging Insights",
    "Offset vs Digital Printing Guide",
    "Print Craftsmanship UAE",
  ],
});

export default function BlogListingPage() {
  return (
    <>
      {/* Page Header */}
      <div className="bg-[#101010] border-b border-[#2B2B2B] py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Blog", url: "/blog" }]} />
          
          <div className="mt-6 max-w-3xl">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8A45D]">
              Knowledge & Insights
            </span>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-white font-serif leading-tight">
              The GLOSPRINT Journal
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#B3B3B3] font-light leading-relaxed">
              Explore in-depth technical guides, luxury embellishment tutorials, and strategic packaging analysis from our master print engineers in Dubai.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Articles Grid */}
      <section className="py-20 md:py-28 bg-[#080808] border-b border-[#2B2B2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col bg-[#191919] hover:bg-[#202020] border border-[#2B2B2B] rounded-xs overflow-hidden transition-all duration-300 hover:border-[#C8A45D] hover:shadow-2xl hover:shadow-black/60"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#101010]">
                  <Image
                    src={post.image}
                    alt={`${post.title} — GLOSPRINT`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#080808]/90 backdrop-blur-xs text-xs font-semibold uppercase tracking-wider text-white rounded-xs border border-[#2B2B2B]">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs text-[#858585]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#C8A45D]" />
                        <span>{post.publishDate || post.date}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#C8A45D]" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-medium font-serif text-white group-hover:text-[#C8A45D] transition-colors leading-snug">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-[#B3B3B3] line-clamp-3 leading-relaxed font-light">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer of Card */}
                  <div className="pt-4 border-t border-[#2B2B2B] flex items-center justify-between">
                    <span className="text-xs text-[#858585] flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#C8A45D]" />
                      <span className="text-[#B3B3B3]">{post.author.name}</span>
                    </span>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-white group-hover:text-[#C8A45D] transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
