"use client";

import { motion } from "framer-motion";
import { viewportReEnter, easing } from "@/lib/motion";

const failures = [
  {
    approach: "Forms and portals",
    why: "Require suppliers to complete structured digital forms. Smallholders with handwritten certificates and no SAP account cannot comply. Coverage stops where supplier sophistication stops.",
  },
  {
    approach: "Spreadsheets and manual review",
    why: "One FTE per 60 suppliers. GPS coordinates copied by hand. Expiry tracking breaks. Teams react to problems instead of seeing them early.",
  },
  {
    approach: "Point solutions",
    why: "Separate tools for onboarding, compliance, and risk. Same supplier data collected twice. No shared entity resolution. No reuse.",
  },
  {
    approach: "Consulting engagements",
    why: "€500K per commodity. PDF forms. Suppliers copy into spreadsheets. Certificates never verified against the issuing body. Deadlines slip.",
  },
];

export default function WhyExistingFailsSection() {
  return (
    <section id="why-existing-fails" className="py-24 lg:py-32 relative scroll-mt-24 bg-[#0c0f14]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#10b981]/[0.015] to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0.85, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReEnter}
          transition={{ duration: 0.4, ease: easing.smooth }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why existing approaches fail
          </h2>
          <p className="text-lg text-[#8b9cb3] max-w-2xl mx-auto">
            Forms, portals, spreadsheets, and point tools were built for a world of structured data. Supplier data is unstructured, multilingual, and scattered. The gap is structural.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {failures.map((f, i) => (
            <motion.div
              key={f.approach}
              initial={{ opacity: 0.85, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportReEnter}
              transition={{ duration: 0.35, delay: i * 0.06, ease: easing.smooth }}
              className="p-6 rounded-2xl border border-[rgba(139,156,179,0.1)] bg-[#151a22]/40"
            >
              <h3 className="text-base font-semibold text-white mb-2">{f.approach}</h3>
              <p className="text-sm text-[#8b9cb3]">{f.why}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0.85 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportReEnter}
          transition={{ duration: 0.4 }}
          className="mt-12 text-center text-[#8b9cb3] max-w-2xl mx-auto"
        >
          Software designed for structured data cannot manage a world of unstructured information. That is the gap AI closes.
        </motion.p>
      </div>
    </section>
  );
}
