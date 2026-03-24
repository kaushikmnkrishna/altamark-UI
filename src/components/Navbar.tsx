"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { duration, easing } from "@/lib/motion";
import AltamarkLogo from "./AltamarkLogo";

interface NavbarProps {
  onBookDemo: () => void;
}

export default function Navbar({ onBookDemo }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#problem", label: "Problem" },
    { href: "#what-the-ai-does", label: "Solution" },
    { href: "#platform", label: "Platform" },
    { href: "#verify", label: "Verify" },
    { href: "#onboard", label: "Onboard" },
    { href: "#monitor", label: "Monitor" },
    { href: "#how-it-works", label: "How it works" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: duration.slow, ease: easing.smooth }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        animate={{
          backgroundColor: scrolled ? "rgba(10, 13, 18, 0.96)" : "rgba(10, 13, 18, 0.75)",
          borderBottomColor: scrolled ? "rgba(139, 156, 179, 0.12)" : "rgba(139, 156, 179, 0.06)",
        }}
        transition={{ duration: 0.3, ease: easing.smooth }}
        className="border-b backdrop-blur-xl"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="#" className="flex items-center gap-2 group transition-opacity duration-300 hover:opacity-90">
              <span className="hidden lg:block">
                <AltamarkLogo variant="full" size="md" />
              </span>
              <span className="lg:hidden">
                <AltamarkLogo variant="icon" size="md" />
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-[#8b9cb3] hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <motion.button
                onClick={onBookDemo}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: duration.fast }}
                className="ml-4 px-5 py-2.5 rounded-xl bg-[#10b981] hover:bg-[#0d9668] text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#10b981]/20"
              >
                Book a Demo
              </motion.button>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#8b9cb3] hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: easing.smooth }}
              className="lg:hidden overflow-hidden border-t border-[rgba(139,156,179,0.08)]"
            >
              <div className="px-4 py-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-[#8b9cb3] hover:text-white font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    onBookDemo();
                    setMobileOpen(false);
                  }}
                  className="w-full py-3 rounded-xl bg-[#10b981] text-white font-medium"
                >
                  Book a Demo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}
