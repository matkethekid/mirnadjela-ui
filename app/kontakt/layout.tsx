import type { Metadata } from "next";

const siteUrl = "https://mirandjela.rs";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pogrebno preduzeće Mir Anđela | Pogrebne usluge",
    template: "%s | Mir Anđela",
  },
  description:
    "Pogrebno preduzeće Mir Anđela pruža kompletne pogrebne usluge uz dostojanstven, profesionalan i diskretan pristup. Organizacija sahrana, prevoz pokojnika, pogrebna oprema i pomoć porodici.",
  keywords: [
    "pogrebno preduzeće",
    "pogrebne usluge",
    "Mir Anđela",
    "sahrane",
    "organizacija sahrane",
    "prevoz pokojnika",
    "pogrebna oprema",
    "pogrebne usluge Srbija",
  ],
  authors: [{ name: "Mir Anđela" }],
  creator: "Mir Anđela",
  publisher: "Mir Anđela",
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
    title: "Pogrebno preduzeće Mir Anđela | Pogrebne usluge",
    description:
      "Dostojanstvena i profesionalna organizacija pogrebnih usluga. Mir Anđela pruža pomoć porodicama u najtežim trenucima.",
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
    title: "Pogrebno preduzeće Mir Anđela",
    description:
      "Dostojanstvene i profesionalne pogrebne usluge.",
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FuneralHome",
  name: "Mir Anđela",
  url: siteUrl,
  description:
    "Pogrebno preduzeće Mir Anđela pruža kompletne pogrebne usluge, organizaciju sahrana, prevoz pokojnika i pogrebnu opremu.",
  image: `${siteUrl}/og-image.jpg`,
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "Serbia",
  },
};

export default function KontaktLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
    </>
  );
}

