import type { Metadata } from "next";

const siteUrl = "https://pogrebnomirandjela.rs";
const pageUrl = `${siteUrl}/pogrebne-usluge-po-opstinama`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Pogrebne usluge i prevoz pokojnika po opštinama Beograda | Pogrebno Mir Anđela",
  description:
    "Pogrebno preduzeće Mir Anđela pruža kompletne pogrebne usluge i prevoz pokojnika u svim opštinama Beograda (Novi Beograd, Zemun, Vračar, Čukarica, Palilula i dr). Dostupni smo 24/7 uz dostojanstven i profesionalan pristup.",
  keywords: [
    "pogrebne usluge Beograd",
    "pogrebne usluge po opštinama",
    "pogrebno preduzeće Beograd",
    "organizacija sahrane Beograd",
    "organizacija sahrana Beograd",
    "prevoz pokojnika Beograd",
    "prevoz pokojnika po opštinama",
    "pogrebna oprema Beograd",
    "pogrebne usluge Novi Beograd",
    "pogrebne usluge Zemun",
    "pogrebne usluge Vračar",
    "pogrebne usluge Čukarica",
    "administrativna pomoć nakon smrti Beograd",
    "PIO fond naknada za sahranu Beograd",
    "ketering za sahrane Beograd",
    "Mir Anđela",
  ],
  authors: [{ name: "Mir Anđela" }],
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
    title: "Pogrebne usluge i prevoz pokojnika po opštinama Beograda – Mir Anđela",
    description:
      "Kompletne pogrebne usluge i prevoz pokojnika u svim opštinama Beograda. Organizacija sahrana, pogrebna oprema, administrativna pomoć i podrška 24/7.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pogrebne usluge po opštinama Beograda - Mir Anđela",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pogrebne usluge i prevoz pokojnika po opštinama – Mir Anđela",
    description:
      "Kompletne pogrebne usluge u svim opštinama Beograda. Organizacija sahrane, prevoz pokojnika i podrška 24/7.",
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
    name: "Prevoz pokojnika po Beogradu",
    description:
      "Siguran i profesionalan prevoz pokojnika u svim opštinama Beograda, uz specijalizovana vozila i poštovanje svih standarda.",
    url: `${pageUrl}#prevoz-pokojnika`,
  },
  {
    name: "Organizacija sahrane u Beogradu",
    description:
      "Kompletna organizacija sahrane i pogrebne ceremonije u svim beogradskim opštinama, uključujući potrebnu administraciju i koordinaciju.",
    url: `${pageUrl}#organizacija-sahrane`,
  },
  {
    name: "Pogrebna oprema",
    description:
      "Ponuda pogrebne opreme, sanduka, venaca i cvetnih aranžmana za dostojanstven ispraćaj na teritoriji Beograda.",
    url: `${pageUrl}#pogrebna-oprema`,
  },
  {
    name: "Administrativna pomoć",
    description:
      "Pomoć porodici pri prikupljanju dokumentacije i rešavanju administrativnih procedura nakon smrti člana porodice u Beogradu.",
    url: `${pageUrl}#administrativna-pomoc`,
  },
  {
    name: "PIO Fond naknada",
    description:
      "Pomoć pri ostvarivanju prava na naknadu odnosno refundaciju troškova sahrane preko PIO fonda i pripremi potrebne dokumentacije.",
    url: `${pageUrl}#pio-fond-naknada`,
  },
  {
    name: "Ketering za sahrane",
    description:
      "Organizacija posluženja za sahrane i pomene, uz pažljivo odabran meni i profesionalnu uslugu prilagođenu potrebama porodice u Beogradu.",
    url: `${pageUrl}#ketering`,
  },
];

const municipalities = [
  "Novi Beograd", "Zemun", "Vračar", "Stari Grad (Dorćol)", "Čukarica", 
  "Palilula", "Savski Venac", "Voždovac", "Zvezdara", "Rakovica", "Surčin", "Grocka", "Mladenovac"
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
        "Pogrebno preduzeće Mir Anđela pruža kompletne pogrebne usluge i prevoz pokojnika u svim opštinama Beograda.",
      image: `${siteUrl}/og-image.jpg`,
      areaServed: {
        "@type": "City",
        name: "Belgrade",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Belgrade",
          "addressCountry": "RS"
        }
      },
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Pogrebne usluge i prevoz pokojnika po opštinama Beograda",
      description:
        "Kompletne pogrebne usluge preduzeća Mir Anđela po svim opštinama Beograda: organizacija sahrane, prevoz pokojnika, pogrebna oprema i podrška 24/7.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#funeral-home` },
      breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
      inLanguage: "sr-RS",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}/#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Početna", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Pogrebne usluge", item: `${siteUrl}/pogrebne-usluge` },
        { "@type": "ListItem", position: 3, name: "Opštine Beograda", item: pageUrl },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}/#services`,
      name: "Pogrebne usluge po opštinama Beograda",
      description: "Pregled pogrebnih usluga koje pruža pogrebno preduzeće Mir Anđela na teritoriji Beograda.",
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          url: service.url,
          provider: { "@id": `${siteUrl}/#funeral-home` },
          areaServed: { "@type": "City", name: "Belgrade" },
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}/#municipalities`,
      name: "Opštine koje pokrivamo",
      description: "Spisak opština u Beogradu u kojima pružamo pogrebne usluge.",
      itemListElement: municipalities.map((municipality, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Place",
          name: municipality,
          address: {
            "@type": "PostalAddress",
            "addressLocality": municipality,
            "addressRegion": "Belgrade",
            "addressCountry": "RS"
          }
        }
      }))
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Mir Anđela",
      publisher: { "@id": `${siteUrl}/#funeral-home` },
      inLanguage: "sr-RS",
    },
  ],
};

export default function PogrebneUslugePoOpstinamaLayout({
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