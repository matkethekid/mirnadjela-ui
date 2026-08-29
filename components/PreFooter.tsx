import Image from "next/image";

interface Item {
    id: number;
    title: string;
    text: string;
    icon: string;
};

const items: Item[] = [
    {
        id: 0,
        title: "MIR ANĐELA",
        text: "Pogrebne usluge Vaš oslonac u teškim trenucima",
        icon: "/icons/mappin.svg"
    },
    {
        id: 1,
        title: "24H DOSTUPNI",
        text: "+381 692005880",
        icon: "/icons/phone.svg"
    },
    {
        id: 2,
        title: "E-MAIL",
        text: "info@pogrebnomirandjela.rs",
        icon: "/icons/envelope.svg"
    },
    {
        id: 3,
        title: "WEB SAJT",
        text: "pogrebnomirandjela.rs",
        icon: "/icons/globe.svg"
    },
    {
        id: 4,
        title: "PRATITE NAS",
        text: "Facebook",
        icon: "/icons/globe.svg"
    },
];

const PreFooter = () => {
  return (
    <section className="w-full bg-[#001233] text-white border-[1px] border-[#D4AF37]/20 border-l-transparent border-r-transparent">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-stretch justify-center lg:pl-5">
            {items.map((item: Item) => (
                <div key={item.id} className="w-full h-full min-h-22.5 flex items-center justify-start lg:justify-center gap-3 px-5 py-5">
                    <Image
                        src={item.icon}
                        alt={item.title}
                        width={30}
                        height={30}
                        className="shrink-0"
                    />
                    <div className="min-w-0">
                        <p className="text-[#D4AF37] font-medium">
                            {item.title}
                        </p>
                        <p className="text-sm wrap-break-word max-w-57.5">
                            {item.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default PreFooter;