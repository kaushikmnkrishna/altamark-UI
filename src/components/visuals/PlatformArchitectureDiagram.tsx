"use client";

import { motion } from "framer-motion";
import { duration, easing, viewportReEnter } from "@/lib/motion";

const coreComponents = [
  "Supplier entity graph",
  "Document AI pipeline",
  "Altamark verification",
  "Signal intelligence",
];

const surfaces = [
  { name: "Verify", color: "#10b981", desc: "EUDR · Compliance" },
  { name: "Onboard", color: "#06b6d4", desc: "Qualification" },
  { name: "Monitor", color: "#8b5cf6", desc: "Risk intelligence" },
];

export default function PlatformArchitectureDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0.85, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportReEnter}
      transition={{ duration: 0.4, ease: easing.smooth }}
      className="relative mb-16"
    >
      <div className="relative p-8 lg:p-12 rounded-3xl border border-[rgba(139,156,179,0.1)] bg-gradient-to-b from-[#151a22]/60 to-[#0a0d12]/80 overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="arch-grid" width="5" height="5" patternUnits="userSpaceOnUse">
                <path d="M 5 0 L 0 0 0 5" fill="none" stroke="white" strokeWidth="0.2" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#arch-grid)" />
          </svg>
        </div>

        <div className="flex justify-center gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0.85, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportReEnter}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-2"
          >
            <div className="w-16 h-0.5 rounded-full bg-gradient-to-r from-transparent to-[#10b981]/40" />
            <span className="text-xs text-[#8b9cb3]">Data enters once</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0.85, x: 6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportReEnter}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-2"
          >
            <span className="text-xs text-[#8b9cb3]">Flows to all</span>
            <div className="w-16 h-0.5 rounded-full bg-gradient-to-l from-transparent to-[#10b981]/40" />
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-4 lg:gap-8 mb-8">
          {surfaces.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0.85, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportReEnter}
              transition={{ duration: 0.35, delay: i * 0.06, ease: easing.smooth }}
              whileHover={{ y: -2 }}
              className="relative"
            >
              <div
                className="rounded-2xl border-2 p-6 text-center transition-all duration-300 cursor-default"
                style={{
                  borderColor: `${s.color}40`,
                  backgroundColor: `${s.color}06`,
                }}
              >
                <motion.div
                  className="w-14 h-14 rounded-xl mx-auto mb-3 flex items-center justify-center font-bold text-lg"
                  style={{ backgroundColor: `${s.color}20`, color: s.color }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  {s.name[0]}
                </motion.div>
                <h3 className="font-bold text-white text-lg">{s.name}</h3>
                <p className="text-xs text-[#8b9cb3] mt-1">{s.desc}</p>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-px h-8 bg-gradient-to-b from-[rgba(139,156,179,0.2)] to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-16 mb-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={viewportReEnter}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="w-px h-6 origin-top bg-gradient-to-b from-[rgba(139,156,179,0.2)] to-[rgba(16,185,129,0.25)]"
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0.9, scale: 0.99 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportReEnter}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative rounded-2xl border border-[rgba(16,185,129,0.25)] p-8 lg:p-10 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(16,185,129,0.04) 0%, rgba(6,182,212,0.02) 100%)",
          }}
        >
          <motion.div
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#10b981]/15 to-transparent opacity-60"
          />
          <div className="relative text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[#10b981] font-semibold mb-4">Shared AI Data Core</p>
            <p className="text-sm text-[#8b9cb3] mb-6">Every piece of supplier data enters exactly once</p>
            <div className="flex flex-wrap justify-center gap-3 lg:gap-6">
              {coreComponents.map((c, i) => (
                <motion.span
                  key={c}
                  initial={{ opacity: 0.85 }}
                  whileInView={{ opacity: 1 }}
                  viewport={viewportReEnter}
                  transition={{ delay: 0.35 + i * 0.05 }}
                  className="px-4 py-2 rounded-xl bg-[#0a0d12]/70 border border-[rgba(139,156,179,0.08)] text-sm text-[#e8ecf1]"
                >
                  {c}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0.85 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportReEnter}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-[#8b9cb3] mt-6"
        >
          Entity resolution · Document extraction · Satellite verification · Continuous signals — all shared
        </motion.p>
      </div>
    </motion.div>
  );
}
