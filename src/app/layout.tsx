import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "CCS Coach | Master Step 3 CCS Cases",
  description:
    "Stop grinding through endless cases. Learn exactly what to order and think at every step—maximize your score even on cases you've never seen before.",
  keywords: [
    "USMLE Step 3",
    "CCS cases",
    "medical exam prep",
    "clinical case simulations",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
