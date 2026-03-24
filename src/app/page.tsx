"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ProblemSection from "@/components/ProblemSection";
import WhyExistingFailsSection from "@/components/WhyExistingFailsSection";
import WhatTheAIDoesSection from "@/components/WhatTheAIDoesSection";
import PlatformSection from "@/components/PlatformSection";
import VerifySection from "@/components/VerifySection";
import OnboardSection from "@/components/OnboardSection";
import MonitorSection from "@/components/MonitorSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DataFlywheelSection from "@/components/visuals/DataFlywheelSection";
import DifferentiationSection from "@/components/DifferentiationSection";
import ICPSection from "@/components/ICPSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import DemoFormModal from "@/components/DemoFormModal";
import SectionConnector from "@/components/SectionConnector";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const openDemoModal = useCallback(() => setDemoModalOpen(true), []);
  const closeDemoModal = useCallback(() => setDemoModalOpen(false), []);

  return (
    <>
      <Navbar onBookDemo={openDemoModal} />
      <main>
        <Hero onBookDemo={openDemoModal} />
        <TrustStrip />
        <SectionConnector />
        <ProblemSection />
        <WhyExistingFailsSection />
        <SectionConnector />
        <WhatTheAIDoesSection />
        <SectionConnector />
        <PlatformSection />
        <VerifySection />
        <OnboardSection />
        <MonitorSection />
        <HowItWorksSection />
        <DataFlywheelSection />
        <DifferentiationSection />
        <ICPSection />
        <FinalCTA onBookDemo={openDemoModal} />
        <Footer />
      </main>
      <DemoFormModal isOpen={demoModalOpen} onClose={closeDemoModal} triggerRef={undefined} />
      <ScrollToTop />
    </>
  );
}
