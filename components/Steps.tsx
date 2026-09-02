import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({
    subsets: ["latin-ext"],
    weight: ["600"],
    display: "swap"
});

interface Step {
    id: number;
    index: number;
    title: string;
    text: string;
}

const steps: Step[] = [
    {
        id: 0,
        index: 1,
        title: "PRVI KONTAKT",
        text: "Naša služba dostupna je 24 časa, svakog dana u nedelji. Nakon vašeg poziva, organizujemo brz izlazak našeg tima na adresu.",
    },
    {
        id: 1,
        index: 2,
        title: "PREUZIMANJE",
        text: "Naše stručno osoblje pažljivo i dostojanstveno obavlja preuzimanje pokojnika, uz poštovanje svih potrebnih procedura i protokola.",
    },
    {
        id: 2,
        index: 3,
        title: "PREVOZ",
        text: "Pokojnika prevozimo do kapele, groblja ili druge lokacije po dogovoru sa porodicom, koristeći specijalizovana i klimatizovana vozila.",
    },
    {
        id: 3,
        index: 4,
        title: "ADMINISTRACIJA",
        text: "Pomažemo u organizaciji i završavanju potrebne dokumentacije i administrativnih obaveza, kako bismo porodici olakšali celokupan postupak.",
    },
];

function Steps() {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-12 sm:py-16 flex flex-col gap-4 text-center">
            <h2 className={`text-white ${notoSerif.className} text-4xl`}>Kako izgleda proces saradnje</h2>
            <p className={`text-white ${notoSerif.className} max-w-125 mx-auto`}>Jasno definisan postupak i podrška u svakom koraku, kako biste u svakom trenutku znali šta možete da očekujete od naše službe.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative mt-5">
                <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200 z-0"></div>
                {steps.map((step: Step) => (
                    <div
                        key={step.id}
                        className="group relative flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 z-10"
                    >
                        <div className="w-20 h-20 rounded-full border-4 border-[#1e3050] bg-white flex items-center justify-center mb-6 shadow-sm transition-all duration-300 group-hover:bg-[#1e3050] group-hover:border-[#1e3050]">
                            <span className={`text-3xl font-bold text-[#1e3050] transition-colors duration-300 group-hover:text-white ${notoSerif.className}`}>
                                {step.index < 10 ? `0${step.index}` : step.index}
                            </span>
                        </div>
                        <h3 className={`text-base font-bold text-[#1e3050] uppercase tracking-wider mb-3 ${notoSerif.className}`}>
                            {step.title}
                        </h3>
                        <p className={`text-sm text-slate-500 leading-relaxed ${notoSerif.className}`}>
                            {step.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Steps;