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
            <Navbar />
            <main className="w-full flex flex-col flex-1 bg-[#001233] pt-5 pb-5 pl-7 pr-7 lg:pl-25 lg:pr-25">
                <div className="flex flex-col gap-5">
                    <h1 className={`${notoSerif.className} text-white text-5xl lg:text-6xl max-w-175 lg:leading-18`}>Posluženje na grobnom mestu u Beogradu</h1>
                    <p className="text-[#C5C6D2] max-w-175">
                        Posluženje na grobnom mestu
                        U trenucima oproštaja želimo da porodici pružimo mir i podršku u svakom detalju. Organizujemo dostojanstveno posluženje na grobnom mestu nakon sahrane, prema vašim željama i običajima.
                        Brinemo o kompletnoj pripremi i posluživanju, kako biste vi mogli da budete uz svoje najmilije, bez dodatnih obaveza.
                        Naša usluga obuhvata:
                        organizaciju posluženja nakon sahrane,
                        Voda, gazirani i ne gazirani sokovi, rakija, vinjak, pelinkovac, kafa, kuglice zita, pogaca i uz svako posluzenje gratis pribor za svestenika po dogovoru pice i hrana po vasoj zelji.
                        Mir Anđela – sa ljubavlju, poštovanjem i dostojanstvom u svakom oproštaju.
                    </p>
                </div>
                <Steps />
                <CtaSection />
            </main>
            <Footer />
        </div>
    );
};

export default page;
