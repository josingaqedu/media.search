import type { Metadata } from "next";

import { Providers } from "@/providers";

import { Header } from "@/layouts/header";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "MEDIA SEARCH",
  description: "Busca tus películas y series en tus plataformas de streaming.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
