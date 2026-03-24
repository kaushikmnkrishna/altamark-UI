"use client";

import { motion } from "framer-motion";
import AIBadge from "@/components/AIBadge";
import { viewportReEnter, easing } from "@/lib/motion";

const signals = ["GDELT", "News", "SEC 8-K", "AIS", "Creditsafe", "+10"];

export default function SignalEngineVisual() {
  return (
    <motion.div
      initial={{ opacity: 0.85, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportReEnter}
      transition={{ duration: 0.4, ease: easing.smooth }}
      className="rounded-2xl border border-[rgba(139,92,246,0.2)] bg-[#151a22]/60 overflow-hidden"
    >
      <div className="p-4 border-b border-[rgba(139,156,179,0.08)]">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-white">Signal intelligence engine</h4>
          <AIBadge variant="generated" />
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex flex-wrap gap-2">
          {signals.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0.85, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportReEnter}
              transition={{ duration: 0.3, delay: i * 0.04, ease: easing.smooth }}
              className="px-2 py-1 rounded bg-[#0a0d12]/80 border border-[rgba(139,156,179,0.1)] text-[10px] text-[#8b9cb3]"
            >
              {s}
            </motion.span>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex-1 h-1 rounded-full bg-gradient-to-r from-[#8b5cf6]/30 via-[#06b6d4]/30 to-[#10b981]/30"
          />
          <span className="text-[10px] text-[#8b9cb3]">AI synthesizes</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["Risk score", "Alerts", "Briefing"].map((o, i) => (
            <motion.div
              key={o}
              initial={{ opacity: 0.85 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportReEnter}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
              className="p-2 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 text-center"
            >
              <p className="text-[9px] text-[#8b5cf6]">{o}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
