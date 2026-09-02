import Link from "next/link";
import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({
    subsets: ["latin-ext"],
    weight: ["400"],
    display: "swap"
});

function CtaSection() {
    return (
        <section className="w-full lg:max-w-315 mx-auto p-10 flex flex-col lg:flex-row justify-between items-center bg-[#071A3B] rounded-lg">
            <div className="flex flex-col gap-3">
                <p className={`${notoSerif.className} text-4xl text-[#D4AF37]`}>Dostupni kada je najvažnije</p>
                <p className={`${notoSerif.className} text-white max-w-175`}>Gde god da se nalazite, naš tim je spreman da odgovori na vaš poziv i pruži potrebnu podršku. Obezbeđujemo kompletnu dokumentaciju i dostojanstven prevoz pokojnika, uz poštovanje, diskreciju i najviše standarde profesionalnosti.</p>
            </div>
            <Link href="/kontakt" className="uppercase py-3 px-5 bg-[#D4AF37] justify-center items-center max-h-[50px] rounded-full">kontaktirajte nas</Link>
        </section>
    );
}

export default CtaSection;