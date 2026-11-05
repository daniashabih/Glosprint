"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface ThemeToggleProps {
  variant?: "desktop" | "mobile" | "icon";
  className?: string;
}

export default function ThemeToggle({
  variant = "desktop",
  className = "",
}: ThemeToggleProps) {
  const { theme, toggleTheme, isMounted } = useTheme();
  const isDark = isMounted ? theme === "dark" : false;

  const ariaLabel = isDark
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";

  if (variant === "mobile") {
    return (
      <div
        className={`flex items-center justify-between p-3 rounded-xs border transition-colors ${
          isDark
            ? "bg-[#181A20] border-[#30333B] text-white"
            : "bg-[#FAF9F6] border-[#EAEAEA] text-[#171717]"
        } ${className}`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-8 h-8 rounded-xs flex items-center justify-center transition-colors ${
              isDark
                ? "bg-[#1C1F26] text-[#C8A45D]"
                : "bg-white text-[#C8A45D] shadow-xs"
            }`}
          >
            {isDark ? (
              <Moon className="w-4 h-4 transition-transform duration-300 rotate-0" />
            ) : (
              <Sun className="w-4 h-4 transition-transform duration-300 rotate-0" />
            )}
          </div>
          <div>
            <span className="block text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Appearance
            </span>
            <span className="text-sm font-medium">
              {isDark ? "Dark Theme" : "Light Theme"}
            </span>
          </div>
        </div>

        {/* Toggle switch button */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={ariaLabel}
          aria-pressed={isDark}
          className={`relative inline-flex h-7 w-13 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden focus:ring-2 focus:ring-[#C8A45D] ${
            isDark ? "bg-[#C8A45D]" : "bg-neutral-300"
          }`}
        >
          <span className="sr-only">{ariaLabel}</span>
          <span
            className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out flex items-center justify-center ${
              isDark ? "translate-x-6 bg-[#101114]" : "translate-x-0 bg-white"
            }`}
          >
            {isDark ? (
              <Moon className="w-3.5 h-3.5 text-[#C8A45D]" />
            ) : (
              <Sun className="w-3.5 h-3.5 text-[#C8A45D]" />
            )}
          </span>
        </button>
      </div>
    );
  }

  // Desktop Luxury Toggle
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={ariaLabel}
      aria-pressed={isDark}
      title={ariaLabel}
      className={`group relative flex items-center gap-1.5 p-1.5 px-2.5 rounded-full border transition-all duration-300 focus:outline-hidden focus:ring-1 focus:ring-[#C8A45D] cursor-pointer ${
        isDark
          ? "bg-[#181A20] hover:bg-[#1C1F26] border-[#30333B] text-neutral-200 hover:border-[#C8A45D]"
          : "bg-[#FAF9F6] hover:bg-white border-[#EAEAEA] text-neutral-700 hover:border-[#C8A45D] shadow-xs"
      } ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {/* Sun Icon (Visible in light mode) */}
        <Sun
          className={`w-4 h-4 text-[#C8A45D] transition-all duration-300 transform ${
            isDark
              ? "-rotate-90 scale-0 opacity-0 absolute"
              : "rotate-0 scale-100 opacity-100"
          }`}
        />
        {/* Moon Icon (Visible in dark mode) */}
        <Moon
          className={`w-4 h-4 text-[#DFCA95] transition-all duration-300 transform ${
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0 absolute"
          }`}
        />
      </div>

      <span className="hidden sm:inline-block text-[11px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 group-hover:text-[#C8A45D] dark:group-hover:text-[#DFCA95] transition-colors select-none">
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}
