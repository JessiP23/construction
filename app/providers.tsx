"use client";

import { ReactNode } from "react";
import { AmbientBackground } from "@/components/ambient-background";
import { LanguageProvider } from "@/components/language-provider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <AmbientBackground />
        {children}
      </div>
    </LanguageProvider>
  );
}
