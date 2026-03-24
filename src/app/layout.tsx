import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import MotionConfigWrapper from "@/components/MotionConfigWrapper";
import { ToastProvider } from "@/components/Toast";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Altamark",
  description:
    "Altamark turns fragmented supplier data into verified intelligence. AI ingests, extracts, verifies, and monitors — from raw data to verified signals. Onboard, Verify, Monitor.",
  icons: {
    icon: [
      { url: "/altamark-logo-full.png", sizes: "32x32", type: "image/png" },
      { url: "/altamark-logo-full.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/altamark-logo-full.png", sizes: "180x180", type: "image/png" },
  },
  keywords: [
    "supplier intelligence",
    "EUDR compliance",
    "supply chain AI",
    "deforestation verification",
    "procurement",
    "sustainability",
  ],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0c0f14] text-[#e8ecf1]">
        <MotionConfigWrapper>
        <ToastProvider>{children}</ToastProvider>
      </MotionConfigWrapper>
      </body>
    </html>
  );
}
