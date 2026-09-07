import type { Metadata } from "next";

const siteUrl = "https://pogrebnomirandjela.rs";
const pageUrl = `${siteUrl}/pogrebne-usluge/ketering`;

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: "Ketering za sahrane i daće Beograd | Pogrebne usluge Mir Anđela",
    description:
        "Ketering za sahrane, daće i parastose u Beogradu. Organizacija hrane i posluženja prema potrebama porodice, uz profesionalnu i diskretnu uslugu.",
    keywords: [
        "ketering za sahrane Beograd",
        "ketering za sahranu",
        "ketering za daću",
        "ketering za parastos",
        "hrana za daću",
        "hrana za sahranu",
        "posluženje za sahranu",
        "organizacija daće",
        "ketering Beograd",
        "pogrebni ketering",
        "ketering nakon sahrane",
        "ketering za pomen",
        "daća Beograd",
        "parastos Beograd",
        "sahrana Beograd",
        "pogrebne usluge Beograd",
        "pogrebno preduzeće Beograd",
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
        title: "Ketering za sahrane i daće u Beogradu | Mir Anđela",
        description:
            "Organizacija keteringa za sahrane, daće i parastose u Beogradu. Diskretna i profesionalna usluga prema potrebama porodice.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ketering za sahrane i daće – Mir Anđela",
        description:
            "Ketering za sahrane, daće i parastose u Beogradu. Organizacija hrane i posluženja prema potrebama porodice.",
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
        name: "Ketering za sahrane",
        description:
            "Organizujemo ketering i posluženje za porodicu i goste nakon sahrane, u skladu sa brojem osoba i željama porodice.",
        url: `${pageUrl}#ketering-sahrana`,
    },
    {
        name: "Ketering za daće",
        description:
            "Pružamo kompletnu organizaciju hrane i posluženja za daću, uz mogućnost prilagođavanja menija broju gostiju i potrebama porodice.",
        url: `${pageUrl}#ketering-daca`,
    },
    {
        name: "Ketering za parastose i pomene",
        description:
            "Organizujemo posluženje za parastose, pomene i druge prilike kada porodica želi da obezbedi hranu i posluženje za prisutne.",
        url: `${pageUrl}#parastos-pomen`,
    },
    {
        name: "Hrana i posluženje po dogovoru",
        description:
            "Meni, količinu hrane i način posluživanja prilagođavamo potrebama porodice, broju gostiju i mestu održavanja.",
        url: `${pageUrl}#hrana-posluzenje`,
    },
    {
        name: "Organizacija keteringa",
        description:
            "Preuzimamo organizaciju keteringa kako porodica ne bi morala dodatno da se bavi nabavkom, pripremom i organizacijom posluženja.",
        url: `${pageUrl}#organizacija`,
    },
    {
        name: "Podrška porodici 24/7",
        description:
            "Dostupni smo 24 sata dnevno za informacije i dogovor oko organizacije pogrebnih usluga i keteringa.",
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
                "Pogrebno preduzeće Mir Anđela pruža profesionalne pogrebne usluge, uključujući organizaciju keteringa za sahrane, daće, parastose i pomene.",
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
            name: "Ketering za sahrane i daće u Beogradu",
            description:
                "Ketering za sahrane, daće, parastose i pomene u Beogradu. Organizacija hrane i posluženja prema potrebama porodice.",
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
                    name: "Ketering",
                    item: pageUrl,
                },
            ],
        },
        {
            "@type": "ItemList",
            "@id": `${pageUrl}/#services`,
            name: "Ketering za sahrane i daće",
            description:
                "Pregled usluga keteringa koje pogrebno preduzeće Mir Anđela pruža porodicama u Beogradu.",
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
            name: "Ketering za sahrane po opštinama Beograda",
            description:
                "Organizacija keteringa za sahrane, daće, parastose i pomene na teritoriji beogradskih opština.",
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

export default function KeteringLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
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
