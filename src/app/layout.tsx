import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Wrapper from "@/components/Wrapper";

const font = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
 title: "Brian Stricker | Software Developer",
 description: "Portfolio for Brian Stricker, a software and web developer.",
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
  <html lang="en">
   <body
    className={`bg-stone-950/95 text-neutral-200 h-screen antialiased ${font.className}`}
   >
    <Wrapper>
     <div className="container">{children}</div>
    </Wrapper>
   </body>
  </html>
 );
}
