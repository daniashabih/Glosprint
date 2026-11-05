import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "dark" | "outline" | "subtle";
  className?: string;
}

export default function Badge({
  children,
  variant = "gold",
  className = "",
}: BadgeProps) {
  const variantMap = {
    gold: "bg-[#F8F5EC] dark:bg-[#C8A45D]/15 text-[#9E7B35] dark:text-[#DFCA95] border border-[#C8A45D]/40 dark:border-[#C8A45D]/50",
    dark: "bg-[#171717] dark:bg-[#232732] text-white border border-[#171717] dark:border-[#30333B]",
    outline: "bg-transparent text-[#171717] dark:text-neutral-200 border border-[#EAEAEA] dark:border-[#30333B]",
    subtle: "bg-[#FAF9F6] dark:bg-[#181A20] text-[#525252] dark:text-neutral-300 border border-[#EAEAEA] dark:border-[#30333B]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-xs ${variantMap[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
