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
      <nav aria-label="Breadcrumb" className={`flex items-center text-xs text-neutral-500 dark:text-neutral-400 py-3 ${className}`}>
        <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
          {fullBreadcrumbs.map((crumb, idx) => {
            const isLast = idx === fullBreadcrumbs.length - 1;

            return (
              <li key={crumb.url} className="flex items-center gap-1.5 sm:gap-2">
                {idx === 0 ? (
                  <Link
                    href="/"
                    className="flex items-center gap-1 hover:text-[#C8A45D] dark:hover:text-[#DFCA95] transition-colors"
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
                    className="hover:text-[#C8A45D] dark:hover:text-[#DFCA95] transition-colors truncate max-w-[150px] sm:max-w-none"
                  >
                    {crumb.name}
                  </Link>
                )}

                {!isLast && (
                  <ChevronRight className="w-3 h-3 text-neutral-400 dark:text-neutral-600 shrink-0" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
