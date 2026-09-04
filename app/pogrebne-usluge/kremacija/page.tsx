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
                    <h1 className={`${notoSerif.className} text-white text-5xl lg:text-6xl max-w-175 lg:leading-18`}>Polaganje urne Beograd – dostupni 24/7</h1>
                    <p className="text-[#C5C6D2] max-w-175">
                        Mir Anđela pruža pouzdane i profesionalne pogrebne usluge, kao i kompletnu organizaciju polaganja urne na teritoriji Beograda. Na raspolaganju smo 24 časa dnevno, 7 dana u nedelji, uz diskretnu i pažljivu organizaciju svih potrebnih aktivnosti u skladu sa željama i potrebama porodice. Usluga polaganja urne obuhvata organizaciju prevoza urne, dogovor sa grobljem i pripremu za polaganje na odabranom mestu, uz poštovanje svih propisanih procedura. Polaganje urne moguće je organizovati na grobljima širom Beograda, uključujući Novo groblje, Bežanijsko groblje, Zemunско groblje, Orlovaču, Lešće i druga gradska groblja. Naš tim pruža kompletnu podršku porodici tokom organizacije, kako bi ceo postupak protekao dostojanstveno, mirno i bez dodatnog opterećenja za najbliže.
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
}

export default page;