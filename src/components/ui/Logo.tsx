import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  priority?: boolean;
}

export default function Logo({
  className = "",
  size = "md",
  priority = false,
}: LogoProps) {
  // Dimensions maintain the exact ~3:1 aspect ratio of the supplied 866x288 logo
  const sizeMap = {
    sm: { width: 140, height: 47, maxH: "max-h-10" },
    md: { width: 180, height: 60, maxH: "max-h-12 md:max-h-14" },
    lg: { width: 220, height: 73, maxH: "max-h-14 md:max-h-16" },
    xl: { width: 260, height: 86, maxH: "max-h-16 md:max-h-20" },
  };

  const { width, height, maxH } = sizeMap[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center shrink-0 transition-opacity hover:opacity-90 ${className}`}
      aria-label="GLOSPRINT — Premium Printing & Creative Branding"
    >
      <Image
        src="/logo/glosprint-logo.png"
        alt="GLOSPRINT — Premium Printing & Creative Branding"
        width={width}
        height={height}
        priority={priority}
        className={`h-auto w-auto object-contain ${maxH} brightness-0 invert transition-all duration-300`}
      />
    </Link>
  );
}
