import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Dock } from "@/components/dock";
import { Spotlight } from "@/components/spotlight";
import { TopBar } from "@/components/top-bar";
import { site } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description:
    "Full-stack dasturchi, asosan frontend. Carplus (UK) va shaxsiy mahsulotlar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="uz"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col overflow-x-clip bg-bg pb-24 text-ink">
        <div className="mesh" aria-hidden />
        <Spotlight />
        <div className="relative z-10 flex min-h-full flex-1 flex-col">
          <TopBar />
          {children}
        </div>
        <Dock />
      </body>
    </html>
  );
}
