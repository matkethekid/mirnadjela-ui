import React from "react";
import Image from "next/image";

interface Item {
    id: number;
    title: string;
    text: string;
    icon: string;
};

const items: Item[] = [
    { id: 0, title: "24H DOSTUPNOST", text: "Uvek smo tu za vas, dan i noć.", icon: "/icons/clock.svg"},
    { id: 1, title: "ISKUSTVO I POVERENJE", text: "Godinama uz vas u najtežim trenucima.", icon: "/icons/people.svg"},
    { id: 2, title: "POTPUNA PODRŠKA", text: "Brinemo o svim detaljima sa pažnjom i poštovanjem.", icon: "/icons/heart.svg"},
    { id: 3, title: "DOSTOJANSTVENO", text: "Svakom ispraćaju pristupamo sa iskrenim poštovanjem.", icon: "/icons/flower.svg"},
];

const PostHero = () => {
  return (
    <section className="w-full max-w-325 bg-white flex flex-col lg:flex-row py-10 justify-between items-center">
        {items.map((item: Item, index: number) => (
            <React.Fragment key={index}>
                <div>
                    <div className="flex flex-row gap-3">
                        <Image src={item.icon} alt={item.text} width={25} height={25} />
                        <div className="flex flex-col">
                            <p>{item.title}</p>
                            <p className="max-w-sm">{item.text}</p>
                        </div>
                    </div>
                </div>
                {index < items.length - 1 && (
                    <div className="hidden lg:block w-px h-25 bg-[#D4AF37]/20 mx-5" />
                )}
            </React.Fragment>
        ))}
    </section>
  )
}

export default PostHero;