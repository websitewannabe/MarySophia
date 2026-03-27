import type { Metadata } from "next";

export const siteConfig = {
  name: "Mary Sophia | Divine Feminine Channel & Spiritual Guide",
  url: "https://lightofsophia.com",
  description:
    "Mary Sophia offers private readings, spiritual counseling, and sacred teachings rooted in the Divine Feminine. Explore the School of Sophia and Order of the Blue Rose.",
  keywords: [
    "Mary Sophia",
    "Divine Feminine",
    "spiritual counseling",
    "intuitive channeling",
    "private readings",
    "Order of the Blue Rose",
    "School of Sophia",
    "sacred feminine wisdom",
    "spiritual guide",
    "Mary Magdalene teachings",
  ],
  authors: [{ name: "Mary Sophia" }] as { name: string }[],
  creator: "Mary Sophia",
  openGraph: {
    type: "website" as const,
    locale: "en_US",
    url: "https://lightofsophia.com",
    siteName: "Mary Sophia | Light of Sophia",
  },
  twitter: {
    card: "summary_large_image" as const,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  noIndex = false,
  canonical,
  openGraph,
}: {
  title: string;
  description: string;
  keywords?: string[];
  noIndex?: boolean;
  canonical?: string;
  openGraph?: Partial<Metadata["openGraph"]>;
}): Metadata {
  const fullKeywords = [...siteConfig.keywords, ...keywords];

  return {
    title,
    description,
    keywords: fullKeywords,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    robots: noIndex ? { index: false, follow: false } : siteConfig.robots,
    openGraph: {
      ...siteConfig.openGraph,
      title,
      description,
      url: canonical
        ? `${siteConfig.url}${canonical}`
        : siteConfig.openGraph.url,
      ...openGraph,
    },
    twitter: {
      ...siteConfig.twitter,
      title,
      description,
    },
    ...(canonical && {
      alternates: {
        canonical,
      },
    }),
  };
}
