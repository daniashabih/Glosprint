import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { createBreadcrumbSchema } from "@/lib/structured-data";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const fullBreadcrumbs = [{ name: "Home", url: "/" }, ...items];
  const schema = createBreadcrumbSchema(fullBreadcrumbs);

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className={`flex items-center text-xs text-[#666666] dark:text-[#A1A1AA] py-3 transition-colors duration-300 ${className}`}>
        <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
          {fullBreadcrumbs.map((crumb, idx) => {
            const isLast = idx === fullBreadcrumbs.length - 1;

            return (
              <li key={crumb.url} className="flex items-center gap-1.5 sm:gap-2">
                {idx === 0 ? (
                  <Link
                    href="/"
                    className="flex items-center gap-1 text-[#666666] dark:text-[#A1A1AA] hover:text-[#C8A45D] transition-colors"
                    title="GLOSPRINT Home"
                  >
                    <Home className="w-3.5 h-3.5" />
                    <span className="sr-only">Home</span>
                  </Link>
                ) : isLast ? (
                  <span className="text-[#171717] dark:text-white font-medium truncate max-w-[200px] sm:max-w-none" aria-current="page">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.url}
                    className="text-[#666666] dark:text-[#A1A1AA] hover:text-[#C8A45D] transition-colors truncate max-w-[150px] sm:max-w-none"
                  >
                    {crumb.name}
                  </Link>
                )}

                {!isLast && (
                  <ChevronRight className="w-3 h-3 text-[#888888] dark:text-[#71717A] shrink-0" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
