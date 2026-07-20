"use client";

import { useState, useEffect } from "react";
import { CONTACT_INFO } from "@/lib/fusen/data";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] animate-fade-in">
      <a
        href={CONTACT_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full no-underline text-sm font-medium shadow-lg shadow-[#25D366]/30 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-105 hover:shadow-xl hover:shadow-[#25D366]/40 group"
      >
        <svg viewBox="0 0 32 32" width="22" height="22" fill="currentColor">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.106-1.958A15.914 15.914 0 0016.004 32C24.826 32 32 24.824 32 16S24.826 0 16.004 0zm9.302 22.602c-.39 1.1-2.282 2.102-3.166 2.136-.884.034-1.716.39-5.742-1.282-4.872-2.014-7.98-7.062-8.22-7.38-.24-.318-1.982-2.638-1.982-5.026s1.256-3.566 1.704-4.056c.448-.49.976-.612 1.302-.612.326 0 .652.002.938.016.302.014.706-.114 1.102.834.398.95 1.352 3.302 1.474 3.542.122.24.204.52.04.838-.162.318-.242.516-.482.796-.24.28-.504.626-.72.84-.24.238-.49.496-.21.972.28.476 1.244 2.064 2.672 3.332 1.832 1.632 3.378 2.14 3.854 2.378.476.238.754.2 1.032-.12.28-.32 1.192-1.39 1.51-1.87.318-.48.638-.398 1.074-.238.438.16 2.772 1.308 3.248 1.546.476.238.794.358.912.558.12.2.12 1.162-.27 2.262z" />
        </svg>
        <span className="hidden group-hover:inline">Chat on WhatsApp</span>
      </a>
    </div>
  );
}