import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, Tag, CheckCircle2 } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import CtaBanner from "@/components/sections/CtaBanner";
import ProductCard from "@/components/products/ProductCard";
import { blogPosts, getBlogPostBySlug } from "@/data/blog";
import { getProductBySlug } from "@/data/products";
import { createArticleSchema } from "@/lib/structured-data";
import { buildMetadata } from "@/lib/seo";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | GLOSPRINT Dubai",
    };
  }

  return buildMetadata({
    title: `${post.title} | GLOSPRINT Journal`,
    description: post.metaDescription || post.excerpt,
    canonicalPath: `/blog/${post.slug}`,
    keywords: post.tags,
    image: post.image,
    type: "article",
    publishedTime: post.publishDate,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = createArticleSchema(post);

  // Related articles
  const relatedPosts = (post.relatedArticleSlugs || [])
    .map((s) => getBlogPostBySlug(s))
    .filter((p): p is typeof post => Boolean(p))
    .slice(0, 2);

  const fallbackRelated = relatedPosts.length > 0
    ? relatedPosts
    : blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  // Related products
  const relatedProducts = (post.relatedProductSlugs || [])
    .map((s) => getProductBySlug(s))
    .filter((prod): prod is NonNullable<typeof prod> => Boolean(prod))
    .slice(0, 3);

  return (
    <>
      <JsonLd data={articleSchema} />

      {/* Article Header */}
      <div className="bg-[#101010] border-b border-[#2B2B2B] py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Blog", url: "/blog" },
              { name: post.title, url: `/blog/${post.slug}` },
            ]}
          />

          <div className="mt-8 space-y-6">
            <span className="inline-block px-3 py-1 bg-[#191919] border border-[#C8A45D]/40 text-[#DFCA95] text-xs font-semibold uppercase tracking-wider rounded-xs">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif text-white leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-[#858585] border-t border-[#2B2B2B]">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#C8A45D]" />
                <span className="text-white font-medium">{post.author.name}</span>
                <span className="text-[#858585]">({post.author.role})</span>
              </span>
              <span className="flex items-center gap-2 text-[#B3B3B3]">
                <Calendar className="w-4 h-4 text-[#C8A45D]" />
                <span>{post.publishDate}</span>
              </span>
              <span className="flex items-center gap-2 text-[#B3B3B3]">
                <Clock className="w-4 h-4 text-[#C8A45D]" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="relative aspect-16/9 rounded-xs overflow-hidden border border-[#2B2B2B] bg-[#191919] shadow-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Body */}
      <article className="py-16 md:py-24 bg-[#080808] border-b border-[#2B2B2B]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <p className="text-lg sm:text-xl text-white font-light leading-relaxed italic border-l-2 border-[#C8A45D] pl-4">
            {post.excerpt}
          </p>

          <div className="space-y-6 text-[#B3B3B3] leading-relaxed text-base sm:text-lg font-light">
            {post.introduction && (
              <p className="whitespace-pre-line leading-relaxed">
                {post.introduction}
              </p>
            )}

            {post.sections &&
              post.sections.map((section, sIndex) => (
                <div key={sIndex} className="pt-6 space-y-4">
                  <h2 className="text-2xl font-light font-serif text-white tracking-tight">
                    {section.heading}
                  </h2>
                  <p className="whitespace-pre-line leading-relaxed">
                    {section.content}
                  </p>

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#B3B3B3]">
                      {section.bullets.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  {section.subsections && section.subsections.length > 0 && (
                    <div className="grid gap-4 pt-2">
                      {section.subsections.map((sub, subIdx) => (
                        <div
                          key={subIdx}
                          className="p-4 bg-[#191919] border border-[#2B2B2B] rounded-xs"
                        >
                          <h3 className="text-base font-semibold text-white mb-1">
                            {sub.title}
                          </h3>
                          <p className="text-sm text-[#B3B3B3] font-light leading-relaxed">
                            {sub.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <div className="p-6 bg-[#191919] border-l-4 border-[#C8A45D] border border-[#2B2B2B] rounded-xs space-y-3 mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C8A45D]">
                  Key Takeaways
                </h3>
                <ul className="space-y-2 text-sm text-[#B3B3B3]">
                  {post.keyTakeaways.map((item, kIdx) => (
                    <li key={kIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C8A45D] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="pt-8 border-t border-[#2B2B2B] flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#858585] mr-2 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span>Topics:</span>
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#141414] text-xs text-[#B3B3B3] border border-[#2B2B2B] rounded-xs"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Box */}
          <div className="p-6 bg-[#191919] border border-[#2B2B2B] rounded-xs flex items-center gap-4 mt-8">
            <div className="w-12 h-12 rounded-full bg-[#101010] border border-[#C8A45D]/40 flex items-center justify-center shrink-0">
              <User className="w-6 h-6 text-[#C8A45D]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#858585]">Written by</p>
              <h3 className="text-base font-semibold text-white">{post.author.name}</h3>
              <p className="text-xs text-[#B3B3B3]">{post.author.role}</p>
            </div>
          </div>
        </div>
      </article>

      {/* Featured Products Referenced in This Guide */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-[#141414] border-b border-[#2B2B2B]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="flex items-end justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A45D]">
                  Products in This Guide
                </span>
                <h2 className="text-2xl font-serif text-white mt-1">
                  Featured Printing Products
                </h2>
              </div>
              <Link
                href="/products"
                className="text-xs font-semibold uppercase tracking-wider text-[#C8A45D] hover:text-[#DFCA95] transition-colors"
              >
                Browse All Products →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((prod) => (
                <ProductCard key={prod.id} product={prod} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Articles */}
      {fallbackRelated.length > 0 && (
        <section className="py-20 bg-[#080808] border-b border-[#2B2B2B]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A45D]">
                Continue Reading
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-light font-serif text-white">
                Related Educational Articles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {fallbackRelated.map((rel) => (
                <div
                  key={rel.slug}
                  className="bg-[#191919] hover:bg-[#202020] p-6 border border-[#2B2B2B] rounded-xs space-y-3 hover:border-[#C8A45D] transition-all"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C8A45D]">
                    {rel.category}
                  </span>
                  <h3 className="text-lg font-medium font-serif text-white hover:text-[#C8A45D] transition-colors leading-snug">
                    <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                  </h3>
                  <p className="text-xs text-[#B3B3B3] line-clamp-2 leading-relaxed font-light">
                    {rel.excerpt}
                  </p>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-white hover:text-[#C8A45D] pt-1"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner />
    </>
  );
}
