"use client";

import { motion } from "framer-motion";
import { viewportReEnter, easing } from "@/lib/motion";

export default function ComplianceTimeChart() {
  return (
    <motion.div
      initial={{ opacity: 0.85, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportReEnter}
      transition={{ duration: 0.4, ease: easing.smooth }}
      className="rounded-2xl border border-[rgba(139,156,179,0.1)] bg-[#151a22]/40 p-6 lg:p-8"
    >
      <h4 className="text-sm font-semibold text-white mb-1">EUDR Article 9 statement</h4>
      <p className="text-xs text-[#8b9cb3] mb-6">Manual consulting vs automated Altamark</p>
      <div className="flex flex-col sm:flex-row gap-6 items-end justify-between">
        <div className="flex-1">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-[#8b9cb3]">Manual: 6–8 weeks</span>
          </div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 120 }}
            viewport={viewportReEnter}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[120px] w-full max-w-[140px] rounded-t-lg bg-gradient-to-t from-[#f59e0b]/30 to-[#f59e0b]/10 border border-[rgba(245,158,11,0.3)]"
          />
        </div>
        <div className="flex-1">
          <div className="flex justify-between text-xs mb-2">
            <span className="text-[#8b9cb3]">Altamark: 15 min</span>
          </div>
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: 12 }}
            viewport={viewportReEnter}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="h-3 w-full max-w-[140px] rounded-lg bg-gradient-to-r from-[#10b981] to-[#06b6d4] mx-auto"
          />
        </div>
      </div>
      <p className="text-xs text-[#10b981] mt-4 font-medium">Automated output · KMS-signed · EU TRACES NT ready</p>
    </motion.div>
  );
}
