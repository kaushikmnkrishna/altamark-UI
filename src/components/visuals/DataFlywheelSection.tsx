"use client";

import { motion } from "framer-motion";
import { viewportReEnter, easing } from "@/lib/motion";

const stages = [
  { step: 1, title: "Customer 1 runs Verify", detail: "60 suppliers → entity graph, GPS, certificates" },
  { step: 2, title: "Customer 2 imports same suppliers", detail: "12 of 15 pre-resolved · 2h qualification vs 8 weeks" },
  { step: 3, title: "Passport Network consent", detail: "Verified profile shareable · faster onboarding for suppliers" },
  { step: 4, title: "50K entities in graph", detail: "90%+ auto-resolve · denser = better for everyone" },
];

export default function DataFlywheelSection() {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#10b981]/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0.85, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReEnter}
          transition={{ duration: 0.4, ease: easing.smooth }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            The data flywheel
          </h2>
          <p className="text-lg text-[#8b9cb3] max-w-2xl mx-auto">
            The AI-built entity graph compounds with every customer and supplier. More data → better AI entity resolution → better for everyone.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.9 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportReEnter}
          transition={{ duration: 0.35 }}
          className="relative"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0.85, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportReEnter}
                transition={{ duration: 0.35, delay: i * 0.06, ease: easing.smooth }}
                className="relative"
              >
                <div className="h-full p-6 rounded-2xl border border-[rgba(139,156,179,0.1)] bg-[#151a22]/40 hover:border-[#10b981]/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-[#10b981]/20 flex items-center justify-center text-[#10b981] font-bold mb-4">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-[#8b9cb3]">{s.detail}</p>
                </div>
                {i < stages.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-[#10b981]/40 to-transparent -translate-y-1/2 z-10" />
                )}
              </motion.div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-2xl border border-[#10b981]/20 bg-[#10b981]/5 text-center">
            <p className="text-sm text-[#10b981] font-medium mb-4">Every new customer expands the AI graph. Every new supplier improves AI entity resolution for everyone.</p>
            <div className="flex flex-wrap justify-center gap-6 text-xs">
              <span className="text-[#8b9cb3]">50K entities → 90%+ auto-resolve</span>
              <span className="text-[#8b9cb3]">Passport Network → 2h qualification</span>
              <span className="text-[#8b9cb3]">Denser graph → better for all</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
