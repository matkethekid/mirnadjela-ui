import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Noto_Serif } from "next/font/google";
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
    text: string;
    image: string;
    icon: string;
    href: string;
};

const services: Service[] = [
    {
        id: 0,
        title: "Prevoz pokojnika",
        text: "Organizujemo siguran i dostojanstven prevoz preminulih osoba u zemlji i inostranstvu. Naša specijalizovana vozila ispunjavaju sve standarde, obezbeđujući maksimalnu profesionalnost.",
        image: "/services/prevozpokojnika.jpg",
        icon: "/icons/truck.svg",
        href: "/pogrebne-usluge/prevoz-pokojnika"
    },
    {
        id: 1,
        title: "Organizacija sahrane",
        text: "Preuzimamo na sebe kompletnu administraciju i organizaciju ceremonije, omogućavajući vam da se u miru oprostite od voljene osobe bez dodatnog stresa.",
        image: "/services/organizacija.jpg",
        icon: "/icons/church.svg",
        href: "/pogrebne-usluge/organizacija-sahrane"
    },
    {
        id: 2,
        title: "Pogrebna oprema",
        text: "Nudimo pažljivo odabrane cvetne aranžmane, suze i vence izrađene od najsvežijeg cveća, sanduke dizajnirane da na dostojanstven način izraze vaše saučešće i poštovanje.",
        image: "/services/oprema.jpg",
        icon: "/icons/flower.svg",
        href: "/pogrebna-oprema"
    },
    {
        id: 3,
        title: "Administrativna pomoć",
        text: "Pomažemo vam u rešavanju sve neophodne dokumentacije i administrativnih procedura, pružajući vam podršku i rasterećenje u trenucima kada vam je to najpotrebnije.",
        image: "/services/administrativnapomoc.jpg",
        icon: "/icons/paper.svg",
        href: "/pogrebne-usluge/administrativna-pomoc"
    },
    {
        id: 4,
        title: "PIO Fond naknada",
        text: "Pomažemo vam u ostvarivanju prava na refundaciju troškova sahrane preko PIO fonda, pripremajući svu potrebnu dokumentaciju umesto vas.",
        image: "/services/piofondnaknada.jpg",
        icon: "/icons/judgebuilding.svg",
        href: "/pogrebne-usluge/pio-fond-naknada"
    },
    {
        id: 5,
        title: "Ketering",
        text: "Organizujemo dostojanstveno posluženje za pomene i sahrane, uz pažljivo odabran meni i profesionalnu uslugu prilagođenu vašim potrebama.",
        image: "/services/ketering.jpg",
        icon: "/icons/ketering.svg",
        href: "/pogrebne-usluge/ketering"
    },
];

const page = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center mx-auto">
        <Navbar/>
        <main className="w-full flex-1 bg-[#001233] px-4 py-12 sm:px-6 lg:px-12">
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 text-center">
                    <h1 className={`font-serif text-4xl text-[#D6AF55] lg:text-6xl ${notoSerif.className}`}>
                        Naše Usluge
                    </h1>
                    <p className="mx-auto mt-3 max-w-xl text-[1rem] leading-6 text-gray-300">
                        Sa dubokim poštovanjem i pažnjom prema svakom našem klijentu,
                        pružamo kompletnu podršku u najtežim trenucima.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="group overflow-hidden border border-[#183d2a] bg-[#0F241A] transition-all duration-300 hover:-translate-y-1 hover:border-[#28583d]"
                    >
                    <div className="relative aspect-2/1 w-full overflow-hidden">
                        <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                        />
                    </div>
                    <div className="flex min-h-53.75 flex-col items-center px-6 py-5 text-center gap-3">
                        <Image
                            src={service.icon}
                            alt=""
                            width={20}
                            height={20}
                            className="mb-2 h-8 w-8 object-contain"
                        />
                        <div>
                            <h2 className="font-serif text-2xl text-[#D6AF55]">
                                {service.title}
                            </h2>
                            <p className="mt-3 max-w-107.5 text-[0.8rem] leading-[1.7] text-gray-300">
                                {service.text}
                            </p>
                        </div>
                        <Link
                            href={service.href}
                            className="mt-auto bg-[#001F5B] px-5 py-1.5 text-[0.9rem] text-white transition hover:bg-[#002e82]"
                        >
                            Saznaj više
                        </Link>
                    </div>
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