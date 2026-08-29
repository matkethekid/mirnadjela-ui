import Image from "next/image";
import Link from "next/link";
import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({
    subsets: ["latin-ext"],
    weight: ["400"],
    display: "swap"
});

const AboutUs = () => {
  return (
    <section className="w-full lg:h-[50vh] bg-[#001233] flex flex-col gap-5 lg:gap-0 lg:flex-row p-7 lg:pl-20 lg:pr-10 lg:pt-7 lg:pb-7">
        <div className="flex flex-col gap-3 w-full lg:w-1/2">
            <h3 className={`text-[#D4AF37] text-5xl ${notoSerif.className}`}>O NAMA</h3>
            <p className="text-white max-w-150">
                MIR ANĐELA pruža kompletnu i profesionalnu podršku porodici, uz dostojanstvenu organizaciju poslednjeg ispraćaja i posebnu pažnju prema svakom detalju.
            </p>
            <p className="text-white max-w-125">
                Jer svaki čovek zaslužuje dostojanstven oproštaj,a svaka porodica zaslužuje mir i sigurnost kada joj je najpotrebnije. 
                <br/> Sa poštovanjem prema životu.
                <br/>Sa ljubavlju prema uspomeni.Sa mirom za one koji ostaju.
            </p>
            <Link href={"/onama"} className="pt-3 pb-3 pl-7 pr-7 border border-[#D4AF37] max-w-[200px] text-center text-[#D4AF37] mt-5">SAZNAJTE VIŠE</Link>
        </div>
        <div className="relative border-[1px] border-[#D4AF37]/30 border-t-transparent border-b-transparent flex-1 w-full lg:w-1/2 min-h-[350px]">
            <div className="absolute left-2 right-2 top-0 bottom-0">
                <Image
                    src="/aboutusimage.png"
                    alt="about us image"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="w-69.5 h-26 bg-[#001233]/90 absolute left-3 bottom-3 border-3 border-[#D4AF37] border-r-transparent border-t-transparent border-b-transparent flex justify-center items-center pt-3 pb-3 pl-5 pr-3">
                <p className={`${notoSerif.className} text-[#D4AF37] text-lg`}>"Sačuvajmo uspomenu. Ispratimo dostojanstveno."</p>
            </div>
        </div>
    </section>
  )
}

export default AboutUs;