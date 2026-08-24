import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Dock } from "@/components/dock";
import { LocaleProvider } from "@/components/locale-provider";
import { Spotlight } from "@/components/spotlight";
import { TopBar } from "@/components/top-bar";
import { site } from "@/lib/content";
import { getRequestLocale } from "@/lib/locale-server";
import { getHomePage } from "@/lib/messages/home";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale();
  const home = getHomePage(locale);
  return {
    title: {
      default: `${site.name} — ${home.role}`,
      template: `%s · ${site.name}`,
    },
    description: home.metaDescription,
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getRequestLocale();

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col overflow-x-clip bg-bg pb-24 text-ink">
        <LocaleProvider initialLocale={locale}>
          <div className="mesh" aria-hidden />
          <Spotlight />
          <div className="relative z-10 flex min-h-full flex-1 flex-col">
            <TopBar />
            {children}
          </div>
          <Dock />
        </LocaleProvider>
      </body>
    </html>
  );
}
