"use client";

import { createContext, useContext, useState, useCallback, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

type ToastType = "success" | "error";

interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextValue {
  toast: (message: string, type: ToastType) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [mounted, setMounted] = useState(false);
  const idRef = useRef(0);

  useEffect(() => setMounted(true), []);

  const toast = useCallback((message: string, type: ToastType) => {
    const id = ++idRef.current;
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      {mounted &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col gap-2 pointer-events-none"
            aria-live="polite"
          >
            {toasts.map((t) => (
              <ToastItem key={t.id} item={t} />
            ))}
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  );
}

function ToastItem({ item }: { item: ToastItem }) {
  const isSuccess = item.type === "success";
  return (
    <div
      role="alert"
      className="px-4 py-3 rounded-xl border shadow-lg backdrop-blur-md min-w-[280px] max-w-[90vw] text-sm font-medium"
      style={{
        backgroundColor: "rgba(10, 13, 18, 0.95)",
        borderColor: isSuccess ? "rgba(16, 185, 129, 0.3)" : "rgba(239, 68, 68, 0.3)",
        color: "#e8ecf1",
      }}
    >
      <span className={isSuccess ? "text-[#10b981]" : "text-[#ef4444]"}>
        {isSuccess ? "✓ " : "✕ "}
      </span>
      {item.message}
    </div>
  );
}
