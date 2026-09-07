import { Noto_Serif } from "next/font/google";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Steps from "@/components/Steps";
import CtaSection from "@/components/CtaSection";

const Footer = dynamic(() => import("@/components/Footer"), {
    ssr: true,
});

const notoSerif = Noto_Serif({
    subsets: ["latin-ext"],
    weight: ["400"],
    display: "swap"
});

const page = () => {
    return (
        <div className="w-full min-h-screen flex flex-col items-center mx-auto">
            <Navbar/>
            <main className="w-full flex flex-col flex-1 bg-[#001233] pt-5 pb-5 pl-7 pr-7 lg:pl-25 lg:pr-25">
                <div className="flex flex-col gap-5">
                    <h1 className={`${notoSerif.className} text-white text-5xl lg:text-6xl max-w-175 lg:leading-18`}>
                        Organizacija sahrane – dostupan 24/7
                    </h1>
                    <p className="text-[#C5C6D2] max-w-175">
                        Pogrebno preduzeće Mir Anđela pruža kompletnu organizaciju sahrane u Beogradu, dostupnu 24 sata dnevno, 7 dana u nedelji. Naš tim preuzima sve ključne obaveze — od prvog kontakta sa porodicom, preko koordinacije sa zdravstvenim ustanovama, grobljem i matičnom službom, do samog čina sahrane i ispraćaja. Usluga organizacije sahrane obuhvata prevoz pokojnika, obezbeđivanje pogrebne opreme, pripremu i vođenje potrebne dokumentacije, zakazivanje termina sahrane, organizaciju verskih obreda i kompletnu logistiku na dan ispraćaja. Organizaciju sahrane vršimo na svim beogradskim grobljima — Novo groblje, Bežanijsko groblje, Zemunsko groblje, Orlovača, Lešće, kao i na grobljima u okolnim opštinama. Usluga je dostupna na teritoriji svih beogradskih opština — Novi Beograd, Zemun, Vračar, Čukarica, Palilula, Zvezdara, Voždovac, Rakovica, Savski Venac i druge. Uz puno poštovanje prema pokojniku i porodici, garantujemo da ceo proces protekne dostojanstveno, mirno i bez dodatnog opterećenja za najbliže. Kontaktirajte nas u svakom trenutku — naš tim je tu da vam olakša najteže trenutke.
                    </p>
                    <Link
                        href="tel:+381692005880"
                        className="flex flex-row gap-2 py-3 px-6 max-w-50 bg-[#D4AF37] items-center justify-center text-lg font-semibold text-[#001233] rounded-[4px] whitespace-nowrap hover:bg-[#c49b2e] transition-colors"
                    >
                        +381 692005880
                    </Link>
                </div>
                <Steps/>
                <CtaSection/>
            </main>
            <Footer/>
        </div>
    )
};

export default page;
