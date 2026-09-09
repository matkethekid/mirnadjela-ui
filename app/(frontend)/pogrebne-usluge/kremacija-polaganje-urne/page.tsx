import { Noto_Serif } from "next/font/google";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
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
                    <h1 className={`${notoSerif.className} text-white text-5xl lg:text-6xl max-w-175 lg:leading-18`}>Kremacija i polaganje urne u Beogradu – dostupni 24/7</h1>
                    <p className="text-[#C5C6D2] max-w-175">
                        U Mir Anđela pružamo kompletnu organizaciju kremacije i polaganja urne, uz profesionalan, diskretan i dostojanstven pristup u svakom trenutku.
                        Naše usluge obuhvataju:
                        Zakazivanje ispraćaja za kremaciju i organizaciju svih neophodnih termina.
                        Zakazivanje polaganja urne na gradskim grobljima u skladu sa željama porodice i propisanim procedurama.
                        Kompletnu organizaciju preuzimanja urne nakon izvršene kremacije.
                        Transport urne za inostranstvo uz organizaciju potrebne dokumentacije.
                        Transport i polaganje urne na vangradskim grobljima širom Srbije.
                        Mir Anđela organizuje usluge kremacije i polaganja urne na teritoriji cele Srbije, uz potpunu podršku porodici od početka do završetka celokupne procedure.
                    </p>
                </div>
                <Steps/>
                <CtaSection/>
            </main>
            <Footer/>
        </div>
    )
}

export default page;