import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Mate Meszaros - Portfolio",
  description: "Explore the portfolio of Mate Meszaros — a frontend developer with a passion for detail-driven design, smooth animations, and scalable architecture. From creative visuals to performance-focused builds, every project is made with precision, innovation, and a deep understanding of user interaction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="https://cdn.fontshare.com/wf/P6VJ47S3OYMUC7HYSJLTK7PEIK5O2NPQ/TK62VLUWA76PMTK2XWBNDZB7QVXJGYE3/I5W5NEJGYVFUC5I4XOXVET63OE5PSVHJ.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          href="https://cdn.fontshare.com/wf/P6VJ47S3OYMUC7HYSJLTK7PEIK5O2NPQ/TK62VLUWA76PMTK2XWBNDZB7QVXJGYE3/I5W5NEJGYVFUC5I4XOXVET63OE5PSVHJ.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          href="https://cdn.fontshare.com/wf/P6VJ47S3OYMUC7HYSJLTK7PEIK5O2NPQ/TK62VLUWA76PMTK2XWBNDZB7QVXJGYE3/I5W5NEJGYVFUC5I4XOXVET63OE5PSVHJ.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
