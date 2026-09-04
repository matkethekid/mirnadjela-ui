import type { Metadata } from "next";

const siteUrl = "https://pogrebnomirandjela.rs";
const pageUrl = `${siteUrl}/pogrebne-usluge/organizacija-sahrane`;

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: "Organizacija sahrane Beograd | Pogrebne usluge Mir Anđela",
    description: "Kompletna organizacija sahrane u Beogradu, dostupna 24/7. Prevoz pokojnika, pogrebna oprema, dokumentacija, zakazivanje termina i koordinacija svih usluga. Pozovite odmah.",
    keywords: [
        "organizacija sahrane Beograd",
        "organizacija sahrana Beograd",
        "sahrana Beograd",
        "pogrebne usluge Beograd",
        "pogrebno preduzeće Beograd",
        "organizacija pogreba Beograd",
        "pogrebna oprema Beograd",
        "prevoz pokojnika Beograd",
        "zakazivanje sahrane Beograd",
        "dokumentacija za sahranu",
        "kremacija Beograd",
        "polaganje urne Beograd",
        "pomoć nakon smrti Beograd",
        "pogrebne usluge Novi Beograd",
        "pogrebne usluge Zemun",
        "pogrebne usluge Vračar",
        "pogrebne usluge Čukarica",
        "pogrebne usluge Palilula",
        "pogrebne usluge Zvezdara",
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
        title: "Organizacija sahrane u Beogradu – Pogrebne usluge Mir Anđela",
        description: "Kompletna organizacija sahrane u Beogradu, dostupna 24/7. Prevoz pokojnika, pogrebna oprema, dokumentacija, zakazivanje termina i koordinacija svih usluga.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Organizacija sahrane u Beogradu – Mir Anđela",
        description: "Kompletna organizacija sahrane u Beogradu, dostupna 24/7. Prevoz pokojnika, pogrebna oprema, dokumentacija, zakazivanje termina i koordinacija svih usluga.",
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
        name: "Kompletna organizacija sahrane",
        description: "Preuzimamo kompletnu organizaciju sahrane — od prvog kontakta sa porodicom, preko svih neophodnih procedura do samog ispraćaja i koordinacije pogrebne ceremonije.",
        url: `${pageUrl}#kompletna-organizacija`,
    },
    {
        name: "Prevoz pokojnika u okviru organizacije sahrane",
        description: "U sklopu organizacije sahrane obezbeđujemo prevoz pokojnika savremenim pogrebnim vozilima, sa bilo koje adrese, bolnice ili staračkog doma do groblja ili krematorijuma.",
        url: `${pageUrl}#prevoz-pokojnika`,
    },
    {
        name: "Pogrebna oprema i dekoracija",
        description: "Pogrebno preduzeće Mir Anđela obezbeđuje kompletnu pogrebnu opremu — sanduke, kovčege, vence, cveće i sve elemente neophodne za dostojanstven ispraćaj.",
        url: `${pageUrl}#pogrebna-oprema`,
    },
    {
        name: "Dokumentacija i administracija",
        description: "Pružamo pomoć porodici pri prikupljanju potrebne dokumentacije i obavljanju administrativnih procedura koje prate organizaciju sahrane.",
        url: `${pageUrl}#dokumentacija`,
    },
    {
        name: "Zakazivanje termina sahrane",
        description: "Pomažemo u organizaciji i zakazivanju termina sahrane, uz koordinaciju sa nadležnim službama, grobljem i sveštenstvom kako bi ceo proces protekao bez dodatnog opterećenja za porodicu.",
        url: `${pageUrl}#zakazivanje-sahrane`,
    },
    {
        name: "Podrška porodici 24/7",
        description: "Naš tim je dostupan 24 sata dnevno, 7 dana u nedelji, kako bi porodica u najtežim trenucima dobila pravovremene informacije, pomoć i podršku u organizaciji sahrane.",
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
                "Pogrebno preduzeće Mir Anđela pruža kompletnu organizaciju sahrane u Beogradu, uključujući prevoz pokojnika, pogrebnu opremu, dokumentaciju i koordinaciju svih potrebnih usluga, dostupno 24/7.",
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
            name: "Organizacija sahrane Beograd",
            description:
                "Kompletna organizacija sahrane u Beogradu, dostupna 24/7. Prevoz pokojnika, pogrebna oprema, dokumentacija, zakazivanje termina i koordinacija svih usluga.",
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
                    name: "Organizacija sahrane",
                    item: pageUrl,
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": `${pageUrl}/#services`,
            name: "Usluge organizacije sahrane",
            description: "Pregled usluga koje pogrebno preduzeće Mir Anđela pruža u okviru organizacije sahrane na teritoriji Beograda.",
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
            name: "Organizacija sahrane po opštinama Beograda",
            description: "Usluge organizacije sahrane dostupne na teritoriji beogradskih opština.",
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

export default function OrganizacijaSahraneLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
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
};
