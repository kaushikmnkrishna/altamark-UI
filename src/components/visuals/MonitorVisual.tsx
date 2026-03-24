"use client";

import { motion } from "framer-motion";
import AIBadge from "@/components/AIBadge";
import { viewportReEnter, easing } from "@/lib/motion";

const alerts = [
  { supplier: "PT Borneo Palm", type: "Financial distress", severity: "critical", delta: "+14" },
  { supplier: "Kalimantan Co-op", type: "Certificate expiry", severity: "elevated", delta: "+8" },
];

export default function MonitorVisual() {
  return (
    <motion.div
      initial={{ opacity: 0.85, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportReEnter}
      transition={{ duration: 0.4, ease: easing.smooth }}
      className="rounded-2xl border border-[rgba(139,92,246,0.2)] bg-[#151a22]/60 overflow-hidden"
    >
      <div className="p-4 border-b border-[rgba(139,156,179,0.08)] bg-[#8b5cf6]/5">
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-sm font-semibold text-white">Monitor</h4>
          <AIBadge variant="generated" />
        </div>
        <p className="text-xs text-[#8b9cb3]">15+ streams · 6-dimension score · Daily briefing 07:00 CET</p>
      </div>
      <div className="p-4 space-y-3">
        <div className="rounded-xl bg-[#0a0d12]/80 border border-[rgba(139,156,179,0.06)] p-3">
          <p className="text-[10px] text-[#8b5cf6] uppercase mb-2">AI-generated briefing</p>
          <p className="text-xs text-[#e8ecf1]">3 suppliers with elevated risk. PT Borneo Palm: Creditsafe distress signal + SEC 8-K filing. Recommended: review before next shipment.</p>
        </div>
        <div className="space-y-2">
          {alerts.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.9 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportReEnter}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-between p-2 rounded-lg bg-[#0a0d12]/60 border border-[rgba(139,156,179,0.06)]"
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  className={`w-2 h-2 rounded-full ${a.severity === "critical" ? "bg-[#ef4444]" : "bg-[#f59e0b]"}`}
                />
                <div>
                  <p className="text-xs font-medium text-white">{a.supplier}</p>
                  <p className="text-[10px] text-[#8b9cb3]">{a.type}</p>
                </div>
              </div>
              <span className={`text-xs font-bold ${a.severity === "critical" ? "text-[#ef4444]" : "text-[#f59e0b]"}`}>{a.delta}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
