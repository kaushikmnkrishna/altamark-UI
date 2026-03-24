"use client";

import { motion } from "framer-motion";
import { viewportReEnter, easing } from "@/lib/motion";

export default function SpeedComparisonChart() {
  const manualWeeks = 8;
  const altamarkHours = 48 / (24 * 7); // 48 hours in weeks

  return (
    <motion.div
      initial={{ opacity: 0.85, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportReEnter}
      transition={{ duration: 0.4, ease: easing.smooth }}
      className="card-hover rounded-2xl border border-[rgba(139,156,179,0.1)] bg-[#151a22]/50 p-6 lg:p-8"
    >
      <h4 className="text-sm font-semibold text-white mb-1">Qualification time</h4>
      <p className="text-xs text-[#8b9cb3] mb-6">Manual vs Altamark — same outcome</p>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs mb-2">
            <span className="text-[#8b9cb3]">Manual process</span>
            <span className="text-[#f59e0b] font-medium">8 weeks</span>
          </div>
          <div className="h-8 rounded-lg overflow-hidden bg-[#0a0d12]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={viewportReEnter}
              transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="h-full rounded-lg bg-gradient-to-r from-[#f59e0b]/60 to-[#ef4444]/40"
              style={{ width: "100%" }}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs mb-2">
            <span className="text-[#8b9cb3]">Altamark</span>
            <span className="text-[#10b981] font-medium">48 hours</span>
          </div>
          <div className="h-8 rounded-lg overflow-hidden bg-[#0a0d12]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(altamarkHours / manualWeeks) * 100}%` }}
              viewport={viewportReEnter}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="h-full rounded-lg bg-gradient-to-r from-[#10b981] to-[#06b6d4]"
              style={{ width: `${Math.max(8, (altamarkHours / manualWeeks) * 100)}%` }}
            />
          </div>
        </div>
      </div>
      <p className="text-xs text-[#10b981] mt-4 font-medium">99× faster · Verifiable in a live demo</p>
    </motion.div>
  );
}
