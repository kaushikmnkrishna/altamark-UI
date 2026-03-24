"use client";

import { motion } from "framer-motion";
import { viewportReEnter, easing } from "@/lib/motion";

const signals = [
  "GDELT", "NewsAPI", "SEC 8-K", "MarineTraffic", "ACLED",
  "OpenSanctions", "Creditsafe", "OpenWeather", "RSPO",
];

export default function SignalIntelligenceVisual() {
  return (
    <motion.div
      initial={{ opacity: 0.85, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportReEnter}
      transition={{ duration: 0.4, ease: easing.smooth }}
      className="rounded-2xl border border-[rgba(139,156,179,0.1)] bg-[#151a22]/40 p-6 lg:p-8"
    >
      <h4 className="text-sm font-semibold text-white mb-1">15+ signal streams</h4>
      <p className="text-xs text-[#8b9cb3] mb-6">Mapped to shared entity graph → one risk engine</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {signals.map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0.85, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportReEnter}
            transition={{ duration: 0.3, delay: i * 0.03, ease: easing.smooth }}
            className="px-3 py-1.5 rounded-lg bg-[#0a0d12]/80 border border-[rgba(139,156,179,0.1)] text-xs text-[#8b9cb3]"
          >
            {s}
          </motion.span>
        ))}
        <span className="px-3 py-1.5 rounded-lg bg-[#8b5cf6]/20 border border-[#8b5cf6]/30 text-xs text-[#a78bfa]">
          +6 more
        </span>
      </div>
      <div className="flex items-center gap-3">
        <motion.div
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex-1 h-1 rounded-full bg-gradient-to-r from-[#8b5cf6]/30 via-[#06b6d4]/30 to-[#10b981]/30"
        />
        <span className="text-xs text-[#8b9cb3]">→</span>
        <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#8b5cf6]/20 to-[#10b981]/10 border border-[rgba(139,92,246,0.3)]">
          <p className="text-xs font-semibold text-white">Daily AI Briefing</p>
          <p className="text-[10px] text-[#8b9cb3]">05:00 UTC · 07:00 CET</p>
        </div>
      </div>
    </motion.div>
  );
}
