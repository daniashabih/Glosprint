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
    gold: "bg-[#F8F5EC] text-[#9E7B35] border border-[#C8A45D]/40",
    dark: "bg-[#171717] text-white border border-[#171717]",
    outline: "bg-transparent text-[#171717] border border-[#EAEAEA]",
    subtle: "bg-[#FAF9F6] text-[#525252] border border-[#EAEAEA]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-xs ${variantMap[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
