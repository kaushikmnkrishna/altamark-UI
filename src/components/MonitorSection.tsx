"use client";

import { motion } from "framer-motion";
import { viewportReEnter, easing } from "@/lib/motion";
import MonitorVisual from "@/components/visuals/MonitorVisual";
import RiskScoreRadar from "@/components/charts/RiskScoreRadar";
import SignalIntelligenceVisual from "@/components/charts/SignalIntelligenceVisual";
import SignalEngineVisual from "@/components/visuals/SignalEngineVisual";

const features = [
  {
    title: "15+ signal streams",
    desc: "AI continuously ingests GDELT, NewsAPI, SEC 8-K, MarineTraffic AIS, ACLED, OpenSanctions, Creditsafe, RSPO. AI maps every signal to the shared entity graph.",
  },
  {
    title: "AI-computed risk score",
    desc: "AI computes 6-dimension risk: financial, geopolitical, operational, environmental, compliance, supply continuity. YAML-configurable weights. Score delta >10 in 24h triggers AI alert.",
  },
  {
    title: "AI-generated daily briefing",
    desc: "AI generates daily briefing at 05:00 UTC. Specific supplier names, risk types, recommended actions. McKinsey: €400–800K quarterly. AI Monitor: €80K/year, daily.",
  },
];

export default function MonitorSection() {
  return (
    <section id="monitor" className="py-24 lg:py-32 relative scroll-mt-24">
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-[#8b5cf6]/5 rounded-full blur-[100px]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0.85, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReEnter}
          transition={{ duration: 0.4, ease: easing.smooth }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Monitor: Continuous AI risk intelligence
          </h2>
          <p className="text-lg text-[#8b9cb3] max-w-2xl">
            AI continuously monitors supplier risk signals. AI synthesizes 15+ streams into risk score, alerts, and daily briefing. AI entity resolution maps every alert to the correct company.
          </p>
        </motion.div>

        {/* Monitor visual + Risk score + Signal intelligence */}
        <div className="grid lg:grid-cols-2 gap-6 mb-12">
          <SignalEngineVisual />
          <MonitorVisual />
        </div>
        <div className="grid lg:grid-cols-2 gap-6 mb-16">
          <RiskScoreRadar />
          <SignalIntelligenceVisual />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0.85, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportReEnter}
              transition={{ duration: 0.35, delay: i * 0.06, ease: easing.smooth }}
              className="card-hover p-6 rounded-2xl border border-[rgba(139,156,179,0.1)] bg-[#151a22]/40 hover:border-[#8b5cf6]/25"
            >
              <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-[#8b9cb3]">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
