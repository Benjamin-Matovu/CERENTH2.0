'use client';

import { Montserrat } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
        <title>Cerenth Ltd — Securing the infrastructure Africa builds on</title>
        <meta
          name="description"
          content="DevSecOps managed services for East African fintechs and startups. Security audits, pipeline setup, cloud infrastructure, and compliance consulting from Kampala, Uganda."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-montserrat bg-ivory text-charcoal antialiased flex flex-col min-h-screen">
        <Nav />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
