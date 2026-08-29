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
    <section className="w-full max-w-325 bg-white py-8 px-5 sm:px-8 lg:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item: Item) => (
                <div key={item.title} className="flex items-start gap-3 py-5 sm:px-6 lg:px-8 border-b border-[#D4AF37]/20 sm:odd:border-r lg:border-b-0 lg:not-last:border-r">
                    <Image
                        src={item.icon}
                        alt={item.text}
                        width={25}
                        height={25}
                        className="shrink-0 mt-1"
                    />
                    <div className="min-w-0">
                        <p className="font-medium">
                            {item.title}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                            {item.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default PostHero;