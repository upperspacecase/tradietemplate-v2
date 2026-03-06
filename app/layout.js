import { Bodoni_Moda, Inter } from "next/font/google";
import "./globals.css";
import siteConfig from "@/config/siteConfig";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-body",
});

export const metadata = {
  title: `${siteConfig.businessName} | ${siteConfig.tagline}`,
  description: `${siteConfig.businessName} — ${siteConfig.tagline}. Call ${siteConfig.phone} for a free quote.`,
  keywords: ["electrician", "electrical contractor", "licensed electrician", "Brisbane electrician"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bodoni.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
