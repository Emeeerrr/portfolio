import "./globals.css";
import { Providers } from "./providers";
import SiteNavbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh flex flex-col bg-background text-foreground antialiased transition-colors duration-300">
        <Providers>
          <SiteNavbar />
          <main className="flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
