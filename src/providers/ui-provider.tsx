"use client";

import { useRouter } from "next/navigation";

import { NextUIProvider } from "@nextui-org/react";

interface ProvidersProps {
  children: React.ReactNode;
}

export const UIProvider = ({ children }: ProvidersProps) => {
  const router = useRouter();

  return <NextUIProvider navigate={router.push}>{children}</NextUIProvider>;
};
