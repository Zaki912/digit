import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// C'EST ICI QUE TU CHANGES LE NOM ET LA DESCRIPTION
export const metadata: Metadata = {
  title: "ScentMastery | Expert Parfum & Business",
  description: "La méthode complète pour diagnostiquer, conseiller et vendre du parfum.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}