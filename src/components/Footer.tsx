"use client";

import AltamarkLogo from "./AltamarkLogo";

const links = {
  product: [
    { label: "Verify", href: "#verify" },
    { label: "Onboard", href: "#onboard" },
    { label: "Monitor", href: "#monitor" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(139,156,179,0.1)] bg-[#0a0d12] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <AltamarkLogo variant="full" size="md" />
            <p className="text-sm text-[#8b9cb3] mt-2">
              AI-first supplier intelligence. Onboard · Verify · Monitor.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#8b9cb3] hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-[#8b9cb3] hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[rgba(139,156,179,0.1)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#8b9cb3]">
            © {new Date().getFullYear()} Altamark. All rights reserved.
          </p>
          <div className="flex gap-6">
            {links.legal.map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-[#8b9cb3] hover:text-white">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
