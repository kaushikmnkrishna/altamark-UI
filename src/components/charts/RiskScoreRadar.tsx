"use client";

import { motion } from "framer-motion";
import { viewportReEnter, easing } from "@/lib/motion";

const dimensions = [
  { name: "Financial", value: 0.25, weight: "25%" },
  { name: "Geopolitical", value: 0.20, weight: "20%" },
  { name: "Operational", value: 0.20, weight: "20%" },
  { name: "Environmental", value: 0.15, weight: "15%" },
  { name: "Compliance", value: 0.10, weight: "10%" },
  { name: "Supply continuity", value: 0.10, weight: "10%" },
];

export default function RiskScoreRadar() {
  return (
    <motion.div
      initial={{ opacity: 0.85, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportReEnter}
      transition={{ duration: 0.4, ease: easing.smooth }}
      className="rounded-2xl border border-[rgba(139,156,179,0.1)] bg-[#151a22]/40 p-6 lg:p-8"
    >
      <h4 className="text-sm font-semibold text-white mb-1">6-dimension risk model</h4>
      <p className="text-xs text-[#8b9cb3] mb-6">YAML-configurable weights per buyer</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {dimensions.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0.85, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportReEnter}
            transition={{ delay: i * 0.05 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-[#0a0d12]/60 border border-[rgba(139,156,179,0.08)]"
          >
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-white truncate">{d.name}</p>
              <p className="text-[10px] text-[#8b9cb3]">{d.weight}</p>
            </div>
            <div className="w-12 h-2 rounded-full bg-[#151a22] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${d.value * 100}%` }}
                viewport={viewportReEnter}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.05 }}
                className="h-full rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4]"
              />
            </div>
          </motion.div>
        ))}
      </div>
      <p className="text-xs text-[#8b5cf6] mt-4">Score delta &gt;10 in 24h triggers alert</p>
    </motion.div>
  );
}
