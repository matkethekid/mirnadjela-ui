import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import { Noto_Serif } from "next/font/google";
import Image from "next/image";

const notoSerif = Noto_Serif({
  subsets: ["latin-ext"],
  weight: ["400"],
  display: "swap"
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true,
});

const page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center mx-auto">
      <Navbar/>
      <main className="w-full flex-1 flex flex-col justify-center items-center bg-[#001233] gap-7 p-5 lg:p-0">
        <h1 className={`${notoSerif.className} text-5xl lg:text-6xl text-[#D4AF37]`}>Naša Priča i Vrednosti</h1>
        <div className="w-80 h-px bg-linear-100 from-[#001233] via-[#D4AF37] to-[#001233]"></div>
        <p className="text-center lg:max-w-137.5 text-white">
          Mir Anđela pruža oslonac porodicama u najtežim trenucima.
          Naša misija je da svaku uslugu obavimo sa dubokim poštovanjem, profesionalizmom i empatijom, čuvajući sećanje na vašenajmilije sa dostojanstvom koje zaslužuju.
        </p>
        <div className="flex flex-col lg:flex-row gap-2 items-stretch w-full flex-1 max-w-7xl">
          <div className="w-full lg:w-2/3 flex flex-1 flex-col gap-5 p-10 bg-[#071A3B] relative">
            <h2 className={`${notoSerif.className} text-4xl text-[#D4AF37]`}>Istorija Poverenja</h2>
            <div className="flex flex-col gap-3">
              <p className="text-white max-w-100">Osnovani sa vizijom da pružimo više od puke usluge, Mir Anđela je izrastao u instituciju kojoj se veruje. Kroz generacije smo učili i usavršavali naš pristup, shvatajući da je svaki ispraćaj jedinstven i da zahteva pažnju posvećenu detaljima.</p>
              <p className="text-white max-w-100">Naše iskustvo nam omogućava da preuzmemo teret organizacije sa vaših pleća, omogućavajući vam da se u miru oprostite od voljenih. Od prvog kontakta do samog kraja, mi smo tu, tiho prisutni i uvek spremni da pomognemo.</p>
            </div>
            <Image src={"/icons/aboutusbg.svg"} alt="building image" width={150} height={150} className="absolute right-0 bottom-0 opacity-5"/>
          </div>
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            <div className="flex w-full h-1/2 p-4 bg-[#071A3B] flex-col gap-2 justify-center items-center text-center text-white">
              <Image src={"/icons/handheart.svg"} alt="hand" width={30} height={30}/>
              <p className={`${notoSerif.className} text-2xl`}>Empatija</p>
              <p className="max-w-75">Razumemo vaš bol i pristupamo svakoj porodici sa iskrenim saosećanjem i strpljenjem.</p>
            </div>
            <div className="flex w-full h-1/2 p-4 bg-[#071A3B] flex-col gap-2 justify-center items-center text-center text-white">
              <Image src={"/icons/judge.svg"} alt="hand" width={30} height={30}/>
              <p className={`${notoSerif.className} text-2xl`}>Profesionalizam</p>
              <p className="max-w-75">Visoki standardi usluge i besprekorna organizacija u trenucima kada vam je to najpotrebnije.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default page;