import type { Metadata } from "next";

const siteUrl = "https://pogrebnomirandjela.rs";
const pageUrl = `${siteUrl}/pogrebne-usluge/organizacija-sahrane`;

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: "Organizacija sahrane Beograd | Pogrebne usluge Mir Anđela",
    description: "Kompletna organizacija sahrane u Beogradu. Prevoz pokojnika, pogrebna oprema, dokumentacija, zakazivanje sahrane i koordinacija svih potrebnih usluga. Dostupni 24/7.",
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
        "pomoć nakon smrti Beograd",
        "pogrebne usluge Novi Beograd",
        "pogrebne usluge Zemun",
        "pogrebne usluge Vračar",
        "pogrebne usluge Čukarica",
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
        title: "Organizacija sahrane Beograd – Pogrebne usluge Mir Anđela",
        description: "Kompletna organizacija sahrane u Beogradu, uključujući prevoz pokojnika, pogrebnu opremu, dokumentaciju i koordinaciju svih potrebnih usluga. Dostupni 24/7.",
    },
    twitter: {
        card: "summary_large_image",
        title:
            "Organizacija sahrane Beograd – Mir Anđela",
        description:
            "Kompletna organizacija sahrane u Beogradu. Prevoz pokojnika, pogrebna oprema, dokumentacija i podrška porodici 24/7.",
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
        description: "Preuzimamo organizaciju svih ključnih aktivnosti vezanih za sahranu, od prvog kontakta sa porodicom do koordinacije pogrebne ceremonije i ispraćaja.",
        url: `${pageUrl}#kompletna-organizacija`,
    },
    {
        name: "Prevoz pokojnika",
        description: "Organizujemo siguran i dostojanstven prevoz pokojnika na teritoriji Beograda, kao i preuzimanje pokojnika sa adrese, zdravstvene ustanove ili druge lokacije.",
        url: `${pageUrl}#prevoz-pokojnika`,
    },
    {
        name: "Pogrebna oprema",
        description: "Obezbeđujemo kompletnu pogrebnu opremu potrebnu za organizaciju sahrane, uključujući sanduke, vence, cveće i ostale elemente ispraćaja.",
        url: `${pageUrl}#pogrebna-oprema`,
    },
    {
        name: "Dokumentacija i administracija",
        description: "Pružamo pomoć porodici pri prikupljanju potrebne dokumentacije i obavljanju administrativnih procedura koje prate organizaciju sahrane.",
        url: `${pageUrl}#dokumentacija`,
    },
    {
        name: "Zakazivanje sahrane",
        description: "Pomažemo u organizaciji i zakazivanju termina sahrane, uz koordinaciju sa nadležnim službama i grobljem kako bi ceo proces protekao bez dodatnog opterećenja za porodicu.",
        url: `${pageUrl}#zakazivanje-sahrane`,
    },
    {
        name: "Podrška porodici 24/7",
        description: "Naš tim je dostupan 24 sata dnevno kako bi porodica u najtežim trenucima dobila pravovremene informacije, pomoć i podršku u organizaciji sahrane.",
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
                "Pogrebno preduzeće Mir Anđela pruža kompletnu organizaciju sahrana, pogrebne usluge i prevoz pokojnika na teritoriji Beograda.",
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
                "Kompletna organizacija sahrane u Beogradu, uključujući prevoz pokojnika, pogrebnu opremu, dokumentaciju, zakazivanje sahrane i koordinaciju pogrebnih usluga.",
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
            description: "Pregled usluga koje pogrebno preduzeće Mir Anđela pruža u okviru organizacije sahrane u Beogradu.",
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
            description: "Pogrebne usluge i organizacija sahrana dostupne na teritoriji beogradskih opština.",
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
}
