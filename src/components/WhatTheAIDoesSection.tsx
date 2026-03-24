"use client";

import { motion } from "framer-motion";
import { duration, easing, viewportReEnter } from "@/lib/motion";

const steps = [
  {
    id: 1,
    label: "Ingest documents",
    detail: "PDF, images, supplier data — any format, 40+ languages",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    ),
  },
  {
    id: 2,
    label: "Extract structured data",
    detail: "GPS, certificates, entities — per-field confidence",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    id: 3,
    label: "Verify against datasets",
    detail: "Deforestation, sanctions, compliance — source-confirmed",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 4,
    label: "Build supplier intelligence graph",
    detail: "Entity resolution, relationships, canonical IDs",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    id: 5,
    label: "Continuously monitor signals",
    detail: "15+ streams → risk score, alerts, daily briefing",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function WhatTheAIDoesSection() {
  return (
    <section id="what-the-ai-does" className="py-24 lg:py-32 relative scroll-mt-24 overflow-hidden">
      {/* Connecting gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#10b981]/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#10b981]/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0.85, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReEnter}
          transition={{ duration: 0.4, ease: easing.smooth }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            The Altamark approach
          </h2>
          <p className="text-lg text-[#8b9cb3] max-w-2xl mx-auto">
            AI replaces manual workflows. One system ingests, extracts, verifies, and monitors — continuously. Built on the AI capabilities that make supply chain intelligence possible for the first time.
          </p>
        </motion.div>

        {/* Flow visualization */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewportReEnter}
              transition={{ duration: 1, ease: easing.smooth }}
              className="h-full w-full origin-left bg-gradient-to-r from-[#10b981]/20 via-[#06b6d4]/20 to-[#8b5cf6]/20"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0.85, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportReEnter}
                transition={{ duration: 0.4, delay: i * 0.06, ease: easing.smooth }}
                className="relative"
              >
                <div className="card-hover h-full p-6 rounded-2xl border border-[rgba(139,156,179,0.1)] bg-[#151a22]/50 relative overflow-hidden group">
                  {/* Step number pulse */}
                  <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                    className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#10b981]/5"
                  />
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-[#10b981]/20 flex items-center justify-center text-[#10b981] mb-4 group-hover:bg-[#10b981]/30 transition-colors">
                      {step.icon}
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-[#10b981] font-medium">Step {step.id}</span>
                    <h3 className="text-lg font-bold text-white mt-1 mb-2">{step.label}</h3>
                    <p className="text-sm text-[#8b9cb3]">{step.detail}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-2 -translate-y-1/2 text-[#10b981]/30">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0.85 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportReEnter}
            transition={{ duration: 0.35 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-[#8b9cb3]">
              Onboard feeds Verify. Verify feeds Monitor. One shared AI data core.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
