"use client";

import { motion } from "framer-motion";
import { viewportReEnter, easing } from "@/lib/motion";

type BadgeVariant = "extracted" | "verified" | "generated" | "detected" | "flagged";

const variants: Record<BadgeVariant, { label: string; className: string }> = {
  extracted: { label: "AI extracted", className: "bg-[#10b981]/15 text-[#10b981] border-[#10b981]/30" },
  verified: { label: "AI verified", className: "bg-[#10b981]/15 text-[#10b981] border-[#10b981]/30" },
  generated: { label: "AI generated", className: "bg-[#06b6d4]/15 text-[#06b6d4] border-[#06b6d4]/30" },
  detected: { label: "AI detected", className: "bg-[#f59e0b]/15 text-[#f59e0b] border-[#f59e0b]/30" },
  flagged: { label: "AI flagged", className: "bg-[#8b5cf6]/15 text-[#8b5cf6] border-[#8b5cf6]/30" },
};

interface AIBadgeProps {
  variant: BadgeVariant;
  className?: string;
}

export default function AIBadge({ variant, className = "" }: AIBadgeProps) {
  const { label, className: variantClass } = variants[variant];
  return (
    <motion.span
      initial={{ opacity: 0.85, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewportReEnter}
      transition={{ duration: 0.3, ease: easing.smooth }}
      className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-medium border ${variantClass} ${className}`}
    >
      {label}
    </motion.span>
  );
}
