import type { Metadata } from "next";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import Navbar from "@/components/Navbar";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: `${site.name} | 24/7 Plumber in San Jose, CA`, template: `%s | ${site.name}` },
  description:
    "Licensed, family-run San Jose plumbers with upfront flat-rate pricing and same-day service. Available 24/7 for emergencies.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-dvh flex-col pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
