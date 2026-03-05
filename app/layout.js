import { Inter } from "next/font/google";
import "./globals.css";
import siteConfig from "@/config/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: `${siteConfig.businessName} | ${siteConfig.tagline}`,
  description: `${siteConfig.businessName} — ${siteConfig.tagline}. Call ${siteConfig.phone} for a free quote. Licensed, insured, and locally owned.`,
  keywords: [
    "electrician",
    "electrical contractor",
    "licensed electrician",
    ...siteConfig.serviceArea.suburbs.map(
      (s) => `electrician ${s.toLowerCase()}`
    ),
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
