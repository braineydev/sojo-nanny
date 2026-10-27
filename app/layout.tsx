import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Sojo Nanny | Thoughtful Childcare, More Peace of Mind",
  description: "Professional day care, overnight infant care and travel nanny support for families in Kenya and worldwide.",
  icons: {
    icon: [{ url: "/logo1.png", type: "image/png" }],
    shortcut: "/logo1.png",
    apple: "/logo1.png",
  },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
