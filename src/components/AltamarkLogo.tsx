"use client";

import Image from "next/image";

interface AltamarkLogoProps {
  variant?: "full" | "icon";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const LOGO_SRC = "/altamark-logo-full.png";

/** Box sizes (object-contain keeps the asset crisp; horizontal logo may letterbox in tight heights). */
const sizeConfig = {
  full: {
    sm: { width: 108, height: 28 },
    md: { width: 140, height: 36 },
    lg: { width: 176, height: 44 },
  },
  icon: {
    sm: { width: 72, height: 22 },
    md: { width: 96, height: 28 },
    lg: { width: 112, height: 32 },
  },
} as const;

export default function AltamarkLogo({
  variant = "full",
  size = "md",
  className = "",
}: AltamarkLogoProps) {
  const dims = sizeConfig[variant][size];

  return (
    <Image
      src={LOGO_SRC}
      alt="Altamark"
      width={dims.width}
      height={dims.height}
      className={`shrink-0 object-contain object-left ${className}`}
      priority
      sizes={`${dims.width}px`}
    />
  );
}
