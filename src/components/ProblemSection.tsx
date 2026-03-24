"use client";

import { motion } from "framer-motion";
import { viewportReEnter, easing } from "@/lib/motion";

const problems = [
  {
    title: "Supplier qualification",
    state: "8 weeks elapsed. 40% of documents rejected on format. GPS coordinates copied by hand. One FTE per 60 new suppliers.",
    cost: "Vietnam expansion: 200–400 new suppliers at 8 weeks each = 3–6 years of backlog. Production plans wait. Competitive advantage lost.",
  },
  {
    title: "EUDR compliance",
    state: "€500K consulting per commodity. PDF forms. Suppliers copy coordinates into spreadsheets. Most certificates never verified against the issuing body.",
    cost: "4% of EU turnover fine. For €1B food company: €40M exposure. Most large importers in active non-compliance with no scalable solution.",
  },
  {
    title: "Certificate management",
    state: "Spreadsheet of numbers. Manual expiry tracking. Annual re-collection via email. Certificates never verified against issuing body.",
    cost: "RSPO, FSC, Rainforest Alliance can be fraudulent or expired. Companies discover this during customs audits — after the violation.",
  },
  {
    title: "Supply chain risk monitoring",
    state: "Quarterly analyst report. Tier-2 invisible. Disruptions discovered via missed delivery. 3–6 week detection lag.",
    cost: "Single tier-2 failure: $1–5M per day. 94% of disruptions were predictable from public signals no one was reading.",
  },
  {
    title: "Sub-tier visibility",
    state: "Tier-1 suppliers refuse to disclose. Problem unsolved industry-wide for 20 years.",
    cost: "Tier-2/3 exposure caused semiconductor crisis, baby formula shortage — invisible until too late.",
  },
];

const dataSources = [
  "Emails", "PDFs", "Spreadsheets", "Portals", "Questionnaires", "Scans",
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 lg:py-32 relative scroll-mt-24 bg-[#0a0d12]/30">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ef4444]/[0.02] to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0.85, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReEnter}
          transition={{ duration: 0.4, ease: easing.smooth }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Five broken workflows. One shared root cause.
          </h2>
          <p className="text-lg text-[#8b9cb3] max-w-3xl mx-auto">
            Supplier data is scattered across emails, PDFs, spreadsheets, and portals. Teams collect it repeatedly. Nothing connects. No infrastructure has ever understood it and acted on it continuously.
          </p>
        </motion.div>

        {/* Fragmented data visual */}
        <motion.div
          initial={{ opacity: 0.85, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReEnter}
          transition={{ duration: 0.4, ease: easing.smooth }}
          className="mb-20"
        >
          <div className="rounded-2xl border border-[rgba(239,68,68,0.15)] bg-[#151a22]/60 p-6 lg:p-8 overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="chaos-grid" width="8" height="8" patternUnits="userSpaceOnUse">
                    <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#ef4444" strokeWidth="0.2" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#chaos-grid)" />
              </svg>
            </div>
            <div className="relative">
              <p className="text-xs uppercase tracking-wider text-[#8b9cb3] font-medium mb-4">Data today — fragmented and unconnected</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {dataSources.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0.6 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewportReEnter}
                    transition={{ delay: i * 0.04 }}
                    className="px-4 py-2 rounded-lg bg-[#0a0d12]/80 border border-[rgba(139,156,179,0.12)] text-sm text-[#8b9cb3]"
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 mt-6">
                <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-[rgba(139,156,179,0.2)]" />
                <span className="text-xs text-[#5a6a7f]">No shared system</span>
                <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-[rgba(139,156,179,0.2)]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Siloed teams + problem cards */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0.85, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportReEnter}
            transition={{ duration: 0.4 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-32 rounded-2xl border border-[rgba(139,156,179,0.1)] bg-[#151a22]/50 p-6">
              <p className="text-xs uppercase tracking-wider text-[#8b9cb3] font-medium mb-4">Working in silos</p>
              <div className="space-y-4">
                {["Procurement", "Sustainability", "Supply chain ops"].map((team, i) => (
                  <div
                    key={team}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#0a0d12]/60 border border-[rgba(139,156,179,0.08)]"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#ef4444]/60" />
                    <span className="text-sm text-[#8b9cb3]">{team}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[#5a6a7f] mt-6 leading-relaxed">
                Same supplier data, collected again. Different spreadsheets. No reuse.
              </p>
            </div>
          </motion.div>

          <div className="lg:col-span-8 space-y-6">
            {problems.map((problem, i) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0.85, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportReEnter}
                transition={{ duration: 0.35, delay: i * 0.05, ease: easing.smooth }}
                className="card-hover p-6 lg:p-8 rounded-2xl border border-[rgba(139,156,179,0.1)] bg-[#151a22]/40 hover:border-[rgba(239,68,68,0.15)]"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{problem.title}</h3>
                <p className="text-[#8b9cb3] mb-3">{problem.state}</p>
                <p className="text-sm text-[#ef4444]/90 font-medium">{problem.cost}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pain quantified */}
        <motion.div
          initial={{ opacity: 0.85, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReEnter}
          transition={{ duration: 0.4 }}
          className="mt-16 p-6 lg:p-8 rounded-2xl border border-[rgba(239,68,68,0.12)] bg-[#151a22]/30"
        >
          <p className="text-sm font-medium text-[#e8ecf1] mb-4">The cost — quantified</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-[#ef4444]/90">$1–5M</p>
              <p className="text-xs text-[#8b9cb3]">per day per halted line</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#ef4444]/90">€40M</p>
              <p className="text-xs text-[#8b9cb3]">EUDR fine exposure (€1B company)</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#ef4444]/90">3–6 years</p>
              <p className="text-xs text-[#8b9cb3]">qualification backlog (200 suppliers)</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#ef4444]/90">3–6 weeks</p>
              <p className="text-xs text-[#8b9cb3]">average detection lag</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
