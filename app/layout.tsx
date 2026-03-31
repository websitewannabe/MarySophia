import Script from "next/script";
import type { Metadata } from "next";
import { Dancing_Script, Open_Sans, Petrona, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidgetLoader from "@/components/ChatWidgetLoader";
import { siteConfig } from "@/lib/metadata";
import "./globals.css";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const petrona = Petrona({
  subsets: ["latin"],
  variable: "--font-petrona",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: "%s",
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
  robots: siteConfig.robots,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dancingScript.variable} ${openSans.variable} ${petrona.variable} ${playfairDisplay.variable}`}
    >
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatWidgetLoader />
        {/* Website Wannabe Feedback Widget */}
        <Script
          src="https://brain.websitewannabe.co/api/ww/feedback/widget?key=430d22c52546bbc5a79f6adfc44f457febc42f27436b705666ec6366565a0a7d"
          strategy="lazyOnload"
        />

        {/* Accessibility Widget — defines handler, widget JS only fetches on click */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.openAccessibilityTools=function(){var h=document.querySelector('div[data-brain-a11y="true"]');if(h){var p=h.shadowRoot&&h.shadowRoot.querySelector('.a11y-panel');if(p)return;h.remove()}var o=document.querySelector('script[data-brain-a11y-src]');if(o)o.remove();var s=document.createElement('script');s.src='https://brain.websitewannabe.co/api/ww/a11y-widget';s.setAttribute('data-brain-a11y-src','true');document.body.appendChild(s)};`,
          }}
        />
      </body>
    </html>
  );
}
