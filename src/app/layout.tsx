import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Best Computer Institute in Gharaunda",
  description: "Best Computer Institute in Gharaunda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body  className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>{children}</body>
    </html>
  );
}
