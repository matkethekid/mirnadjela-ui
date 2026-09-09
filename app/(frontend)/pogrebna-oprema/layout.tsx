import type { Metadata } from "next";

const siteUrl = "https://pogrebnomirandjela.rs";
const pageUrl = `${siteUrl}/pogrebna-oprema`;

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: "Pogrebna oprema | Sanduci i pogrebni proizvodi – Pogrebne usluge Mir Anđela",
    description:
        "Pogrebna oprema Mir Anđela – pogledajte ponudu sanduka i druge pogrebne opreme za dostojanstven ispraćaj. Kvalitetna oprema uz profesionalnu i diskretnu uslugu.",
    keywords: [
        "pogrebna oprema",
        "pogrebna oprema Srbija",
        "pogrebna oprema Novi Sad",
        "pogrebni proizvodi",
        "sanduci za sahranu",
        "pogrebni sanduci",
        "sanduci za sahranu Srbija",
        "oprema za sahranu",
        "oprema za sahrane",
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
            "Pogrebna oprema | Sanduci i pogrebni proizvodi – Mir Anđela",

        description:
            "Pogledajte ponudu pogrebne opreme, sanduka i drugih proizvoda za dostojanstven ispraćaj. Mir Anđela pruža profesionalnu i diskretnu uslugu.",

        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Pogrebna oprema Mir Anđela",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title:
            "Pogrebna oprema | Sanduci i pogrebni proizvodi – Mir Anđela",

        description:
            "Pogrebna oprema i sanduci za dostojanstven ispraćaj. Pogledajte ponudu preduzeća Mir Anđela.",

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

const products = [
    {
        name: "Polukovčeg 01",
        description:
            "Polukovčeg namenjen za dostojanstven ispraćaj, izrađen uz pažnju prema detaljima i kvalitetu završne obrade.",
        url: `${pageUrl}#polukovceg-01`,
    },
    {
        name: "Polukovčeg 02",
        description:
            "Polukovčeg klasičnog i elegantnog dizajna, namenjen za dostojanstven ispraćaj i potrebe pogrebne ceremonije.",
        url: `${pageUrl}#polukovceg-02`,
    },
    {
        name: "Polukovčeg 03",
        description:
            "Polukovčeg kvalitetne izrade i dostojanstvenog izgleda, namenjen za pogrebne ceremonije.",
        url: `${pageUrl}#polukovceg-03`,
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
                "Pogrebno preduzeće Mir Anđela pruža kompletne pogrebne usluge i pogrebnu opremu, uključujući sanduke i druge proizvode potrebne za dostojanstven ispraćaj.",

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

            publisher: {
                "@id": `${siteUrl}/#funeral-home`,
            },

            inLanguage: "sr-RS",
        },

        {
            "@type": "CollectionPage",
            "@id": `${pageUrl}/#webpage`,

            url: pageUrl,

            name:
                "Pogrebna oprema | Sanduci i pogrebni proizvodi – Mir Anđela",

            description:
                "Ponuda pogrebne opreme i proizvoda preduzeća Mir Anđela, uključujući polukovčege i drugu opremu za dostojanstven ispraćaj.",

            isPartOf: {
                "@id": `${siteUrl}/#website`,
            },

            about: {
                "@id": `${siteUrl}/#funeral-home`,
            },

            breadcrumb: {
                "@id": `${pageUrl}/#breadcrumb`,
            },

            mainEntity: {
                "@id": `${pageUrl}/#products`,
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
                    name: "Pogrebna oprema",
                    item: pageUrl,
                },
            ],
        },

        {
            "@type": "ItemList",
            "@id": `${pageUrl}/#products`,

            name: "Pogrebna oprema Mir Anđela",

            description:
                "Pregled pogrebne opreme i proizvoda koje nudi pogrebno preduzeće Mir Anđela.",

            numberOfItems: products.length,

            itemListOrder: "https://schema.org/ItemListOrderAscending",

            itemListElement: products.map((product, index) => ({
                "@type": "ListItem",

                position: index + 1,

                item: {
                    "@type": "Product",

                    name: product.name,

                    description: product.description,

                    url: product.url,

                    brand: {
                        "@type": "Brand",
                        name: "Mir Anđela",
                    },

                    manufacturer: {
                        "@id": `${siteUrl}/#funeral-home`,
                    },
                },
            })),
        },
    ],
};

export default function PogrebnaOpremaLayout({
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
