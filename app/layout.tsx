"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { HeroUIProvider } from "@heroui/react";
import Navbar from "@/components/Navbar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh flex flex-col bg-background text-foreground antialiased transition-colors duration-300">
        <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"  // guarda la preferencia del usuario
        >
          <HeroUIProvider /* locale="en-US" */>
            <Navbar />
            <main className="flex-1">{children}</main>
          </HeroUIProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
