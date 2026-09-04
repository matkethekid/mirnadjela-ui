import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import { Noto_Serif } from "next/font/google";
import { Sparkle } from "lucide-react";
import Link from "next/link";

const Footer = dynamic(() => import("@/components/Footer"), {
    ssr: true,
});

const notoSerif = Noto_Serif({
    subsets: ["latin-ext"],
    weight: ["400"],
    display: "swap"
});

interface Service {
    id: number;
    title: string;
    icon:  ReactNode;
    description: string;
    href: string;
}

const services: Service[] = [
    {
        id: 0,
        title: "Kremacija",
        icon: <Sparkle size={20} />,
        description: "Kompletna organizacija kremacije u Beogradu uz pomoć oko potrebne dokumentacije, prevoza pokojnika i koordinacije sa krematorijumom. Pružamo porodici profesionalnu i dostojanstvenu podršku tokom celog procesa.",
        href: "/pogrebne-usluge/kremacija"
    },
    {
        id: 1,
        title: "Polaganje urne",
        icon: <Sparkle size={20} />,
        description: "Organizujemo polaganje urne u Beogradu uz obezbeđivanje potrebne dokumentacije, pogrebne opreme i koordinaciju svih detalja. Naš tim pruža pouzdanu podršku porodici i organizuje dostojanstven ispraćaj.",
        href: "/pogrebne-usluge/polaganje-urne"
    },
    {
        id: 2,
        title: "Sahrana",
        icon: <Sparkle size={20} />,
        description: "Kompletna organizacija sahrane u Beogradu, uključujući prevoz pokojnika, pripremu dokumentacije, pogrebnu opremu i koordinaciju svih neophodnih usluga. Dostupni smo porodicama 24/7 uz profesionalan i dostojanstven pristup.",
        href: "/pogrebne-usluge/sahrana"
    },
];

const page = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center mx-auto">
            <Navbar/>
            <main className="w-full flex flex-col flex-1 bg-[#001233] justify-center items-center text-center p-5 pb-20">
                <div className="flex flex-col items-center mb-20">
                    <h1 className={`text-4xl lg:text-6xl text-white max-w-250 leading-10 lg:leading-18 ${notoSerif.className}`}>
                        Pogrebne usluge i kompletna organizacija sahrane
                    </h1>
                    <p className="max-w-150 text-center text-[#C5C6D2] mt-6 text-lg leading-relaxed">
                        Pružamo dostojanstvene, profesionalne i pravovremene usluge organizacije sahrana, prevoza pokojnika i celokupne pogrebne opreme na teritoriji celog Beograda. Naš tim je dostupan 24/7 kako bi vam pružio podršku u najtežim trenucima.
                    </p>
                </div>
                <div className="w-full max-w-6xl text-left mb-20">
                    <h2 className={`text-3xl lg:text-4xl text-white mb-10 ${notoSerif.className}`}>Istaknute Usluge</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((item, index) => (
                            <div key={index} className="bg-[#0A1E42]/70 border border-[#1E3A6B] p-8 rounded-[4px] flex flex-col items-start hover:bg-[#0A1E42] transition-colors duration-300">
                                <div className="w-12 h-12 rounded-full border border-[#C9A227] flex items-center justify-center text-[#C9A227] mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl text-white font-medium mb-4">{item.title}</h3>
                                <p className="text-[#C5C6D2] text-sm leading-relaxed mb-8 flex-1">{item.description}</p>
                                <Link href={item.href} className="text-[#C9A227] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
                                    Detaljnije <span>→</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default page;