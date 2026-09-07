import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";

const siteUrl = "https://pogrebnomirandjela.rs";

const sourceSerif = Source_Serif_4({
  subsets: ["latin-ext"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mir Anđela | Pogrebno preduzeće i pogrebne usluge",
    template: "%s | Mir Anđela",
  },
  description:
    "Mir Anđela je pogrebno preduzeće koje pruža dostojanstvene, profesionalne i diskretne pogrebne usluge. Organizacija sahrana, prevoz pokojnika, pogrebna oprema i administrativna pomoć porodici.",
  keywords: [
    "Mir Anđela",
    "pogrebno preduzeće",
    "pogrebne usluge",
    "pogrebne usluge Srbija",
    "organizacija sahrane",
    "organizacija sahrana",
    "prevoz pokojnika",
    "prevoz pokojnika Srbija",
    "pogrebna oprema",
    "administrativna pomoć",
    "PIO fond naknada",
    "ketering za sahrane",
  ],
  authors: [
    {
      name: "Mir Anđela",
    },
  ],
  creator: "Mir Anđela",
  publisher: "Mir Anđela",
  applicationName: "Mir Anđela",
  category: "Funeral services",
  alternates: {
    canonical: siteUrl,
    languages: {
      "sr-RS": siteUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: siteUrl,
    siteName: "Mir Anđela",
    title: "Mir Anđela | Pogrebno preduzeće i pogrebne usluge",
    description:
      "Dostojanstvene, profesionalne i diskretne pogrebne usluge. Organizacija sahrana, prevoz pokojnika, pogrebna oprema i pomoć porodici.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mir Anđela – pogrebno preduzeće",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mir Anđela | Pogrebno preduzeće",
    description:
      "Dostojanstvene, profesionalne i diskretne pogrebne usluge. Mir Anđela pruža kompletnu podršku porodicama.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FuneralHome",
      "@id": `${siteUrl}/#funeral-home`,
      name: "Mir Anđela",
      url: siteUrl,
      description:
        "Pogrebno preduzeće Mir Anđela pruža kompletne pogrebne usluge uz dostojanstven, profesionalan i diskretan pristup.",
      image: `${siteUrl}/og-image.jpg`,
      areaServed: {
        "@type": "Country",
        name: "Serbia",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Mir Anđela",
      description:
        "Pogrebno preduzeće Mir Anđela – pogrebne usluge, organizacija sahrana, prevoz pokojnika i pogrebna oprema.",
      publisher: {
        "@id": `${siteUrl}/#funeral-home`,
      },
      inLanguage: "sr-RS",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${sourceSerif.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
    </html>
  );
}
