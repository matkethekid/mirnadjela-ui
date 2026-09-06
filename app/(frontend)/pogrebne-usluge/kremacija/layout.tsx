import type { Metadata } from "next";

const siteUrl = "https://pogrebnomirandjela.rs";
const pageUrl = `${siteUrl}/pogrebne-usluge/kremacija`;

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: "Kremacija Beograd | Pogrebne usluge Mir Anđela",
    description: "Profesionalna kremacija u Beogradu. Organizacija kremacije, prevoz pokojnika, dokumentacija i zakazivanje termina krematorijuma. Dostupni 24/7.",
    keywords: [
        "kremacija Beograd",
        "kremacija cena",
        "krematorijum Beograd",
        "kremacija pokojnika",
        "organizacija kremacije",
        "prevoz pokojnika kremacija",
        "kremacija i polaganje urne",
        "krematorijum Bežanijska kosa",
        "krematorijum Lešće",
        "pogrebne usluge Beograd",
        "pogrebno preduzeće Beograd",
        "kremacija Novi Beograd",
        "kremacija Zemun",
        "kremacija Vračar",
        "alternativa sahrani Beograd",
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
        title: "Kremacija u Beogradu – Pogrebne usluge Mir Anđela",
        description: "Profesionalna kremacija u Beogradu. Organizacija kremacije, prevoz pokojnika, dokumentacija i zakazivanje termina krematorijuma. Dostupni 24/7.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Kremacija u Beogradu – Mir Anđela",
        description: "Profesionalna kremacija u Beogradu. Organizacija kremacije, prevoz pokojnika, dokumentacija i zakazivanje termina. Dostupni 24/7.",
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
        name: "Kompletna organizacija kremacije",
        description: "Preuzimamo kompletnu organizaciju kremacije — od preuzimanja pokojnika, pripreme dokumentacije do zakazivanja i praćenja procesa kremacije u krematorijumu.",
        url: `${pageUrl}#kompletna-organizacija`,
    },
    {
        name: "Prevoz pokojnika do krematorijuma",
        description: "Organizujemo siguran i dostojanstven prevoz pokojnika sa adrese, zdravstvene ustanove ili druge lokacije do krematorijuma na teritoriji Beograda.",
        url: `${pageUrl}#prevoz-pokojnika`,
    },
    {
        name: "Zakazivanje termina kremacije",
        description: "Obavljamo zakazivanje termina kremacije u krematorijumu, čime porodici štedimo vreme i dodatni stres u najtežim trenucima.",
        url: `${pageUrl}#zakazivanje-termina`,
    },
    {
        name: "Dokumentacija za kremaciju",
        description: "Pružamo pomoć porodici pri prikupljanju svih potrebnih dokumenata za kremaciju, uključujući lekarsko uverenje i ostalu neophodnu dokumentaciju.",
        url: `${pageUrl}#dokumentacija`,
    },
    {
        name: "Kremacija sa polaganjem urne",
        description: "Nakon kremacije organizujemo polaganje urne na izabranom groblju ili kolumbarijumu, uz prevoz urne i dogovor sa upravom groblja.",
        url: `${pageUrl}#kremacija-polaganje`,
    },
    {
        name: "Podrška porodici 24/7",
        description: "Naš tim je dostupan 24 sata dnevno kako bi porodica u najtežim trenucima dobila pravovremene informacije i pomoć oko organizacije kremacije.",
        url: `${pageUrl}#podrska-24-7`,
    },
];

const municipalities = [
    "Novi Beograd",
    "Zemun",
    "Vračar",
    "Stari Grad (Dorćol)",
    "Čukarica",
    "Palilula",
    "Savski Venac",
    "Voždovac",
    "Zvezdara",
    "Rakovica",
    "Surčin",
    "Grocka",
    "Mladenovac",
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
                "Pogrebno preduzeće Mir Anđela pruža profesionalne usluge kremacije i polaganja urne na teritoriji Beograda.",
            image: `${siteUrl}/og-image.jpg`,
            areaServed: {
                "@type": "City",
                name: "Belgrade",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Belgrade",
                    addressCountry: "RS",
                },
            },
        },
        {
            "@type": "WebPage",
            "@id": `${pageUrl}/#webpage`,
            url: pageUrl,
            name: "Kremacija Beograd",
            description:
                "Profesionalna kremacija u Beogradu — organizacija kremacije, prevoz pokojnika, dokumentacija i zakazivanje termina krematorijuma.",
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
                    item: `${siteUrl}/pogrebne-usluge`,
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Kremacija",
                    item: pageUrl,
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": `${pageUrl}/#services`,
            name: "Usluge kremacije",
            description: "Pregled usluga kremacije koje pogrebno preduzeće Mir Anđela pruža na teritoriji Beograda.",
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
                        "@type": "City",
                        name: "Belgrade",
                    },
                },
            })),
        },
        {
            "@type": "ItemList",
            "@id": `${pageUrl}/#municipalities`,
            name: "Kremacija po opštinama Beograda",
            description: "Usluge kremacije dostupne na teritoriji beogradskih opština.",
            itemListElement: municipalities.map((municipality, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                    "@type": "Place",
                    name: municipality,
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: municipality,
                        addressRegion: "Belgrade",
                        addressCountry: "RS",
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

export default function KremacijaLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
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
