import React from "react";

interface SectionHeadingProps {
  overline?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleTag?: "h1" | "h2" | "h3";
  light?: boolean;
}

export default function SectionHeading({
  overline,
  title,
  description,
  align = "center",
  className = "",
  titleTag: TitleTag = "h2",
  light = false,
}: SectionHeadingProps) {
  const alignmentClass =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col max-w-3xl ${alignmentClass} ${className} mb-12 md:mb-16`}>
      {overline && (
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-px bg-[#C8A45D]" />
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C8A45D]">
            {overline}
          </span>
          <span className="w-6 h-px bg-[#C8A45D]" />
        </div>
      )}

      <TitleTag
        className={`text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-tight font-serif ${
          light ? "text-white" : "text-[#171717] dark:text-white"
        }`}
      >
        {title}
      </TitleTag>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed max-w-2xl font-light ${
            light ? "text-neutral-300" : "text-neutral-600 dark:text-neutral-300"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
