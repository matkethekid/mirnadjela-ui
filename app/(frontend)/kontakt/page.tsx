import Navbar from "@/components/Navbar";
import { Phone } from "lucide-react";
import dynamic from "next/dynamic";
import { Noto_Serif } from "next/font/google";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

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
      <Navbar />
      <main className="w-full flex-1 flex flex-col justify-center items-center bg-[#001233] gap-7 p-5 lg:p-0 py-16">
        <h1 className={`${notoSerif.className} text-4xl md:text-5xl lg:text-6xl text-[#D4AF37] text-center max-w-3xl`}>
          Stojimo Vam na Raspolaganju
        </h1>
        <p className="text-center lg:max-w-137.5 text-white/80">
          U najtežim trenucima, naš tim je tu da vam pruži oslonac, razumevanje i profesionalnu podršku.
        </p>
        <div className="w-full max-w-4xl p-6 lg:p-10 flex gap-5 flex-col lg:flex-row bg-[#071A3B] border border-[#D4AF37]/30 justify-between items-start lg:items-center rounded-[4px]">
          <div className="flex flex-col gap-2 text-white">
            <h2 className="text-[#D4AF37] text-2xl lg:text-3xl font-semibold">
              Hitne Intervencije (00-24h)
            </h2>
            <p className="text-white/80">
              Dostupni smo u svakom trenutku. Pozovite nas ukoliko vam je potrebna hitna pomoć.
            </p>
          </div>
          <Link
            href="tel:+381692005880"
            className="flex flex-row gap-2 py-3 px-6 bg-[#D4AF37] items-center justify-center text-lg font-semibold text-[#001233] rounded-[4px] whitespace-nowrap hover:bg-[#c49b2e] transition-colors"
          >
            <Phone size={18} />
            +381 692005880
          </Link>
          <Link
            href="tel:+381692005880"
            className="flex flex-row gap-2 py-3 px-6 bg-[#D4AF37] items-center justify-center text-lg font-semibold text-[#001233] rounded-[4px] whitespace-nowrap hover:bg-[#c49b2e] transition-colors"
          >
            <Phone size={18} />
            +381 63251434
          </Link>
        </div>
        <ContactForm/>
      </main>
      <Footer />
    </div>
  );
};

export default page;