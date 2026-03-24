"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/components/Toast";

interface DemoFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

type FormState = "idle" | "loading" | "success-pending" | "success" | "error";

const FOCUSABLE_SELECTOR = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function DemoFormModal({ isOpen, onClose, triggerRef }: DemoFormModalProps) {
  const { toast } = useToast();
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [submitLockUntil, setSubmitLockUntil] = useState<number | null>(null);
  const [lockSecondsLeft, setLockSecondsLeft] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    company: "",
    jobTitle: "",
    message: "",
  });

  const validate = useCallback(() => {
    if (!formData.firstName.trim()) return "First name is required.";
    if (!formData.workEmail.trim()) return "Work email is required.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.workEmail)) return "Please enter a valid email.";
    if (!formData.company.trim()) return "Company is required.";
    return null;
  }, [formData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return;

    const validationError = validate();
    if (validationError) {
      setErrorMessage(validationError);
      setFormState("error");
      return;
    }

    setFormState("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website: honeypot }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      toast("Demo request submitted successfully.", "success");
      setSubmitLockUntil(Date.now() + 10000);
      setLockSecondsLeft(10);
      setFormState("success-pending");
    } catch (err) {
      toast("Failed to submit request. Please try again.", "error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to submit. Please try again.");
      setFormState("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (formState !== "success-pending" || !submitLockUntil) return;
    const updateCountdown = () => {
      const remaining = submitLockUntil - Date.now();
      if (remaining <= 0) {
        setFormState("success");
        setFormData({
          firstName: "",
          lastName: "",
          workEmail: "",
          company: "",
          jobTitle: "",
          message: "",
        });
        setSubmitLockUntil(null);
        setLockSecondsLeft(null);
        return;
      }
      setLockSecondsLeft(Math.ceil(remaining / 1000));
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 500);
    const t = setTimeout(() => {
      clearInterval(interval);
      setFormState("success");
      setFormData({
        firstName: "",
        lastName: "",
        workEmail: "",
        company: "",
        jobTitle: "",
        message: "",
      });
      setSubmitLockUntil(null);
      setLockSecondsLeft(null);
    }, submitLockUntil - Date.now());
    return () => {
      clearInterval(interval);
      clearTimeout(t);
    };
  }, [formState, submitLockUntil]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key !== "Tab" || !modalRef.current) return;
    const focusable = modalRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;

    const timer = setTimeout(() => {
      const firstInput = modalRef.current?.querySelector<HTMLElement>('input:not([type="hidden"]), select, textarea');
      firstInput?.focus();
    }, 100);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      clearTimeout(timer);
      triggerRef?.current?.focus();
    };
  }, [isOpen, onClose, handleKeyDown, triggerRef]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
          aria-describedby="demo-modal-desc"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
          />

          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.97, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ type: "spring", damping: 30, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
            className={`
              relative w-full flex flex-col
              max-w-[600px]
              bg-[#0a0d12]
              border border-[rgba(139,156,179,0.15)]
              h-[100dvh] max-h-[100dvh] sm:h-auto sm:max-h-[85vh]
              rounded-none sm:rounded-2xl
              sm:w-full
              overflow-hidden
            `}
            style={{
              boxShadow: "0 0 0 1px rgba(139,156,179,0.08), 0 32px 64px -12px rgba(0,0,0,0.6), 0 0 80px -20px rgba(16,185,129,0.08)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#10b981]/40 to-transparent" />
            <div className="flex-shrink-0 px-6 py-5 border-b border-[rgba(139,156,179,0.08)] bg-[#0a0d12]/80">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 id="demo-modal-title" className="text-xl sm:text-2xl font-bold text-white">
                    Book a Demo
                  </h2>
                  <p id="demo-modal-desc" className="text-sm text-[#8b9cb3] mt-1">
                    See AI process your supplier documents. We&apos;ll respond within 24 hours.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="flex-shrink-0 p-2 -m-2 text-[#8b9cb3] hover:text-white rounded-lg hover:bg-[#151a22] transition-colors focus:outline-none focus:ring-2 focus:ring-[#10b981]/50"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="flex-1 flex flex-col items-center justify-center py-16 px-6"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="w-20 h-20 rounded-full bg-[#10b981]/15 flex items-center justify-center mb-6 ring-4 ring-[#10b981]/20"
                >
                  <svg className="w-10 h-10 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">Request received</h3>
                <p className="text-[#8b9cb3] text-center max-w-sm mb-8">
                  We&apos;ll be in touch within 24 hours to schedule your demo.
                </p>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 rounded-xl bg-[#10b981] hover:bg-[#0d9668] text-white font-semibold transition-colors"
                >
                  Close
                </motion.button>
              </motion.div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto overscroll-contain min-h-0">
                  <form onSubmit={handleSubmit} id="demo-form" className="p-6">
                    <input
                      type="text"
                      name="website"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      className="absolute -left-[9999px]"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-[#e8ecf1] mb-2">
                          First name <span className="text-[#ef4444]">*</span>
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#151a22] border border-[rgba(139,156,179,0.18)] text-white placeholder-[#5a6a7f] focus:outline-none focus:ring-2 focus:ring-[#10b981]/40 focus:border-[#10b981]/50 transition-all duration-200"
                          placeholder="Jane"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-[#e8ecf1] mb-2">
                          Last name
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#151a22] border border-[rgba(139,156,179,0.18)] text-white placeholder-[#5a6a7f] focus:outline-none focus:ring-2 focus:ring-[#10b981]/40 focus:border-[#10b981]/50 transition-all duration-200"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    <div className="mt-5">
                      <label htmlFor="workEmail" className="block text-sm font-medium text-[#e8ecf1] mb-2">
                        Work email <span className="text-[#ef4444]">*</span>
                      </label>
                      <input
                        id="workEmail"
                        name="workEmail"
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#151a22] border border-[rgba(139,156,179,0.18)] text-white placeholder-[#5a6a7f] focus:outline-none focus:ring-2 focus:ring-[#10b981]/40 focus:border-[#10b981]/50 transition-all duration-200"
                        placeholder="jane@company.com"
                        autoComplete="email"
                      />
                    </div>

                    <div className="mt-5 grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-[#e8ecf1] mb-2">
                          Company <span className="text-[#ef4444]">*</span>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#151a22] border border-[rgba(139,156,179,0.18)] text-white placeholder-[#5a6a7f] focus:outline-none focus:ring-2 focus:ring-[#10b981]/40 focus:border-[#10b981]/50 transition-all duration-200"
                          placeholder="Acme Corp"
                        />
                      </div>
                      <div>
                        <label htmlFor="jobTitle" className="block text-sm font-medium text-[#e8ecf1] mb-2">
                          Job title
                        </label>
                        <input
                          id="jobTitle"
                          name="jobTitle"
                          type="text"
                          value={formData.jobTitle}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#151a22] border border-[rgba(139,156,179,0.18)] text-white placeholder-[#5a6a7f] focus:outline-none focus:ring-2 focus:ring-[#10b981]/40 focus:border-[#10b981]/50 transition-all duration-200"
                          placeholder="Head of Procurement"
                        />
                      </div>
                    </div>

                    <div className="mt-5">
                      <label htmlFor="message" className="block text-sm font-medium text-[#e8ecf1] mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#151a22] border border-[rgba(139,156,179,0.18)] text-white placeholder-[#5a6a7f] focus:outline-none focus:ring-2 focus:ring-[#10b981]/40 focus:border-[#10b981]/50 transition-all duration-200 resize-none"
                        placeholder="Tell us about your supply chain priorities..."
                      />
                    </div>

                    {formState === "error" && (
                      <p className="mt-4 text-sm text-[#ef4444]">{errorMessage}</p>
                    )}
                  </form>
                </div>

                <div className="flex-shrink-0 px-6 py-5 border-t border-[rgba(139,156,179,0.08)] bg-[#0a0d12]/95 backdrop-blur-sm">
                  <div className="flex flex-col-reverse sm:flex-row gap-3 sm:items-center sm:justify-between">
                    <p className="text-xs text-[#8b9cb3]">
                      Your details stay private. We&apos;ll respond shortly.
                    </p>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={onClose}
                        className="px-6 py-3 rounded-xl border border-[rgba(139,156,179,0.3)] text-[#8b9cb3] hover:text-white hover:border-[#8b9cb3] font-medium transition-colors"
                      >
                        Cancel
                      </button>
                      <motion.button
                        type="submit"
                        form="demo-form"
                        disabled={formState === "loading" || formState === "success-pending"}
                        whileHover={formState !== "loading" && formState !== "success-pending" ? { scale: 1.02 } : {}}
                        whileTap={formState !== "loading" && formState !== "success-pending" ? { scale: 0.98 } : {}}
                        className="flex-1 sm:flex-initial px-8 py-3 rounded-xl bg-[#10b981] hover:bg-[#0d9668] text-white font-semibold disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#10b981]/40 focus:ring-offset-2 focus:ring-offset-[#0a0d12]"
                      >
                        {formState === "loading" ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending...
                          </span>
                        ) : formState === "success-pending" ? (
                          lockSecondsLeft !== null ? `Submitted (${lockSecondsLeft}s)` : "Submitted"
                        ) : (
                          "Submit Request"
                        )}
                      </motion.button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
