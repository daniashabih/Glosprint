import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import CtaBanner from "@/components/sections/CtaBanner";
import { blogPosts } from "@/data/blog";
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
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | GLOSPRINT Dubai",
    };
  }

  return buildMetadata({
    title: `${post.title} | GLOSPRINT Journal`,
    description: post.excerpt,
    canonicalPath: `/blog/${post.slug}`,
    keywords: post.tags,
    image: post.image,
    type: "article",
    publishedTime: post.publishDate || post.date,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = createArticleSchema(post);
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <JsonLd data={articleSchema} />

      {/* Article Header */}
      <div className="bg-[#FAF9F6] border-b border-[#EAEAEA] py-14 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Blog", url: "/blog" },
              { name: post.title, url: `/blog/${post.slug}` },
            ]}
          />

          <div className="mt-8 space-y-6">
            <span className="inline-block px-3 py-1 bg-white border border-[#C8A45D]/40 text-[#9E7B35] text-xs font-semibold uppercase tracking-wider rounded-xs">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light font-serif text-[#171717] leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs sm:text-sm text-neutral-500 border-t border-[#EAEAEA]/80">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#C8A45D]" />
                <span className="text-[#171717] font-medium">{post.author.name}</span>
                <span className="text-neutral-400">({post.author.role})</span>
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#C8A45D]" />
                <span>{post.publishDate || post.date}</span>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C8A45D]" />
                <span>{post.readTime}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="relative aspect-[16/9] rounded-xs overflow-hidden border border-[#EAEAEA] shadow-xl">
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
      <article className="py-16 md:py-24 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <p className="text-lg sm:text-xl text-neutral-800 font-light leading-relaxed italic border-l-2 border-[#C8A45D] pl-4">
            {post.excerpt}
          </p>

          <div className="space-y-6 text-neutral-700 leading-relaxed text-base sm:text-lg font-light">
            {post.introduction && (
              <p className="whitespace-pre-line leading-relaxed">
                {post.introduction}
              </p>
            )}

            {post.sections && post.sections.map((section, sIndex) => (
              <div key={sIndex} className="pt-6 space-y-4">
                <h2 className="text-2xl font-light font-serif text-[#171717] tracking-tight">
                  {section.heading}
                </h2>
                <p className="whitespace-pre-line leading-relaxed">
                  {section.content}
                </p>

                {section.bullets && section.bullets.length > 0 && (
                  <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                )}

                {section.subsections && section.subsections.length > 0 && (
                  <div className="grid gap-4 pt-2">
                    {section.subsections.map((sub, subIdx) => (
                      <div key={subIdx} className="p-4 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs">
                        <h3 className="text-base font-semibold text-[#171717] mb-1">
                          {sub.title}
                        </h3>
                        <p className="text-sm text-neutral-600 font-light leading-relaxed">
                          {sub.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <div className="p-6 bg-[#FAF9F6] border-l-4 border-[#C8A45D] border border-[#EAEAEA] rounded-xs space-y-3 mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C8A45D]">
                  Key Takeaways
                </h3>
                <ul className="space-y-2 text-sm text-neutral-700">
                  {post.keyTakeaways.map((item, kIdx) => (
                    <li key={kIdx} className="flex items-start gap-2">
                      <span className="text-[#C8A45D] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {post.content && post.content.map((paragraph, index) => {
              const isHeading =
                paragraph.startsWith("1.") ||
                paragraph.startsWith("2.") ||
                paragraph.startsWith("3.") ||
                paragraph.startsWith("4.") ||
                paragraph.includes("Understanding") ||
                paragraph.includes("The Crossover Point");

              if (isHeading) {
                const parts = paragraph.split("\n");
                return (
                  <div key={index} className="pt-6 space-y-3">
                    <h2 className="text-2xl font-light font-serif text-[#171717] tracking-tight">
                      {parts[0]}
                    </h2>
                    {parts.slice(1).map((subPara, sIdx) => (
                      <p key={sIdx} className="text-neutral-700 font-light leading-relaxed whitespace-pre-line">
                        {subPara}
                      </p>
                    ))}
                  </div>
                );
              }

              return (
                <p key={index} className="whitespace-pre-line leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Tags */}
          <div className="pt-8 border-t border-[#EAEAEA] flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mr-2 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span>Topics:</span>
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#FAF9F6] text-xs text-neutral-600 border border-[#EAEAEA] rounded-xs"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Box */}
          <div className="p-6 bg-[#FAF9F6] border border-[#EAEAEA] rounded-xs flex items-center gap-4 mt-8">
            <div className="w-12 h-12 rounded-full bg-white border border-[#C8A45D]/40 flex items-center justify-center shrink-0">
              <User className="w-6 h-6 text-[#C8A45D]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-neutral-400">Written by</p>
              <h3 className="text-base font-semibold text-[#171717]">{post.author.name}</h3>
              <p className="text-xs text-neutral-500">{post.author.role}</p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-[#FAF9F6] border-b border-[#EAEAEA]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C8A45D]">
                Continue Reading
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-light font-serif text-[#171717]">
                Related Articles
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.slug}
                  className="bg-white p-6 border border-[#EAEAEA] rounded-xs space-y-3 hover:border-[#C8A45D] transition-all"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C8A45D]">
                    {rel.category}
                  </span>
                  <h3 className="text-lg font-medium font-serif text-[#171717] hover:text-[#C8A45D] transition-colors leading-snug">
                    <Link href={`/blog/${rel.slug}`}>{rel.title}</Link>
                  </h3>
                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed font-light">
                    {rel.excerpt}
                  </p>
                  <Link
                    href={`/blog/${rel.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#171717] hover:text-[#C8A45D] pt-1"
                  >
                    <span>Read More</span>
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
