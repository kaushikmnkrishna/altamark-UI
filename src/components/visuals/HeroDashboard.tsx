"use client";

import { motion } from "framer-motion";
import { duration, easing, ambientFloat } from "@/lib/motion";

const alerts = [
  { supplier: "PT Borneo Palm", risk: "Financial distress", severity: "elevated", badge: "AI detected" },
  { supplier: "Kalimantan Co-op", risk: "Certificate expiry", severity: "watch", badge: "AI flagged" },
];

const complianceCards = [
  { label: "AI verified", value: 247, color: "#10b981" },
  { label: "Under review", value: 12, color: "#f59e0b" },
  { label: "AI generated", value: 8, color: "#06b6d4" },
];

const extractedFields = [
  { label: "GPS", value: "2.31°S, 116.8°E", confidence: "0.94" },
  { label: "Certificate", value: "RSPO-2024-XX", confidence: "0.98" },
  { label: "Operator", value: "PT Borneo Palm", confidence: "0.89" },
];

const nodes = [
  { x: 15, y: 22, id: "B1", status: "verified" },
  { x: 50, y: 18, id: "B2", status: "verified" },
  { x: 28, y: 52, id: "S1", status: "verified" },
  { x: 50, y: 50, id: "S2", status: "review" },
  { x: 78, y: 52, id: "S3", status: "verified" },
  { x: 38, y: 80, id: "F1", status: "verified" },
  { x: 68, y: 78, id: "F2", status: "flagged" },
];

export default function HeroDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: duration.slower, delay: 0.25, ease: easing.smooth }}
      className="relative"
    >
      <motion.div
        animate={ambientFloat.animate}
        transition={ambientFloat.transition}
        className="rounded-2xl border border-[rgba(139,156,179,0.12)] bg-[#151a22]/95 backdrop-blur-xl shadow-2xl overflow-hidden"
        style={{
          boxShadow: "0 0 60px rgba(16, 185, 129, 0.08), 0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[rgba(139,156,179,0.08)] bg-[#0a0d12]/90">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]/80" />
          </div>
          <span className="ml-3 text-xs text-[#8b9cb3] font-medium">Altamark · AI Supplier Intelligence</span>
          <motion.span
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="ml-auto px-2 py-0.5 rounded bg-[#10b981]/20 text-[10px] text-[#10b981] font-medium"
          >
            AI active
          </motion.span>
        </div>

        <div className="p-4 sm:p-5 grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Entity graph + extracted data overlay */}
          <div className="lg:col-span-7 space-y-3">
            <div className="h-36 sm:h-44 rounded-xl bg-[#0a0d12]/70 border border-[rgba(139,156,179,0.06)] relative overflow-hidden">
              <div className="absolute inset-0 opacity-25">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="hero-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(139,156,179,0.12)" strokeWidth="0.3" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#hero-grid)" />
                </svg>
              </div>
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.25" />
                  </linearGradient>
                </defs>
                <line x1="20" y1="25" x2="35" y2="55" stroke="url(#lineGrad)" strokeWidth="0.4" />
                <line x1="55" y1="20" x2="45" y2="50" stroke="url(#lineGrad)" strokeWidth="0.4" />
                <line x1="55" y1="20" x2="75" y2="55" stroke="url(#lineGrad)" strokeWidth="0.4" />
                <line x1="35" y1="55" x2="45" y2="55" stroke="url(#lineGrad)" strokeWidth="0.4" />
                <line x1="45" y1="55" x2="65" y2="55" stroke="url(#lineGrad)" strokeWidth="0.4" />
                <line x1="35" y1="55" x2="40" y2="82" stroke="url(#lineGrad)" strokeWidth="0.4" />
                <line x1="65" y1="55" x2="70" y2="78" stroke="url(#lineGrad)" strokeWidth="0.4" />
              </svg>
              {nodes.map((node, i) => (
                <motion.div
                  key={node.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.04, 1], opacity: [1, 0.9, 1] }}
                  transition={{
                    scale: { duration: 0.4, delay: 0.5 + i * 0.06, ease: easing.smooth },
                    opacity: { duration: 2.5, repeat: Infinity, repeatDelay: 0.3, ease: "easeInOut" },
                  }}
                  className="absolute w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold border-2"
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: "translate(-50%, -50%)",
                    backgroundColor: node.status === "verified" ? "rgba(16,185,129,0.25)" : node.status === "review" ? "rgba(245,158,11,0.25)" : "rgba(239,68,68,0.25)",
                    borderColor: node.status === "verified" ? "#10b981" : node.status === "review" ? "#f59e0b" : "#ef4444",
                    color: node.status === "verified" ? "#10b981" : node.status === "review" ? "#f59e0b" : "#ef4444",
                  }}
                >
                  {node.id}
                </motion.div>
              ))}
              <div className="absolute bottom-2 left-2 px-2 py-1 rounded-lg bg-[#0a0d12]/95 border border-[rgba(139,156,179,0.08)]">
                <span className="text-[10px] text-[#8b9cb3]">Entity Graph · AI-resolved</span>
              </div>
            </div>

            {/* AI extracted data overlay */}
            <div className="rounded-xl bg-[#0a0d12]/80 border border-[rgba(16,185,129,0.15)] p-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[9px] uppercase tracking-wider text-[#10b981] font-semibold">AI extracted</span>
                <span className="text-[9px] text-[#8b9cb3]">· Document → structured</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {extractedFields.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, x: -4 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="px-2 py-1 rounded bg-[#151a22] border border-[rgba(139,156,179,0.08)]"
                  >
                    <span className="text-[9px] text-[#8b9cb3]">{f.label}:</span>
                    <span className="text-[9px] text-white ml-1">{f.value}</span>
                    <span className="text-[8px] text-[#10b981] ml-1">({f.confidence})</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-xl bg-[#0a0d12]/60 border border-[rgba(139,156,179,0.06)] p-3">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] uppercase tracking-wider text-[#8b9cb3]">Risk Alerts</p>
                <span className="text-[8px] text-[#10b981]">AI detected</span>
              </div>
              {alerts.map((a, i) => (
                <motion.div
                  key={a.supplier}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="flex items-center gap-2 py-2 border-b border-[rgba(139,156,179,0.06)] last:border-0"
                >
                  <motion.div
                    animate={{ opacity: [1, 0.6, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    className={`w-1.5 h-1.5 rounded-full ${a.severity === "elevated" ? "bg-[#f59e0b]" : "bg-[#06b6d4]"}`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-white truncate">{a.supplier}</p>
                    <p className="text-[10px] text-[#8b9cb3]">{a.risk}</p>
                  </div>
                  <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#10b981]/15 text-[#10b981]">{a.badge}</span>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2">
              {complianceCards.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.08 }}
                  className="rounded-xl bg-[#0a0d12]/80 border border-[rgba(139,156,179,0.06)] p-3 text-center"
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + i * 0.05 }}
                    className="text-lg font-bold"
                    style={{ color: c.color }}
                  >
                    {c.value}
                  </motion.p>
                  <p className="text-[9px] text-[#8b9cb3] uppercase tracking-wider mt-0.5">{c.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="rounded-xl bg-gradient-to-br from-[#10b981]/10 to-[#06b6d4]/5 border border-[rgba(16,185,129,0.2)] p-3"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] uppercase tracking-wider text-[#10b981] font-semibold">AI reasoning</span>
              </div>
              <p className="text-xs text-[#e8ecf1]">12 suppliers ready for EUDR statement. 3 plots pending geospatial verification.</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
