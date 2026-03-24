"use client";

import { motion } from "framer-motion";
import { viewportReEnter, easing } from "@/lib/motion";

export default function GeospatialCard() {
  return (
    <motion.div
      initial={{ opacity: 0.85, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportReEnter}
      transition={{ duration: 0.4, ease: easing.smooth }}
      className="rounded-2xl border border-[rgba(139,156,179,0.1)] bg-[#151a22]/60 overflow-hidden"
    >
      <div className="p-4 border-b border-[rgba(139,156,179,0.08)]">
        <div className="flex items-center justify-between mb-1">
          <h4 className="text-sm font-semibold text-white">Geospatial verification</h4>
          <span className="text-[9px] px-2 py-0.5 rounded bg-[#10b981]/15 text-[#10b981] font-medium border border-[#10b981]/30">AI verified</span>
        </div>
        <p className="text-xs text-[#8b9cb3]">Hansen/GFW · Dec 31 2020 baseline · 30m resolution</p>
      </div>
      <div className="p-4">
        {/* Abstract map grid */}
        <div className="relative h-40 rounded-xl bg-[#0a0d12] border border-[rgba(139,156,179,0.08)] overflow-hidden">
          <svg className="absolute inset-0 w-full h-full opacity-40" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="mapGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(139,156,179,0.2)" strokeWidth="0.2" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#mapGrid)" />
          </svg>
          {/* Plot points */}
          {[
            { x: 25, y: 35, status: "compliant" },
            { x: 50, y: 45, status: "review" },
            { x: 35, y: 60, status: "compliant" },
            { x: 70, y: 55, status: "flagged" },
            { x: 45, y: 75, status: "compliant" },
          ].map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.85, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportReEnter}
              transition={{ duration: 0.35, delay: i * 0.06, ease: easing.smooth }}
              className="absolute w-4 h-4 rounded-full border-2 flex items-center justify-center"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                transform: "translate(-50%, -50%)",
                backgroundColor: p.status === "compliant" ? "rgba(16,185,129,0.3)" : p.status === "review" ? "rgba(245,158,11,0.3)" : "rgba(239,68,68,0.3)",
                borderColor: p.status === "compliant" ? "#10b981" : p.status === "review" ? "#f59e0b" : "#ef4444",
              }}
            >
              <span className="text-[8px] font-bold text-white drop-shadow">
                {p.status === "compliant" ? "✓" : p.status === "review" ? "?" : "!"}
              </span>
            </motion.div>
          ))}
        </div>
        {/* Legend */}
        <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-[rgba(139,156,179,0.08)]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
            <span className="text-xs text-[#8b9cb3]">Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
            <span className="text-xs text-[#8b9cb3]">Under review</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
            <span className="text-xs text-[#8b9cb3]">Flagged</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
