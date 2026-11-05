import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Clock, Package } from "lucide-react";
import { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  priority?: boolean;
}

export default function ServiceCard({ service, priority = false }: ServiceCardProps) {
  return (
    <div className="group flex flex-col bg-[#191919] border border-[#2B2B2B] rounded-xs overflow-hidden transition-all duration-300 hover:bg-[#202020] hover:border-[#C8A45D] hover:shadow-2xl hover:shadow-black/60">
      {/* Service Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#101010]">
        <Image
          src={service.heroImage}
          alt={`${service.name} Dubai — GLOSPRINT`}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

        <div className="absolute top-4 left-4">
          <span className="inline-block px-2.5 py-1 bg-[#080808]/90 backdrop-blur-xs text-[11px] font-semibold uppercase tracking-wider text-white rounded-xs border border-[#2B2B2B]">
            {service.category}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <h3 className="text-xl font-medium text-white group-hover:text-[#C8A45D] transition-colors font-serif leading-snug">
            <Link href={`/services/${service.slug}`} className="focus:outline-hidden">
              {service.name}
            </Link>
          </h3>
          <p className="text-sm text-[#B3B3B3] line-clamp-2 leading-relaxed font-light">
            {service.shortDescription}
          </p>
        </div>

        {/* Specs and Embellishments */}
        <div className="pt-3 border-t border-[#2B2B2B] space-y-2.5">
          <div className="flex items-center justify-between text-xs text-[#858585]">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span>{service.turnaround}</span>
            </span>
            <span className="flex items-center gap-1">
              <Package className="w-3.5 h-3.5 text-[#C8A45D]" />
              <span>Min: {service.minOrder}</span>
            </span>
          </div>

          <div className="pt-1">
            <p className="text-[11px] uppercase tracking-wider font-semibold text-[#858585] mb-1.5 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#C8A45D]" />
              <span>Key Finishes</span>
            </p>
            <div className="flex flex-wrap gap-1.5">
              {service.finishes.slice(0, 3).map((finish) => (
                <span
                  key={finish}
                  className="text-[11px] px-2 py-0.5 bg-[#141414] text-[#B3B3B3] border border-[#2B2B2B] rounded-xs"
                >
                  {finish}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-4 border-t border-[#2B2B2B] flex items-center justify-between">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-white group-hover:text-[#C8A45D] transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href={`/request-a-quote?service=${encodeURIComponent(service.name)}`}
            className="text-xs text-[#C8A45D] hover:text-[#DFCA95] hover:underline font-medium"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
