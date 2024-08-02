import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import SideLayout from "@/app/SideLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inventory",
  description: "AI-driven inventory manager",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideLayout>
          {children}
        </SideLayout>
      </body>
    </html>
  );
}
