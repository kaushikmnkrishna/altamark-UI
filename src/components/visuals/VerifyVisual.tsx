"use client";

import { motion } from "framer-motion";
import AIBadge from "@/components/AIBadge";
import { viewportReEnter, easing } from "@/lib/motion";

const pipeline = [
  { step: 1, label: "Document upload", detail: "PDF · Photo · Handwritten" },
  { step: 2, label: "Extract", detail: "GPS · HS codes · Certificates" },
  { step: 3, label: "Verify", detail: "Satellite · RSPO · Sanctions" },
  { step: 4, label: "Statement", detail: "Article 9 DDS · TRACES NT" },
];

export default function VerifyVisual() {
  return (
    <motion.div
      initial={{ opacity: 0.85, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportReEnter}
      transition={{ duration: 0.4, ease: easing.smooth }}
      className="rounded-2xl border border-[rgba(16,185,129,0.2)] bg-[#151a22]/60 overflow-hidden"
    >
      <div className="p-4 border-b border-[rgba(139,156,179,0.08)] bg-[#10b981]/5 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-white">Verify pipeline</h4>
        <AIBadge variant="verified" />
        <p className="text-xs text-[#8b9cb3]">40+ languages · Per-field confidence · Human review queue</p>
      </div>
      <div className="p-4 space-y-3">
        {pipeline.map((p, i) => (
          <motion.div
            key={p.step}
            initial={{ opacity: 0.85, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportReEnter}
            transition={{ duration: 0.35, delay: i * 0.06, ease: easing.smooth }}
            className="flex items-center gap-4 p-3 rounded-xl bg-[#0a0d12]/60 border border-[rgba(139,156,179,0.06)]"
          >
            <div className="w-8 h-8 rounded-lg bg-[#10b981]/20 flex items-center justify-center text-[#10b981] font-bold text-sm">
              {p.step}
            </div>
            <div>
              <p className="text-sm font-medium text-white">{p.label}</p>
              <p className="text-xs text-[#8b9cb3]">{p.detail}</p>
            </div>
            {i < pipeline.length - 1 && (
              <div className="ml-auto text-[#10b981]/40">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </motion.div>
        ))}
        <div className="flex gap-2 pt-2">
          <span className="px-2 py-1 rounded bg-[#10b981]/20 text-[10px] text-[#10b981]">RSPO</span>
          <span className="px-2 py-1 rounded bg-[#10b981]/20 text-[10px] text-[#10b981]">FSC</span>
          <span className="px-2 py-1 rounded bg-[#10b981]/20 text-[10px] text-[#10b981]">OpenSanctions</span>
        </div>
      </div>
    </motion.div>
  );
}
