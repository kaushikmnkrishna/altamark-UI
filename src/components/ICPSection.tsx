"use client";

import { motion } from "framer-motion";
import { viewportReEnter, easing } from "@/lib/motion";

const personas = [
  {
    role: "Procurement",
    title: "CPO / Head of Procurement",
    entry: "Onboard",
    pain: "Nearshoring qualification backlog. 200–400 new suppliers per expansion. 8 weeks manual vs 48 hours with Altamark.",
    metric: "48 hours vs 8 weeks qualification",
  },
  {
    role: "Sustainability",
    title: "CSO / Head of Sustainability",
    entry: "Verify",
    pain: "EUDR Article 9 compliance by December 30, 2026. €500K consulting per commodity vs €120K annual contract.",
    metric: "15 min automated vs 6–8 weeks manual",
  },
  {
    role: "Supply chain operations",
    title: "VP Supply Chain / CPO",
    entry: "Monitor",
    pain: "Board mandate to prevent the disruption they just experienced. Quarterly analyst report vs daily AI briefing.",
    metric: "Daily briefing vs quarterly reports",
  },
];

export default function ICPSection() {
  return (
    <section className="py-24 lg:py-32 relative bg-[#0c0f14]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0.85, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReEnter}
          transition={{ duration: 0.4, ease: easing.smooth }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Built for enterprise supply chain teams
          </h2>
          <p className="text-lg text-[#8b9cb3] max-w-2xl mx-auto">
            Three entry buyers. One company. One shared supplier base. €250M–€5B revenue. EUDR exposure. Active nearshoring.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {personas.map((persona, i) => (
            <motion.div
              key={persona.role}
              initial={{ opacity: 0.85, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportReEnter}
              transition={{ duration: 0.35, delay: i * 0.06, ease: easing.smooth }}
              className="card-hover p-8 rounded-2xl border border-[rgba(139,156,179,0.1)] bg-[#151a22]/40 hover:border-[rgba(16,185,129,0.18)]"
            >
              <span className="text-[#10b981] text-sm font-medium uppercase tracking-wider">{persona.entry} entry</span>
              <h3 className="text-xl font-bold text-white mt-2 mb-1">{persona.role}</h3>
              <p className="text-sm text-[#8b9cb3] mb-4">{persona.title}</p>
              <p className="text-[#8b9cb3] mb-4">{persona.pain}</p>
              <p className="text-sm font-medium text-[#10b981]">{persona.metric}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
