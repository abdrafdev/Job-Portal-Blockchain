import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Talentium - Decentralized Job Portal",
  description:
    "Web3-powered hiring platform with blockchain verification, IPFS storage, and transparent recruitment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
