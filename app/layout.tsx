import type { Metadata } from "next";
import "./globals.css";
import { Inter, Source_Serif_4 } from "next/font/google";
import Sidebar from "@/components/layout/sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["300", "400", "600", "700"],
   style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "BBT",
  description: "BBT Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sourceSerif.variable} min-h-full flex flex-col`}
      >
        <link rel="stylesheet" href="https://use.typekit.net/hml3npk.css"></link>
         <main className="overflow-hidden">
      <div className="bbt-layout flex h-screen">
        
        {/* Sidebar */}
        <div className="w-[255px] bbt-sidebar">
          <Sidebar />
        </div>

        {/* Content */}
        <div className="bbt-content flex-1 overflow-y-auto">
          {children}
        </div>

      </div>
    </main>
      </body>
    </html>
  );
}

