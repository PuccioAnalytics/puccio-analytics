import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Puccio Analytics",
    template: "%s | Puccio Analytics",
  },
  description:
    "Puccio Analytics helps businesses make smarter decisions through Power BI dashboards, SQL reporting, retail analytics, inventory reporting, and custom business intelligence solutions.",
  keywords: [
    "Puccio Analytics",
    "Business Intelligence",
    "Power BI",
    "SQL",
    "Retail Analytics",
    "Data Analytics",
    "Dashboard",
    "Inventory Analytics",
    "Business Reporting",
    "Business Intelligence Consulting",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}