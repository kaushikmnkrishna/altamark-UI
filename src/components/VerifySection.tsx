"use client";

import { motion } from "framer-motion";
import { viewportReEnter, easing } from "@/lib/motion";
import VerifyVisual from "@/components/visuals/VerifyVisual";
import GeospatialCard from "@/components/visuals/GeospatialCard";
import ComplianceTimeChart from "@/components/charts/ComplianceTimeChart";
import DocumentAIVisual from "@/components/visuals/DocumentAIVisual";
import VerificationFlowVisual from "@/components/visuals/VerificationFlowVisual";

const capabilities = [
  {
    title: "Document AI",
    desc: "AI processes supplier documents in 40+ languages. AI extracts GPS coordinates, HS codes, certificate numbers, operator details — from PDFs, scans, handwritten certificates. Per-field confidence scoring.",
    diff: "SAP requires structured digital forms. AI processes whatever the supplier sends — including handwritten certificates from East Kalimantan.",
  },
  {
    title: "Geospatial validation",
    desc: "AI cross-checks every GPS coordinate against Hansen dataset: was this land forest on December 31, 2020? AI-generated deforestation verdict with confidence level and satellite source citation.",
    diff: "EcoVadis relies on supplier self-reporting. AI verifies — it does not just collect.",
  },
  {
    title: "Certificate verification",
    desc: "AI verifies every certificate number against the issuing body's live API (RSPO, Rainforest Alliance, FSC, PEFC). OpenSanctions screening as hard blocker before any other check.",
    diff: "Competitors verify self-reported data. AI verifies against source — real-time, source-confirmed.",
  },
  {
    title: "AI-generated statements",
    desc: "AI generates signed EUDR Article 9 due diligence statements, KMS-hashed, submitted to EU TRACES NT registry. Full verification chain. 15 minutes automated vs 6–8 weeks manually.",
    diff: "No other product AI-generates and submits compliant EUDR Article 9 DDS to the EU registry automatically.",
  },
];

export default function VerifySection() {
  return (
    <section id="verify" className="py-24 lg:py-32 relative scroll-mt-24">
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-[#10b981]/5 rounded-full blur-[100px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0.85, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReEnter}
          transition={{ duration: 0.4, ease: easing.smooth }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Verify: AI-automated EUDR and compliance
          </h2>
          <p className="text-lg text-[#8b9cb3] max-w-2xl">
            December 30, 2026 — EUDR Article 9 compliance mandatory. AI extracts and verifies compliance data automatically. 15 minutes to AI-generated statement vs 6–8 weeks manually.
          </p>
        </motion.div>

        {/* Verify product visual + Geospatial card + Compliance chart */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <DocumentAIVisual />
          <VerificationFlowVisual />
        </div>
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          <VerifyVisual />
          <GeospatialCard />
          <ComplianceTimeChart />
        </div>

        <div className="space-y-8">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0.85, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportReEnter}
              transition={{ duration: 0.35, delay: i * 0.06, ease: easing.smooth }}
              className="card-hover grid lg:grid-cols-2 gap-8 p-8 rounded-2xl border border-[rgba(139,156,179,0.1)] bg-[#151a22]/40"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{cap.title}</h3>
                <p className="text-[#8b9cb3]">{cap.desc}</p>
              </div>
              <div className="lg:pl-8 border-l border-[rgba(139,156,179,0.1)]">
                <p className="text-sm text-[#10b981]/90 font-medium">Why AI wins here</p>
                <p className="text-[#8b9cb3] mt-1">{cap.diff}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
