import { Metadata } from "next";

const baseUrl = "https://pogrebnomirandjela.rs";

export function createOpstinaMetadata(opstina: string): Metadata {
    const title = `Prevoz pokojnika ${opstina} | Pogrebne usluge 24/7 | Mir Anđela`;
    const description = `Profesionalne pogrebne usluge u ${opstina} i prevoz pokojnika 24 časa dnevno. Brz dolazak, diskrecija i kompletna organizacija transporta.`;

    return {
        metadataBase: new URL(baseUrl),
        title,
        description,
        alternates: {
            canonical: `${baseUrl}/pogrebne-usluge/prevoz-pokojnika/${opstina}`,
        },
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: `Prevoz pokojnika ${opstina} – Pogrebne usluge 24/7 | Mir Anđela`,
            description,
            url: `${baseUrl}/pogrebne-usluge/prevoz-pokojnika/${opstina}`,
            siteName: "Mir Anđela",
            locale: "sr_RS",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}