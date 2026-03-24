"use client";

import { motion } from "framer-motion";
import AIBadge from "@/components/AIBadge";
import { viewportReEnter, easing } from "@/lib/motion";

const checks = [
  { label: "Geospatial", status: "verified", icon: "⊕" },
  { label: "Sanctions", status: "verified", icon: "✓" },
  { label: "Compliance", status: "ready", icon: "◉" },
];

export default function VerificationFlowVisual() {
  return (
    <motion.div
      initial={{ opacity: 0.85, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportReEnter}
      transition={{ duration: 0.4, ease: easing.smooth }}
      className="rounded-2xl border border-[rgba(16,185,129,0.2)] bg-[#151a22]/60 overflow-hidden"
    >
      <div className="p-4 border-b border-[rgba(139,156,179,0.08)]">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-white">Verification flow</h4>
          <AIBadge variant="verified" />
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <span className="text-[10px] text-[#8b9cb3]">Input</span>
          <div className="w-px h-4 bg-[#10b981]/40" />
          {checks.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0.85, x: -4 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportReEnter}
              transition={{ duration: 0.3, delay: i * 0.05, ease: easing.smooth }}
              className="flex items-center gap-2"
            >
              <div className="px-3 py-1.5 rounded-lg bg-[#10b981]/10 border border-[#10b981]/30">
                <span className="text-[10px] text-[#10b981] font-medium">{c.label}</span>
                <span className="text-[9px] text-[#10b981] ml-1">✓</span>
              </div>
              {i < checks.length - 1 && (
                <svg className="w-3 h-3 text-[#10b981]/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </motion.div>
          ))}
          <div className="w-px h-4 bg-[#10b981]/40" />
          <div className="px-3 py-1.5 rounded-lg bg-[#10b981]/20 border border-[#10b981]/40">
            <span className="text-[10px] text-[#10b981] font-medium">Output</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
