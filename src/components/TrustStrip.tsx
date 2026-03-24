"use client";

import { motion } from "framer-motion";
import { viewportReEnter, easing } from "@/lib/motion";

const metrics = [
  { value: "48 hrs", label: "AI-driven onboarding vs 8 weeks" },
  { value: "15+", label: "AI-monitored signal streams" },
  { value: "40+", label: "AI processes 40+ languages" },
  { value: "1", label: "shared AI data core" },
];

export default function TrustStrip() {
  return (
    <section className="py-14 border-y border-[rgba(139,156,179,0.1)] bg-[#0a0d12]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0.85, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReEnter}
          transition={{ duration: 0.4, ease: easing.smooth }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0.85, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportReEnter}
              transition={{ duration: 0.35, delay: i * 0.05, ease: easing.smooth }}
              className="text-center group"
            >
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1 group-hover:text-[#10b981] transition-colors">
                {metric.value}
              </p>
              <p className="text-sm text-[#8b9cb3]">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
