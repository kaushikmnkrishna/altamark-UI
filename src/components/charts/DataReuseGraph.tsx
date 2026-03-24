"use client";

import { motion } from "framer-motion";
import { viewportReEnter, easing } from "@/lib/motion";

export default function DataReuseGraph() {
  return (
    <motion.div
      initial={{ opacity: 0.85, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportReEnter}
      transition={{ duration: 0.4, ease: easing.smooth }}
      className="rounded-2xl border border-[rgba(139,156,179,0.1)] bg-[#151a22]/40 p-6 lg:p-8"
    >
      <h4 className="text-sm font-semibold text-white mb-1">80% data reuse</h4>
      <p className="text-xs text-[#8b9cb3] mb-6">Onboard data → Verify activation in 1 week, not 6 months</p>
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <div className="flex-1 w-full">
          <div className="h-24 rounded-xl bg-[#0a0d12] border border-[rgba(139,156,179,0.08)] flex items-center justify-center relative overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80%" }}
              viewport={viewportReEnter}
              transition={{ duration: 1 }}
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#06b6d4]/40 to-[#10b981]/40 rounded-xl"
            />
            <span className="relative text-sm font-medium text-white">Data collected once</span>
          </div>
          <p className="text-center text-xs text-[#8b9cb3] mt-2">Onboard qualification</p>
        </div>
        <div className="text-[#10b981]">→</div>
        <div className="grid grid-cols-3 gap-2 flex-1 w-full">
          {["Onboard", "Verify", "Monitor"].map((m, i) => (
            <motion.div
              key={m}
              initial={{ opacity: 0.85 }}
              whileInView={{ opacity: 1 }}
              viewport={viewportReEnter}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="p-2 rounded-lg bg-[#10b981]/10 border border-[#10b981]/20 text-center"
            >
              <p className="text-xs font-medium text-[#10b981]">{m}</p>
              <p className="text-[9px] text-[#8b9cb3]">reuses</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
