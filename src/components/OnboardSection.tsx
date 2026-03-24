"use client";

import { motion } from "framer-motion";
import { viewportReEnter, easing } from "@/lib/motion";
import OnboardVisual from "@/components/visuals/OnboardVisual";
import SpeedComparisonChart from "@/components/charts/SpeedComparisonChart";

const features = [
  {
    title: "AI-adaptive forms",
    desc: "Magic-link invitation — no supplier account required. AI adapts forms by commodity, geography, qualification criteria. 40+ languages. Average completion: 22 minutes on mobile.",
  },
  {
    title: "AI document extraction",
    desc: "AI extracts qualification fields from any uploaded document — registration, bank letters, certifications, audit reports. Per-field confidence. Human review queue for fields below 0.75 confidence.",
  },
  {
    title: "AI-generated scorecard",
    desc: "AI generates qualification scorecard from extraction against buyer-configured weighted criteria. ERP-ready CSV for SAP or Oracle. Approval workflow, full audit log.",
  },
  {
    title: "Passport Network",
    desc: "Once a supplier qualifies for any Altamark buyer, their AI-verified profile is shareable (with consent). Second buyer qualification: 2 hours. No document re-collection.",
  },
];

export default function OnboardSection() {
  return (
    <section id="onboard" className="py-24 lg:py-32 relative scroll-mt-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0.85, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReEnter}
          transition={{ duration: 0.4, ease: easing.smooth }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Onboard: AI supplier qualification
          </h2>
          <p className="text-lg text-[#8b9cb3] max-w-2xl mb-4">
            Manual: 8 weeks. AI-driven: <span className="text-[#06b6d4] font-semibold">48 hours</span> from invitation to qualified status. AI processes documents in any language.
          </p>
          <p className="text-sm text-[#8b9cb3]">
            AI-collected onboarding data flows to Verify. 80% of EUDR documents already in system. Verify activation: 1 week, not 6 months.
          </p>
        </motion.div>

        {/* Onboard visual + Speed chart */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <OnboardVisual />
          <SpeedComparisonChart />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0.85, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportReEnter}
              transition={{ duration: 0.35, delay: i * 0.06, ease: easing.smooth }}
              className="card-hover p-6 rounded-2xl border border-[rgba(139,156,179,0.1)] bg-[#151a22]/40 hover:border-[#06b6d4]/25"
            >
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-[#8b9cb3]">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
