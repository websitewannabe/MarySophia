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
        <Script
          id="equalweb-config"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.interdeal = {
                get sitekey(){ return "d918915efc23d774dd62c39c05a11f59" },
                get domains(){
                  return {
                    "js": "https://cdn.equalweb.com/",
                    "acc": "https://access.equalweb.com/"
                  }
                },
                "Position": "left",
                "Menulang": "EN",
                "draggable": true,
                "btnStyle": {
                  "vPosition": ["80%","80%"],
                  "margin": ["0","0"],
                  "scale": ["0.5","0.5"],
                  "color": {
                    "main": "#1c4bb6",
                    "second": "#ffffff"
                  },
                  "icon": {
                    "outline": true,
                    "outlineColor": "#ffffff",
                    "type": 1,
                    "shape": "semicircle"
                  }
                },
                "showTooltip": true
              };

              // Hide the EqualWeb floating button once it loads
              (function hideEqualWebBtn() {
                var wrap = document.getElementById('INDshadowRootWrap');
                if (wrap) {
                  wrap.style.display = 'none';
                } else {
                  setTimeout(hideEqualWebBtn, 500);
                }
              })();

              window.openEqualWeb = function() {
                var wrap = document.getElementById('INDshadowRootWrap');
                if (wrap) {
                  wrap.style.display = '';
                  // Find and click the button inside the shadow DOM
                  var host = document.getElementById('INDShadowRootHost');
                  if (host && host.shadowRoot) {
                    var btn = host.shadowRoot.querySelector('[role="button"], button, .INDmenu-btn');
                    if (btn) btn.click();
                  }
                }
              };
            `,
          }}
        />
        <Script
          src="https://cdn.equalweb.com/core/5.2.5/accessibility.js"
          strategy="lazyOnload"
          integrity="sha512-Zamp30ps601kXvZTcIYv1sytUc090mrEJD9rLuoWzEGqmB6t0XdLRgC/g5TznUleEBIMm6T3c6Baf/ExIYh/Hw=="
          crossOrigin="anonymous"
          data-cfasync="true"
        />
      </body>
    </html>
  );
}
