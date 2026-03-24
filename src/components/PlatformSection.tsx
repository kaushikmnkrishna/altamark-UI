"use client";

import { motion } from "framer-motion";
import PlatformArchitectureDiagram from "@/components/visuals/PlatformArchitectureDiagram";
import { viewportReEnter, easing } from "@/lib/motion";

const surfaces = [
  {
    name: "Verify",
    tagline: "AI-automated EUDR & compliance",
    desc: "Document AI, geospatial deforestation checks, certificate verification, sanctions screening. Automated Article 9 statements in 15 minutes.",
    color: "#10b981",
  },
  {
    name: "Onboard",
    tagline: "AI supplier qualification",
    desc: "Adaptive forms, 40+ languages, qualification scoring. 48 hours from invitation to qualified. ERP-ready export.",
    color: "#06b6d4",
  },
  {
    name: "Monitor",
    tagline: "Continuous AI risk intelligence",
    desc: "15+ signal streams, 6-dimension risk score, daily AI briefing. Entity resolution maps every alert to the right supplier.",
    color: "#8b5cf6",
  },
];

export default function PlatformSection() {
  return (
    <section id="platform" className="py-24 lg:py-32 relative scroll-mt-24 bg-[#0c0f14]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10b981]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0.85, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReEnter}
          transition={{ duration: 0.4, ease: easing.smooth }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            One shared intelligence core. Three connected workflows.
          </h2>
          <p className="text-lg text-[#8b9cb3] max-w-2xl mx-auto">
            Onboard, Verify, and Monitor share one AI foundation. Data collected once flows to all three. No re-collection. AI entity resolution, document extraction, and verification — built once, used everywhere.
          </p>
        </motion.div>

        {/* Shared core / platform architecture diagram */}
        <PlatformArchitectureDiagram />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {surfaces.map((surface, i) => (
            <motion.div
              key={surface.name}
              initial={{ opacity: 0.85, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportReEnter}
              transition={{ duration: 0.4, delay: i * 0.06, ease: easing.smooth }}
              className="card-hover p-8 rounded-2xl border border-[rgba(139,156,179,0.12)] bg-[#151a22]/50 hover:border-[rgba(16,185,129,0.15)]"
            >
              <div
                className="w-12 h-12 rounded-xl mb-6 flex items-center justify-center font-bold text-lg"
                style={{ backgroundColor: `${surface.color}20`, color: surface.color }}
              >
                {surface.name[0]}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{surface.name}</h3>
              <p className="text-sm text-[#8b9cb3] mb-4">{surface.tagline}</p>
              <p className="text-[#8b9cb3]">{surface.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
