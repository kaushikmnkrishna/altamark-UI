"use client";

import { motion } from "framer-motion";
import { viewportReEnter, easing } from "@/lib/motion";

export default function OnboardVisual() {
  return (
    <motion.div
      initial={{ opacity: 0.85, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportReEnter}
      transition={{ duration: 0.4, ease: easing.smooth }}
      className="rounded-2xl border border-[rgba(6,182,212,0.2)] bg-[#151a22]/60 overflow-hidden"
    >
      <div className="p-4 border-b border-[rgba(139,156,179,0.08)] bg-[#06b6d4]/5">
        <h4 className="text-sm font-semibold text-white">Onboard flow</h4>
        <p className="text-xs text-[#8b9cb3]">Magic-link · 40+ languages · 22 min avg on mobile</p>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex gap-3">
          <div className="flex-1 p-3 rounded-xl bg-[#0a0d12]/60 border border-[rgba(139,156,179,0.06)]">
            <p className="text-[10px] text-[#8b9cb3] uppercase mb-1">Adaptive form</p>
            <p className="text-xs text-white">Commodity · Geography · Criteria</p>
          </div>
          <div className="flex-1 p-3 rounded-xl bg-[#0a0d12]/60 border border-[rgba(139,156,179,0.06)]">
            <p className="text-[10px] text-[#8b9cb3] uppercase mb-1">Document AI</p>
            <p className="text-xs text-white">Confidence &gt;0.75 auto-accept</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 rounded-full bg-[#06b6d4]/30 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "85%" }}
              viewport={viewportReEnter}
              transition={{ duration: 0.6, ease: easing.smooth }}
              className="h-full rounded-full bg-[#06b6d4]"
            />
          </div>
          <span className="text-xs text-[#06b6d4] font-medium">Qualification</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 rounded-lg bg-[#06b6d4]/10 border border-[#06b6d4]/20 text-center">
            <p className="text-lg font-bold text-[#06b6d4]">48h</p>
            <p className="text-[9px] text-[#8b9cb3]">First qualification</p>
          </div>
          <div className="p-2 rounded-lg bg-[#06b6d4]/10 border border-[#06b6d4]/20 text-center">
            <p className="text-lg font-bold text-[#06b6d4]">2h</p>
            <p className="text-[9px] text-[#8b9cb3]">Passport Network</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
