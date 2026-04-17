"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { HeroHeader } from "@/components/header";
import { usePathname } from "next/navigation";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isMenuPage = pathname?.startsWith("/menu");

  return (
    <html lang="es" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {!isMenuPage && <HeroHeader />}
            {children}
          </ThemeProvider>
          <Analytics />
        </ClerkProvider>
      </body>
    </html>
  );
}
