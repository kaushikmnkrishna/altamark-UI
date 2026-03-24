"use client";

import { motion } from "framer-motion";
import HeroDashboard from "@/components/visuals/HeroDashboard";
import { easing, duration } from "@/lib/motion";

interface HeroProps {
  onBookDemo: () => void;
}

export default function Hero({ onBookDemo }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0f14] via-[#0a0d12] to-[#0c0f14]" />
      <motion.div
        animate={{ opacity: [0.4, 0.6, 0.4], scale: [1, 1.02, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#10b981]/5 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.03, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#06b6d4]/5 rounded-full blur-[100px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.normal, ease: easing.smooth }}
              className="text-[#10b981] font-medium text-sm uppercase tracking-widest mb-4"
            >
              AI-First Supplier Intelligence
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.normal, delay: 0.08, ease: easing.smooth }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white mb-6"
            >
              AI that understands,{" "}
              <span className="gradient-text">verifies</span>
              , and monitors suppliers
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.normal, delay: 0.16, ease: easing.smooth }}
              className="text-lg sm:text-xl text-[#8b9cb3] leading-relaxed mb-10 max-w-xl"
            >
              Turn fragmented supplier data into verified intelligence. Altamark is the AI layer that ingests documents in 40+ languages, verifies against satellite and certificate APIs, and monitors risk continuously — from raw data to verified signals. One shared data core. Onboard, Verify, Monitor.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.normal, delay: 0.24, ease: easing.smooth }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                onClick={onBookDemo}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: duration.fast }}
                className="btn-primary group px-8 py-4 rounded-xl bg-[#10b981] hover:bg-[#0d9668] text-white font-semibold flex items-center justify-center gap-2"
              >
                Book a Demo
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
              <motion.a
                href="#problem"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: duration.fast }}
                className="px-8 py-4 rounded-xl border border-[rgba(139,156,179,0.3)] hover:border-[#10b981]/50 text-white font-semibold transition-all duration-300 text-center"
              >
                See how it works
              </motion.a>
            </motion.div>
          </div>

          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}
