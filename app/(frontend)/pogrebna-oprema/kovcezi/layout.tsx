import type { Metadata } from "next";

const siteUrl = "https://pogrebnomirandjela.rs";
const pageUrl = `${siteUrl}/pogrebna-oprema/kovcezi`;

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),

    title: "Kovčezi | Pogrebna oprema – Mir Anđela",

    description:
        "Pogledajte ponudu kovčega za sahranu preduzeća Mir Anđela. Dostupni su različiti modeli i stilovi kovčega, izrađeni uz pažnju prema kvalitetu i dostojanstvu.",

    keywords: [
        "kovčezi",
        "kovčezi za sahranu",
        "pogrebni kovčezi",
        "kovčezi Srbija",
        "kovčezi Novi Sad",
        "pogrebna oprema",
        "pogrebna oprema Novi Sad",
        "sanduci za sahranu",
        "pogrebni sanduci",
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

        title: "Kovčezi | Pogrebna oprema – Mir Anđela",

        description:
            "Ponuda kovčega za sahranu preduzeća Mir Anđela. Pogledajte dostupne modele i izaberite kovčeg koji odgovara potrebama pogrebne ceremonije.",

        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Kovčezi – Pogrebna oprema Mir Anđela",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title: "Kovčezi | Pogrebna oprema – Mir Anđela",

        description:
            "Ponuda kovčega za sahranu preduzeća Mir Anđela.",

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
                "Pogrebno preduzeće Mir Anđela pruža kompletne pogrebne usluge i pogrebnu opremu.",

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

            name: "Kovčezi | Pogrebna oprema – Mir Anđela",

            description:
                "Ponuda kovčega za sahranu preduzeća Mir Anđela.",

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
                    name: "Pogrebna oprema",
                    item: `${siteUrl}/pogrebna-oprema`,
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Kovčezi",
                    item: pageUrl,
                },
            ],
        },
    ],
};

export default function KovceziLayout({
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
