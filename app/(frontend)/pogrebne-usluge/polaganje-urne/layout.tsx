import type { Metadata } from "next";

const siteUrl = "https://pogrebnomirandjela.rs";
const pageUrl = `${siteUrl}/pogrebne-usluge/polaganje-urne`;

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: "Polaganje urne Beograd | Pogrebne usluge Mir Anđela",
    description: "Profesionalno polaganje urne u Beogradu. Prevoz urne, zakazivanje termina, dogovor sa grobljem i kompletna organizacija polaganja. Dostupni 24/7.",
    keywords: [
        "polaganje urne Beograd",
        "polaganje urne cena",
        "polaganje urne groblje",
        "prevoz urne Beograd",
        "kremacija i polaganje urne",
        "organizacija polaganja urne",
        "polaganje urne Novo groblje",
        "polaganje urne Bežanijsko groblje",
        "polaganje urne Zemunsko groblje",
        "polaganje urne Orlovača",
        "polaganje urne Lešće",
        "pogrebne usluge Beograd",
        "pogrebno preduzeće Beograd",
        "polaganje urne Novi Beograd",
        "polaganje urne Zemun",
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
        title: "Polaganje urne u Beogradu – Pogrebne usluge Mir Anđela",
        description: "Profesionalno polaganje urne u Beogradu. Prevoz urne, zakazivanje termina, dogovor sa grobljem i kompletna organizacija polaganja. Dostupni 24/7.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Polaganje urne u Beogradu – Mir Anđela",
        description: "Profesionalno polaganje urne u Beogradu. Prevoz urne, zakazivanje termina, dogovor sa grobljem i kompletna organizacija. Dostupni 24/7.",
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
        name: "Kompletna organizacija polaganja urne",
        description: "Preuzimamo kompletnu organizaciju polaganja urne — od dogovora sa grobljem i pripreme dokumentacije do samog čina polaganja, uz poštovanje svih propisanih procedura.",
        url: `${pageUrl}#kompletna-organizacija`,
    },
    {
        name: "Prevoz urne",
        description: "Organizujemo siguran i dostojanstven prevoz urne na teritoriji Beograda, sa bilo koje adrese do izabranog groblja.",
        url: `${pageUrl}#prevoz-urne`,
    },
    {
        name: "Dogovor sa grobljem",
        description: "Obavljamo sve neophodne konsultacije i dogovore sa upravama groblja u Beogradu oko termina, mesta i uslova polaganja urne.",
        url: `${pageUrl}#dogovor-sa-grobljem`,
    },
    {
        name: "Zakazivanje termina polaganja",
        description: "Pomažemo u zakazivanju termina polaganja urne kod nadležnih službi, čime porodici štedimo vreme i dodatni stres.",
        url: `${pageUrl}#zakazivanje-termina`,
    },
    {
        name: "Polaganje urne na grobljima u Beogradu",
        description: "Polaganje urne organizujemo na svim beogradskim grobljima — Novo groblje, Bežanijsko groblje, Zemunsko groblje, Orlovača, Lešće i druga gradska groblja.",
        url: `${pageUrl}#groblja`,
    },
    {
        name: "Podrška porodici 24/7",
        description: "Naš tim je dostupan 24 sata dnevno kako bi porodica u najtežim trenucima dobila pravovremene informacije i pomoć oko polaganja urne.",
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
                "Pogrebno preduzeće Mir Anđela pruža profesionalne usluge polaganja urne i kremacije na teritoriji Beograda.",
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
            name: "Polaganje urne Beograd",
            description:
                "Profesionalno polaganje urne u Beogradu — prevoz urne, zakazivanje termina, dogovor sa grobljem i kompletna organizacija polaganja.",
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
                    name: "Polaganje urne",
                    item: pageUrl,
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": `${pageUrl}/#services`,
            name: "Usluge polaganja urne",
            description: "Pregled usluga polaganja urne koje pogrebno preduzeće Mir Anđela pruža na teritoriji Beograda.",
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
            name: "Polaganje urne po opštinama Beograda",
            description: "Usluge polaganja urne dostupne na teritoriji beogradskih opština.",
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

export default function PolaganjeUrneLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
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
