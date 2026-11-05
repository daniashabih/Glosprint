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
    gold: "bg-[#C8A45D]/15 text-[#DFCA95] border border-[#C8A45D]/50",
    dark: "bg-[#202020] text-white border border-[#2B2B2B]",
    outline: "bg-transparent text-[#B3B3B3] border border-[#2B2B2B]",
    subtle: "bg-[#191919] text-[#B3B3B3] border border-[#2B2B2B]",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-xs ${variantMap[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
