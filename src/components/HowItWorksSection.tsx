"use client";

import { motion } from "framer-motion";
import { viewportReEnter, easing } from "@/lib/motion";
import DataReuseGraph from "@/components/charts/DataReuseGraph";

const steps = [
  {
    title: "Collect",
    desc: "AI ingests supplier documents in any format, 40+ languages. Magic-link intake, no supplier account required.",
  },
  {
    title: "AI extracts",
    desc: "AI extracts structured data — GPS, certificates, entities. AI entity resolution maps to canonical identities.",
  },
  {
    title: "AI verifies",
    desc: "AI cross-checks GPS against satellite data, certificates against APIs, sanctions screening. Full verification chain.",
  },
  {
    title: "AI monitors",
    desc: "AI continuously ingests signals. AI synthesizes into risk score, alerts, daily briefing. Mapped to shared entity graph.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative scroll-mt-24 bg-[#0c0f14]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0.85, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReEnter}
          transition={{ duration: 0.4, ease: easing.smooth }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            How it works — and what improves
          </h2>
          <p className="text-lg text-[#8b9cb3] max-w-2xl mx-auto">
            Collect → Extract → Verify → Monitor. One AI system, continuous flow. Result: faster onboarding, faster compliance output, earlier risk detection, 80% data reuse — less manual work, better visibility.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0.85, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportReEnter}
              transition={{ duration: 0.35, delay: i * 0.06, ease: easing.smooth }}
              className="relative"
            >
              <div className="card-hover p-6 rounded-2xl border border-[rgba(139,156,179,0.1)] bg-[#151a22]/50 h-full">
                <span className="text-4xl font-bold text-[#10b981]/30">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-xl font-bold text-white mt-4 mb-2">{step.title}</h3>
                <p className="text-[#8b9cb3]">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-[rgba(139,156,179,0.2)]" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0.85, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReEnter}
          transition={{ duration: 0.4, ease: easing.smooth }}
          className="mt-16"
        >
          <DataReuseGraph />
        </motion.div>
      </div>
    </section>
  );
}
