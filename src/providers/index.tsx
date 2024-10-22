"use client";

import { QueryProvider } from "@/providers/query-provider";
import { UIProvider } from "@/providers/ui-provider";
import { ThemeProvider } from "@/providers/theme-provider";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryProvider>
      <UIProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </UIProvider>
    </QueryProvider>
  );
};
