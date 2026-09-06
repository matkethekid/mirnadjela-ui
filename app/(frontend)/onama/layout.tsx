import type { Metadata } from "next";

const siteUrl = "https://mirandjela.rs";
const pageUrl = `${siteUrl}/o-nama`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "O nama | Pogrebno preduzeće Mir Anđela",
  description:
    "Saznajte više o pogrebnom preduzeću Mir Anđela, našem pristupu radu, vrednostima i posvećenosti pružanju dostojanstvenih, profesionalnih i diskretnih pogrebnih usluga porodicama.",
  keywords: [
    "Mir Anđela",
    "o nama Mir Anđela",
    "pogrebno preduzeće Mir Anđela",
    "pogrebno preduzeće",
    "pogrebne usluge",
    "pogrebne usluge Srbija",
    "organizacija sahrane",
    "prevoz pokojnika",
    "pogrebna oprema",
    "profesionalne pogrebne usluge",
    "dostojanstvena sahrana",
  ],
  authors: [
    {
      name: "Mir Anđela",
    },
  ],
  creator: "Mir Anđela",
  publisher: "Mir Anđela",
  alternates: {
    canonical: pageUrl,
    languages: {
      "sr-RS": pageUrl,
    },
  },

  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: pageUrl,
    siteName: "Mir Anđela",
    title: "O nama | Pogrebno preduzeće Mir Anđela",
    description:
      "Upoznajte pogrebno preduzeće Mir Anđela i naš pristup pružanju dostojanstvenih, profesionalnih i diskretnih pogrebnih usluga.",
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
    title: "O nama | Mir Anđela",
    description:
      "Upoznajte Mir Anđela – pogrebno preduzeće posvećeno dostojanstvenoj, profesionalnoj i diskretnoj podršci porodicama.",
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
  "@graph": [
    {
      "@type": "FuneralHome",
      "@id": `${siteUrl}/#funeral-home`,
      name: "Mir Anđela",
      url: siteUrl,
      description:
        "Pogrebno preduzeće Mir Anđela pruža profesionalne, dostojanstvene i diskretne pogrebne usluge i podršku porodicama u najtežim trenucima.",
      image: `${siteUrl}/og-image.jpg`,
      areaServed: {
        "@type": "Country",
        name: "Serbia",
      },
    },
    {
      "@type": "AboutPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "O nama | Pogrebno preduzeće Mir Anđela",
      description:
        "Informacije o pogrebnom preduzeću Mir Anđela, njegovim vrednostima, pristupu radu i posvećenosti pružanju profesionalnih i dostojanstvenih pogrebnih usluga.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#funeral-home`,
      },
      breadcrumb: {
        "@id": `${pageUrl}/#breadcrumb`,
      },
      inLanguage: "sr-RS",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Početna",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "O nama",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Mir Anđela",
      publisher: {
        "@id": `${siteUrl}/#funeral-home`,
      },
      inLanguage: "sr-RS",
    },
  ],
};

export default function ONamaLayout({
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
