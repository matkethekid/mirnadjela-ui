import type { Metadata } from "next";

const siteUrl = "https://pogrebnomirandjela.rs";
const pageUrl = `${siteUrl}/pogrebne-usluge`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pogrebne usluge | Organizacija sahrane i prevoz pokojnika",
  description:
    "Pogrebno preduzeće Mir Anđela pruža kompletne pogrebne usluge: organizaciju sahrane, prevoz pokojnika, pogrebnu opremu, administrativnu pomoć, PIO fond naknadu i ketering. Dostojanstveno, profesionalno i diskretno.",
  keywords: [
    "pogrebne usluge",
    "pogrebno preduzeće",
    "pogrebne usluge Srbija",
    "organizacija sahrane",
    "organizacija sahrana",
    "prevoz pokojnika",
    "prevoz pokojnika Srbija",
    "pogrebna oprema",
    "pogrebna oprema Srbija",
    "administrativna pomoć nakon smrti",
    "PIO fond naknada za sahranu",
    "refundacija troškova sahrane",
    "ketering za sahrane",
    "Mir Anđela",
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
    title:
      "Pogrebne usluge | Organizacija sahrane i prevoz pokojnika – Mir Anđela",

    description:
      "Kompletne pogrebne usluge uz dostojanstven, profesionalan i diskretan pristup. Organizacija sahrane, prevoz pokojnika, pogrebna oprema, administrativna pomoć i druge usluge.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pogrebne usluge Mir Anđela",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",

    title:
      "Pogrebne usluge | Organizacija sahrane – Mir Anđela",

    description:
      "Kompletne i dostojanstvene pogrebne usluge. Organizacija sahrane, prevoz pokojnika, pogrebna oprema i pomoć porodici.",

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

const services = [
  {
    name: "Prevoz pokojnika",
    description:
      "Siguran, dostojanstven i profesionalan prevoz pokojnika u zemlji i inostranstvu, uz specijalizovana vozila i poštovanje svih propisanih standarda.",
    url: `${pageUrl}#prevoz-pokojnika`,
  },
  {
    name: "Organizacija sahrane",
    description:
      "Kompletna organizacija sahrane i pogrebne ceremonije, uključujući potrebnu administraciju i koordinaciju svih neophodnih usluga.",
    url: `${pageUrl}#organizacija-sahrane`,
  },
  {
    name: "Pogrebna oprema",
    description:
      "Ponuda pogrebne opreme, sanduka, venaca, cvetnih aranžmana i drugih elemenata potrebnih za dostojanstven ispraćaj.",
    url: `${pageUrl}#pogrebna-oprema`,
  },
  {
    name: "Administrativna pomoć",
    description:
      "Pomoć porodici pri prikupljanju dokumentacije i rešavanju administrativnih procedura nakon smrti člana porodice.",
    url: `${pageUrl}#administrativna-pomoc`,
  },
  {
    name: "PIO Fond naknada",
    description:
      "Pomoć pri ostvarivanju prava na naknadu odnosno refundaciju troškova sahrane preko PIO fonda i pripremi potrebne dokumentacije.",
    url: `${pageUrl}#pio-fond-naknada`,
  },
  {
    name: "Ketering",
    description:
      "Organizacija posluženja za sahrane i pomene, uz pažljivo odabran meni i profesionalnu uslugu prilagođenu potrebama porodice.",
    url: `${pageUrl}#ketering`,
  },
];

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "FuneralHome",
      "@id": `${siteUrl}/#funeral-home`,

      name: "Mir Anđela",

      url: siteUrl,

      description:
        "Pogrebno preduzeće Mir Anđela pruža kompletne pogrebne usluge, uključujući organizaciju sahrana, prevoz pokojnika, pogrebnu opremu i administrativnu pomoć.",

      image: `${siteUrl}/og-image.jpg`,

      areaServed: {
        "@type": "Country",
        name: "Serbia",
      },
    },

    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,

      url: pageUrl,

      name:
        "Pogrebne usluge | Organizacija sahrane i prevoz pokojnika",

      description:
        "Kompletne pogrebne usluge preduzeća Mir Anđela: organizacija sahrane, prevoz pokojnika, pogrebna oprema, administrativna pomoć, PIO fond naknada i ketering.",

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
          name: "Pogrebne usluge",
          item: pageUrl,
        },
      ],
    },

    {
      "@type": "ItemList",
      "@id": `${pageUrl}/#services`,

      name: "Pogrebne usluge Mir Anđela",

      description:
        "Pregled pogrebnih usluga koje pruža pogrebno preduzeće Mir Anđela.",

      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,

        item: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          url: service.url,

          provider: {
            "@id": `${siteUrl}/#funeral-home`,
          },

          areaServed: {
            "@type": "Country",
            name: "Serbia",
          },
        },
      })),
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


export default function PogrebneUslugeLayout({
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
