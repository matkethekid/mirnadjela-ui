import Image from "next/image";
import { Noto_Serif } from "next/font/google";
import Link from "next/link";

const notoSerif = Noto_Serif({
    subsets: ["latin-ext"],
    weight: ["400"],
    display: "swap"
});

const Footer = () => {
  return (
    <footer className="w-full bg-[#001233] min-h-40 py-0">
        <div className="w-full mx-auto flex flex-col px-5 lg:px-10 py-2">
            <div className="flex flex-col md:flex-row w-full md:justify-between md:items-center">
                <div className="flex flex-row lg:justify-center items-center">
                    <Image src={"/angel.svg"} width={30} height={30} alt="angel logo" className="w-15 h-15 lg:w-20 lg:h-20"/>
                    <p className={`${notoSerif.className} text-lg text-[#D4AF37]`}>MIR ANĐELA</p>
                </div>
                <ul className="flex flex-col md:flex-row gap-3 text-white text-sm">
                    <li><Link href="/">POČETNA</Link></li>
                    <li><Link href="/onama">O NAMA</Link></li>
                    <li><Link href="/pogrebne-usluge">POGREBNE USLUGE</Link></li>
                    <li><Link href="/kontakt">KONTAKT</Link></li>
                </ul>
            </div>
            <div className="w-full h-px bg-[#D4AF37]/20 mt-3 mb-3"></div>
            <div className="flex justify-start items-center">
                <p className="text-[#F5F5F0] text-sm">© 2026 MIR ANĐELA. SVA PRAVA ZADRŽANA.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;