import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://friesstory.com"),
  title: {
    default: "Fries Story — Loaded Belgian Fries",
    template: "%s | Fries Story",
  },
  description:
    "Born in Bali. Inspired by Belgium. Loaded Belgian fries crafted for a global audience. Franchise opportunities available across Southeast Asia and Australia.",
  keywords: ["fries story", "loaded fries", "Belgian fries", "Bali food", "franchise", "fast casual"],
  openGraph: {
    type: "website",
    siteName: "Fries Story",
    title: "Fries Story — Loaded Belgian Fries",
    description: "Born in Bali. Inspired by Belgium. Loaded Belgian fries crafted for a global audience.",
    images: [{ url: "/og/og-default.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fries Story — Loaded Belgian Fries",
    description: "Born in Bali. Inspired by Belgium.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} ${dmMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-charcoal text-cream antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
