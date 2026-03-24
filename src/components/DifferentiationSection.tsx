"use client";

import { motion } from "framer-motion";
import { viewportReEnter, easing } from "@/lib/motion";

const differentiators = [
  {
    title: "AI-native",
    desc: "Built on AI capabilities that crossed the threshold in 2023–2024: LLM extraction in low-resource languages, Hansen/GFW satellite API. AI processes what software could not.",
  },
  {
    title: "AI verifies, not just collects",
    desc: "EcoVadis accepts supplier self-reporting. AI verifies every GPS coordinate against satellite data, every certificate against the issuing body's live API.",
  },
  {
    title: "Shared AI data core",
    desc: "One supplier outreach, one AI document collection, one entity resolution. AI-collected data flows to Onboard, Verify, Monitor. 80% data reuse.",
  },
  {
    title: "AI handles real complexity",
    desc: "AI processes handwritten certificates from East Kalimantan, 40+ languages, smallholders with no SAP account. AI processes whatever the supplier sends.",
  },
];

export default function DifferentiationSection() {
  return (
    <section className="py-24 lg:py-32 relative bg-[#0a0d12]/30">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06b6d4]/[0.015] to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0.85, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReEnter}
          transition={{ duration: 0.4, ease: easing.smooth }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Altamark
          </h2>
          <p className="text-lg text-[#8b9cb3] max-w-2xl mx-auto">
            The honest differentiation that wins enterprise deals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {differentiators.map((diff, i) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0.85, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportReEnter}
              transition={{ duration: 0.35, delay: i * 0.06, ease: easing.smooth }}
              className="card-hover p-8 rounded-2xl border border-[rgba(139,156,179,0.1)] bg-[#151a22]/40"
            >
              <h3 className="text-xl font-bold text-white mb-3">{diff.title}</h3>
              <p className="text-[#8b9cb3]">{diff.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
