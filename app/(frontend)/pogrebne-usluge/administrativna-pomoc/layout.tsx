import type { Metadata } from "next";
import React from "react";

const siteUrl = "https://pogrebnomirandjela.rs";
const pageUrl = `${siteUrl}/pogrebne-usluge/administrativna-pomoc`;

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: "Administrativna pomoć nakon smrti | Pogrebne usluge Mir Anđela",
    description:
        "Administrativna pomoć porodici nakon smrti člana porodice. Pomoć oko dokumentacije, prijava, odjava i organizacije potrebnih administrativnih postupaka u Beogradu.",
    keywords: [
        "administrativna pomoć Beograd",
        "administrativna pomoć nakon smrti",
        "pomoć oko dokumentacije nakon smrti",
        "dokumentacija nakon smrti",
        "administracija nakon smrti",
        "prijava smrti",
        "odjava nakon smrti",
        "izvod iz matične knjige umrlih",
        "smrtovnica",
        "dokumentacija za sahranu",
        "administrativne usluge pogrebno preduzeće",
        "pomoć porodici nakon smrti",
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
        title: "Administrativna pomoć nakon smrti | Mir Anđela",
        description:
            "Pomažemo porodici oko dokumentacije i administrativnih postupaka nakon smrti člana porodice. Diskretna i profesionalna podrška u Beogradu.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Administrativna pomoć nakon smrti – Mir Anđela",
        description:
            "Pomoć oko dokumentacije, prijava, odjava i administrativnih postupaka nakon smrti. Dostupni 24/7.",
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
        name: "Pomoć oko dokumentacije nakon smrti",
        description:
            "Pomažemo porodici da prikupi i pripremi potrebnu dokumentaciju koja prati organizaciju sahrane i administrativne postupke nakon smrti.",
        url: `${pageUrl}#dokumentacija`,
    },
    {
        name: "Pomoć oko smrtovnice",
        description:
            "Pružamo porodici informacije i pomoć u vezi sa dokumentacijom i postupkom potrebnim za izdavanje i korišćenje smrtovnice.",
        url: `${pageUrl}#smrtovnica`,
    },
    {
        name: "Pomoć oko izvoda iz matičnih knjiga",
        description:
            "Pomažemo porodici da se informiše o potrebnim izvodima i dokumentima iz matičnih evidencija nakon smrti člana porodice.",
        url: `${pageUrl}#maticne-knjige`,
    },
    {
        name: "Prijave i odjave",
        description:
            "Pružamo informacije i administrativnu podršku porodici u vezi sa prijavama, odjavama i drugim postupcima koji mogu biti potrebni nakon smrti.",
        url: `${pageUrl}#prijave-odjave`,
    },
    {
        name: "Administrativna podrška za PIO fond",
        description:
            "Pomažemo porodici oko pripreme dokumentacije i informacija potrebnih za postupke koji se odnose na PIO fond i naknadu pogrebnih troškova.",
        url: `${pageUrl}#pio-fond`,
    },
    {
        name: "Podrška porodici 24/7",
        description:
            "Dostupni smo 24 sata dnevno kako biste u teškim trenucima imali podršku i jasne informacije o potrebnim administrativnim koracima.",
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
                "Pogrebno preduzeće Mir Anđela pruža profesionalne pogrebne usluge i administrativnu podršku porodicama nakon smrti člana porodice.",
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
            name: "Administrativna pomoć nakon smrti",
            description:
                "Administrativna pomoć porodici nakon smrti — dokumentacija, smrtovnica, matične knjige, prijave, odjave i podrška oko administrativnih postupaka u Beogradu.",
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
                    name: "Administrativna pomoć",
                    item: pageUrl,
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": `${pageUrl}/#services`,
            name: "Administrativna pomoć",
            description:
                "Pregled administrativne podrške koju pogrebno preduzeće Mir Anđela pruža porodicama nakon smrti člana porodice.",
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
            name: "Administrativna pomoć po opštinama Beograda",
            description:
                "Administrativna podrška porodicama sa teritorije beogradskih opština.",
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

export default function AdministrativnaPomocLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
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
