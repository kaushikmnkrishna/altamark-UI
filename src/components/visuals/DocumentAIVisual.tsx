"use client";

import { motion } from "framer-motion";
import AIBadge from "@/components/AIBadge";
import { viewportReEnter, easing } from "@/lib/motion";

export default function DocumentAIVisual() {
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
          <h4 className="text-sm font-semibold text-white">Document AI</h4>
          <AIBadge variant="extracted" />
        </div>
        <p className="text-xs text-[#8b9cb3] mt-1">Document → Structured fields</p>
      </div>
      <div className="p-4 space-y-4">
        <div className="flex gap-4">
          <div className="flex-1 p-3 rounded-xl bg-[#0a0d12]/80 border border-[rgba(139,156,179,0.08)]">
            <p className="text-[10px] text-[#8b9cb3] uppercase mb-2">Input</p>
            <div className="space-y-1">
              <div className="h-2 w-full rounded bg-[#1e293b]" />
              <div className="h-2 w-3/4 rounded bg-[#1e293b]" />
              <div className="h-2 w-1/2 rounded bg-[#1e293b]" />
            </div>
            <p className="text-[9px] text-[#8b9cb3] mt-2">PDF · Photo · Handwritten</p>
          </div>
          <div className="flex items-center text-[#10b981]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
          <div className="flex-1 p-3 rounded-xl bg-[#10b981]/5 border border-[rgba(16,185,129,0.2)]">
            <p className="text-[10px] text-[#10b981] uppercase mb-2">AI extracted</p>
            <div className="space-y-1.5">
              <div className="flex justify-between text-[10px]">
                <span className="text-[#8b9cb3]">GPS</span>
                <span className="text-white">2.31°S, 116.8°E</span>
                <span className="text-[#10b981]">0.94</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-[#8b9cb3]">Certificate</span>
                <span className="text-white">RSPO-2024-XX</span>
                <span className="text-[#10b981]">0.98</span>
              </div>
              <div className="flex justify-between text-[10px]">
                <span className="text-[#8b9cb3]">Operator</span>
                <span className="text-white">PT Borneo Palm</span>
                <span className="text-[#10b981]">0.89</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
