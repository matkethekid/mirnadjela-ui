import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import { Noto_Serif } from "next/font/google";
import { MapPin, Landmark, Building2 } from "lucide-react";
import Link from "next/link";

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true,
});

const notoSerif = Noto_Serif({
  subsets: ["latin-ext"],
  weight: ["400"],
  display: "swap"
});

const featuredMunicipalities = [
  {
    title: "Novi Beograd",
    icon: <Building2 size={20} />,
    description: "Kompletne pogrebne usluge, organizacija sahrana na Novom Beogradu, bežanijskog groblja i prevoza pokojnika sa teritorije opštine Novi Beograd.",
    href: "/pogrebne-usluge/prevoz-pokojnika/novi-beograd"
  },
  {
    title: "Zemun",
    icon: <Landmark size={20} />,
    description: "Pružamo podršku porodicama u Zemunu, uz obezbeđivanje potrebne dokumentacije, opreme i organizaciju dostojanstvenog ispraćaja.",
    href: "/pogrebne-usluge/prevoz-pokojnika/zemun"
  },
  {
    title: "Vračar",
    icon: <MapPin size={20} />,
    description: "Brza i efikasna organizacija pogrebnih usluga na Vračaru, prilagođena vašim potrebama sa poštovanjem svih običaja i procedura.",
    href: "/pogrebne-usluge/prevoz-pokojnika/vracar"
  },
  {
    title: "Dorćol (Stari Grad)",
    icon: <Landmark size={20} />,
    description: "Delujemo širom teritorije Starog Grada i Dorćola. Obezbeđujemo kompletnu logistiku i prevoz specijalizovanim vozilima.",
    href: "/pogrebne-usluge/prevoz-pokojnika/dorcol"
  },
  {
    title: "Čukarica",
    icon: <MapPin size={20} />,
    description: "Pokrivamo celokupnu teritoriju opštine Čukarica, uključujući Banovo brdo, Žarkovo, Cerak i okolna naselja. Naš tim je dostupan 24/7.",
    href: "/pogrebne-usluge/prevoz-pokojnika/cukarica"
  }
];

const otherMunicipalities = [
  "Palilula", "Voždovac", "Zvezdara", "Rakovica", "Surčin", "Grocka", "Mladenovac"
];

const page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center mx-auto">
      <Navbar/>
      <main className="w-full flex flex-col flex-1 bg-[#001233] justify-center items-center text-center p-5 pb-20">
        <div className="flex flex-col items-center mb-20">
          <h1 className={`text-4xl lg:text-6xl text-white max-w-200 leading-10 lg:leading-18 ${notoSerif.className}`}>
            Pogrebne usluge i prevoz pokojnika po opštinama Beograda
          </h1>
          <p className="max-w-150 text-center text-[#C5C6D2] mt-6 text-lg leading-relaxed">
            Pružamo dostojanstvene, profesionalne i pravovremene usluge organizacije sahrana, prevoza pokojnika i celokupne pogrebne opreme na teritoriji celog Beograda. Naš tim je dostupan 24/7 kako bi vam pružio podršku u najtežim trenucima.
          </p>
        </div>
        <div className="w-full max-w-6xl text-left mb-20">
          <h2 className={`text-3xl lg:text-4xl text-white mb-10 ${notoSerif.className}`}>Istaknute Opštine</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredMunicipalities.map((item, index) => (
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
        <div className="w-full max-w-6xl text-left">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h2 className={`text-3xl lg:text-4xl text-white mb-6 ${notoSerif.className}`}>Takođe pokrivamo</h2>
              <p className="text-[#C5C6D2] text-sm leading-relaxed">
                Naše usluge su dostupne i u ostalim opštinama Beograda. Garantujemo isti nivo profesionalizma, brzine i poštovanja.
              </p>
            </div>
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
                {otherMunicipalities.map((municipality, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-[#C9A227]">
                      <MapPin size={18} />
                    </span>
                    <span className="text-[#C5C6D2] text-sm">{municipality}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default page;