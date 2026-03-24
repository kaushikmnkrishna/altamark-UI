"use client";

import { motion } from "framer-motion";
import { duration, viewportReEnter, easing } from "@/lib/motion";

interface FinalCTAProps {
  onBookDemo: () => void;
}

export default function FinalCTA({ onBookDemo }: FinalCTAProps) {
  return (
    <section className="py-24 lg:py-32 relative bg-[#0a0d12]/40">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#10b981]/[0.03] to-transparent pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0.85, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReEnter}
          transition={{ duration: 0.4, ease: easing.smooth }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Stop flying blind
          </h2>
          <p className="text-lg text-[#8b9cb3] mb-10 max-w-2xl mx-auto">
            See AI process your supplier documents, verify compliance, and generate EUDR statements. Live demo with your data. No commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              onClick={onBookDemo}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: duration.fast }}
              className="btn-primary group px-10 py-4 rounded-xl bg-[#10b981] hover:bg-[#0d9668] text-white font-semibold flex items-center justify-center gap-2 mx-auto sm:mx-0"
            >
              Book a Demo
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
            <motion.a
              href="mailto:contact@altamark.ai"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: duration.fast }}
              className="px-10 py-4 rounded-xl border border-[rgba(139,156,179,0.3)] hover:border-[#10b981]/50 text-white font-semibold transition-all duration-300 text-center"
            >
              Talk to our team
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
