import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { COMPANY } from "@/lib/constants";
import ScrollAnimationProvider from "@/components/layout/ScrollAnimationProvider";
import PageTransition from "@/components/layout/PageTransition";
import ScrollToTop from "@/components/ui/ScrollToTop";
import ChatBot from "@/components/ui/ChatBot";

const inter = localFont({
  src: "../../public/fonts/Inter-Variable.ttf",
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} — ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.name}`,
  },
  description: COMPANY.description,
  metadataBase: new URL(COMPANY.domain),
  openGraph: {
    title: COMPANY.name,
    description: COMPANY.description,
    url: COMPANY.domain,
    siteName: COMPANY.name,
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY.name,
    description: COMPANY.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icons/lerion-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevent FOUC for dark mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('lerion-theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased relative`}>
        {/* Premium ambient background decorations */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
          {/* Large warm orb — top left */}
          <div className="absolute -top-[30%] -left-[15%] w-[80vw] h-[80vh] bg-gradient-to-br from-orange-400/[0.07] via-orange-300/[0.04] to-transparent rounded-full blur-[100px] dark:from-orange-500/[0.08] dark:via-orange-400/[0.03]" />
          {/* Accent orb — top right */}
          <div className="absolute -top-[10%] -right-[15%] w-[50vw] h-[50vh] bg-gradient-to-bl from-amber-200/[0.05] via-transparent to-transparent rounded-full blur-[80px] dark:from-primary/[0.06]" />
          {/* Deep orb — bottom right */}
          <div className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vh] bg-gradient-to-tl from-orange-500/[0.05] via-rose-300/[0.02] to-transparent rounded-full blur-[120px] dark:from-primary/[0.07] dark:via-orange-600/[0.03]" />
          {/* Mid-page glow */}
          <div className="absolute top-[50%] left-[20%] w-[50vw] h-[40vh] bg-gradient-to-r from-orange-200/[0.04] to-transparent rounded-full blur-[100px] dark:from-primary/[0.05]" />
          {/* Noise texture overlay */}
          <div className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />
          {/* Dot grid */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, currentColor 0.5px, transparent 0.5px)", backgroundSize: "24px 24px" }} />
        </div>

        <Navbar />
        <main className="pt-[72px] relative z-[1]">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <ScrollAnimationProvider />
        <ScrollToTop />
        <ChatBot />
      </body>
    </html>
  );
}
