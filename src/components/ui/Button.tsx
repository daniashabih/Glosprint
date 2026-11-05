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
      "bg-[#171717] dark:bg-[#C8A45D] text-white dark:text-[#101114] hover:bg-[#C8A45D] dark:hover:bg-[#DFCA95] hover:text-[#171717] border border-[#171717] dark:border-[#C8A45D] hover:border-[#C8A45D] dark:hover:border-[#DFCA95] shadow-xs",
    secondary:
      "bg-white dark:bg-[#1C1F26] text-[#171717] dark:text-white hover:bg-[#FAF9F6] dark:hover:bg-[#232732] border border-[#EAEAEA] dark:border-[#30333B] hover:border-[#C8A45D] dark:hover:border-[#DFCA95] shadow-xs",
    gold:
      "bg-[#C8A45D] text-[#171717] hover:bg-[#A6833D] hover:text-white border border-[#C8A45D] font-bold shadow-md hover:shadow-lg",
    outline:
      "bg-transparent text-[#171717] dark:text-neutral-200 hover:text-[#C8A45D] dark:hover:text-[#DFCA95] border border-[#C8A45D] hover:border-[#DFCA95] hover:bg-[#FAF9F6] dark:hover:bg-[#181A20]",
    ghost:
      "bg-transparent text-[#171717] dark:text-neutral-200 hover:text-[#C8A45D] dark:hover:text-[#DFCA95] hover:bg-neutral-50 dark:hover:bg-[#181A20] border border-transparent",
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
