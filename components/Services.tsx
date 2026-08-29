import Image from "next/image";
import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({
    subsets: ["latin-ext"],
    weight: ["400"],
    display: "swap"
});

interface Service {
    id: number;
    title: string;
    text: string;
    icon: string;
};

const services: Service[] = [
    {
        id: 0,
        title: "PREVOZ POKOJNIKA",
        text: "Pogrebna vozila najsavremenije opreme.",
        icon: "/icons/car.svg"
    },
    {
        id: 1,
        title: "ORGANIZACIJA SAHRANE",
        text: "Kompletna organizacija po vašim željama.",
        icon: "/icons/church.svg"
    },
    {
        id: 2,
        title: "pogrebna oprema",
        text: "Širok izbor pogrebne opreme za poslednji ispraćaj.",
        icon: "/icons/flower.svg"
    }
];

const Services = () => {
  return (
    <section className="w-full flex flex-col gap-10 bg-[#0F241A] justify-center items-center p-10">
        <h2 className={`${notoSerif.className} text-4xl text-[#D4AF37]`}>NAŠE USLUGE</h2>
        <div className="flex flex-col lg:flex-row gap-3 items-stretch">
            {services.map((service) => (
                <div key={service.id} className="flex-1 grid grid-rows-[40px_50px_1fr] gap-2 p-4 border border-[#D4AF37]/50 text-center rounded-[4px]">
                    <div className="flex justify-center items-center">
                        <Image src={service.icon} alt={service.title} width={30} height={30}/>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-[#D4AF37] uppercase text-lg">{service.title}</p>
                    </div>
                    <div className="flex justify-center items-start">
                        <p className="text-white max-w-50">{service.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Services;