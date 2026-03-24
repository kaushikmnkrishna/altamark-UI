"use client";

import Image from "next/image";

interface AltamarkLogoProps {
  variant?: "full" | "icon";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeConfig = {
  full: {
    sm: { width: 100, cropHeight: 26 },
    md: { width: 130, cropHeight: 34 },
    lg: { width: 160, cropHeight: 42 },
  },
  icon: {
    sm: { width: 24, height: 24 },
    md: { width: 32, height: 32 },
    lg: { width: 40, height: 40 },
  },
};

export default function AltamarkLogo({
  variant = "full",
  size = "md",
  className = "",
}: AltamarkLogoProps) {
  if (variant === "icon") {
    const iconDims = sizeConfig.icon[size];
    return (
      <Image
        src="/altamark-logo-icon.png"
        alt="Altamark"
        width={iconDims.width}
        height={iconDims.height}
        className={`shrink-0 object-contain ${className}`}
        priority
        sizes={`${iconDims.width}px`}
      />
    );
  }

  const fullDims = sizeConfig.full[size];
  return (
    <Image
      src="/altamark-logo-horizontal.png"
      alt="Altamark"
      width={fullDims.width}
      height={fullDims.cropHeight}
      className={`shrink-0 object-contain object-left ${className}`}
      priority
      sizes={`${fullDims.width}px`}
    />
  );
}
