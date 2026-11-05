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
    sm: { width: 140, height: 47 },
    md: { width: 180, height: 60 },
    lg: { width: 220, height: 73 },
    xl: { width: 260, height: 86 },
  };

  const { width, height } = sizeMap[size];

  return (
    <Link
      href="/"
      className={`inline-flex items-center shrink-0 transition-opacity hover:opacity-90 ${className}`}
      aria-label="GLOSPRINT Home - Where Print Meets Glamour"
    >
      <Image
        src="/logo/glosprint-logo.png"
        alt="GLOSPRINT — Where Print Meets Glamour — Dubai"
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-auto object-contain max-h-12 md:max-h-14"
      />
    </Link>
  );
}
