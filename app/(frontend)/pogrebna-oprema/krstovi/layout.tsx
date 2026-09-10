import type { Metadata } from "next";

const siteUrl = "https://pogrebnomirandjela.rs";
const pageUrl = `${siteUrl}/pogrebna-oprema/krstovi`;

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),

    title: "Krstovi | Pogrebna oprema – Mir Anđela",

    description:
        "Pogledajte ponudu krstova preduzeća Mir Anđela. Pažljivo odabrani krstovi za dostojanstveno obeležavanje mesta večnog počinka.",

    keywords: [
        "krstovi",
        "pogrebni krstovi",
        "krstovi za groblje",
        "krstovi za grob",
        "krstovi Novi Sad",
        "krstovi Srbija",
        "pogrebna oprema",
        "pogrebna oprema Novi Sad",
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

        title: "Krstovi | Pogrebna oprema – Mir Anđela",

        description:
            "Pažljivo odabrani krstovi za dostojanstveno obeležavanje mesta večnog počinka.",

        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Krstovi – Pogrebna oprema Mir Anđela",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title: "Krstovi | Pogrebna oprema – Mir Anđela",

        description:
            "Ponuda krstova preduzeća Mir Anđela.",

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

            name: "Krstovi | Pogrebna oprema – Mir Anđela",

            description:
                "Ponuda krstova preduzeća Mir Anđela.",

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
                    name: "Krstovi",
                    item: pageUrl,
                },
            ],
        },
    ],
};

export default function KrstoviLayout({
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
