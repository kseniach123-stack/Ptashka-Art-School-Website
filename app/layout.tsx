// Ptashka Art School — Website
// Language rule: code comments and technical docs -> English
//                UI text and user-facing content -> Ukrainian
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const nunito = Nunito({
  subsets: ["latin", "cyrillic"],
  weight: ["700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Пташка — Школа малювання",
  description: "Заняття малювання для дітей, підлітків та дорослих",
  icons: {
    icon: "/logo-square.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body className={`${inter.variable} ${nunito.variable}`}>{children}</body>
    </html>
  );
}
