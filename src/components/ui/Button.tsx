import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "gold" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isExternal?: boolean;
}

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  icon,
  iconPosition = "right",
  isExternal = false,
  className = "",
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs font-semibold uppercase tracking-wider",
    md: "px-6 py-3 text-sm font-semibold uppercase tracking-wider",
    lg: "px-8 py-4 text-sm md:text-base font-semibold uppercase tracking-wider",
  };

  const variantClasses = {
    primary:
      "bg-[#C8A45D] text-[#080808] hover:bg-[#DFCA95] border border-[#C8A45D] hover:border-[#DFCA95] font-bold shadow-md hover:shadow-lg",
    secondary:
      "bg-[#191919] text-white hover:bg-[#202020] border border-[#2B2B2B] hover:border-[#C8A45D] hover:text-[#C8A45D] shadow-xs",
    gold:
      "bg-[#C8A45D] text-[#080808] hover:bg-[#DFCA95] border border-[#C8A45D] hover:border-[#DFCA95] font-bold shadow-md hover:shadow-lg",
    outline:
      "bg-transparent text-white hover:text-[#C8A45D] border border-[#C8A45D] hover:border-[#DFCA95] hover:bg-[#191919]",
    ghost:
      "bg-transparent text-[#B3B3B3] hover:text-[#C8A45D] hover:bg-[#191919] border border-transparent",
  };

  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-xs transition-all duration-300 cursor-pointer select-none text-center";
  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {icon && iconPosition === "left" && icon}
          <span>{children}</span>
          {icon && iconPosition === "right" && icon}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses}>
        {icon && iconPosition === "left" && icon}
        <span>{children}</span>
        {icon && iconPosition === "right" && icon}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === "left" && icon}
      <span>{children}</span>
      {icon && iconPosition === "right" && icon}
    </button>
  );
}
