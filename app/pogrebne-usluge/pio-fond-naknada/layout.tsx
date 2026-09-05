import type { Metadata } from "next";

const siteUrl = "https://pogrebnomirandjela.rs";
const pageUrl = `${siteUrl}/pogrebne-usluge/pio-fond-naknada`;

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: "PIO fond naknada za pogrebne troškove | Pogrebne usluge Mir Anđela",
    description:
        "Pomoć oko ostvarivanja prava na naknadu pogrebnih troškova preko PIO fonda. Mir Anđela pomaže oko dokumentacije i postupka za refundaciju pogrebnih troškova u Beogradu.",
    keywords: [
        "PIO fond naknada",
        "PIO fond naknada za pogrebne troškove",
        "naknada pogrebnih troškova PIO",
        "refundacija pogrebnih troškova",
        "povraćaj pogrebnih troškova PIO fond",
        "naknada za sahranu PIO fond",
        "PIO fond sahrana",
        "PIO fond pogrebni troškovi",
        "dokumentacija za PIO fond",
        "zahtev za naknadu pogrebnih troškova",
        "refundacija sahrane",
        "pomoć oko PIO fonda",
        "pogrebne usluge Beograd",
        "pogrebno preduzeće Beograd",
        "sahrana Beograd",
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
        title: "PIO fond naknada za pogrebne troškove | Mir Anđela",
        description:
            "Pomoć oko ostvarivanja prava na naknadu pogrebnih troškova preko PIO fonda. Podrška oko dokumentacije i postupka u Beogradu.",
    },
    twitter: {
        card: "summary_large_image",
        title: "PIO fond naknada za pogrebne troškove – Mir Anđela",
        description:
            "Pomoć oko dokumentacije i postupka za naknadu pogrebnih troškova preko PIO fonda. Dostupni 24/7.",
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
        name: "Pomoć oko naknade pogrebnih troškova",
        description:
            "Pomažemo porodici da se informiše o mogućnosti ostvarivanja prava na naknadu pogrebnih troškova preko PIO fonda i pružamo podršku tokom postupka.",
        url: `${pageUrl}#naknada-pogrebnih-troskova`,
    },
    {
        name: "Priprema dokumentacije za PIO fond",
        description:
            "Pružamo pomoć oko prikupljanja i pripreme dokumentacije potrebne za podnošenje zahteva za naknadu pogrebnih troškova.",
        url: `${pageUrl}#dokumentacija`,
    },
    {
        name: "Podnošenje zahteva",
        description:
            "Pomažemo porodici da pravilno pripremi zahtev i potrebnu dokumentaciju za postupak ostvarivanja prava pred PIO fondom.",
        url: `${pageUrl}#podnosenje-zahteva`,
    },
    {
        name: "Informacije o uslovima za naknadu",
        description:
            "Dajemo informacije o uslovima, potrebnoj dokumentaciji i postupku za ostvarivanje naknade pogrebnih troškova.",
        url: `${pageUrl}#uslovi`,
    },
    {
        name: "Pomoć nakon organizacije sahrane",
        description:
            "Ukoliko je sahrana već organizovana, pružamo podršku porodici u vezi sa dokumentacijom i daljim koracima prema PIO fondu.",
        url: `${pageUrl}#nakon-sahrane`,
    },
    {
        name: "Podrška porodici 24/7",
        description:
            "Naš tim je dostupan 24 sata dnevno za informacije i pomoć u organizaciji pogrebnih usluga i administrativnih procedura.",
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
                "Pogrebno preduzeće Mir Anđela pruža profesionalne pogrebne usluge i pomoć porodicama oko dokumentacije i ostvarivanja prava na naknadu pogrebnih troškova preko PIO fonda.",
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
            name: "PIO fond naknada za pogrebne troškove",
            description:
                "Pomoć oko ostvarivanja prava na naknadu pogrebnih troškova preko PIO fonda, pripreme dokumentacije i podnošenja zahteva u Beogradu.",
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
                    name: "PIO fond naknada",
                    item: pageUrl,
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": `${pageUrl}/#services`,
            name: "Pomoć oko PIO fond naknade",
            description:
                "Pregled usluga i podrške koje pogrebno preduzeće Mir Anđela pruža porodicama u vezi sa naknadom pogrebnih troškova preko PIO fonda.",
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
            name: "PIO fond naknada po opštinama Beograda",
            description:
                "Pomoć porodicama sa teritorije beogradskih opština u vezi sa dokumentacijom i postupkom za naknadu pogrebnih troškova.",
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

export default function PioFondNaknadaLayout({
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
