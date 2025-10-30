"use client";

import { ReactNode } from "react";
import { AmbientBackground } from "@/components/ambient-background";
import { CustomCursor } from "@/components/custom-cursor";
import { LanguageProvider } from "@/components/language-provider";
import { ThemeProvider } from "@/components/theme-provider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="relative min-h-screen">
          <AmbientBackground />
          <CustomCursor />
          {children}
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
