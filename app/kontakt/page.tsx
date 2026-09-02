import Navbar from "@/components/Navbar";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import dynamic from "next/dynamic";
import { Noto_Serif } from "next/font/google";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
        </div>
        <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-0 rounded-[4px] overflow-hidden border border-[#D4AF37]/30">
          <div className="w-full lg:w-3/5 flex flex-col gap-5 bg-[#071A3B] p-8 lg:p-10">
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl lg:text-3xl text-[#D4AF37]">Pošaljite nam poruku</h3>
              <div className="w-full h-px bg-[#D4AF37]/30" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-white/80 text-sm">Ime i Prezime</label>
                <Input
                  type="text"
                  placeholder="Unesite vaše ime"
                  className="bg-[#001233] border-[#D4AF37]/30 text-white placeholder:text-white/30 focus:border-[#D4AF37] rounded-[4px]"
                />
              </div>
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="text-white/80 text-sm">Telefon</label>
                <Input
                  type="tel"
                  placeholder="Vaš broj telefona"
                  className="bg-[#001233] border-[#D4AF37]/30 text-white placeholder:text-white/30 focus:border-[#D4AF37] rounded-[4px]"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-white/80 text-sm">Email adresa (Opciono)</label>
              <Input
                type="email"
                placeholder="Vaša email adresa"
                className="bg-[#001233] border-[#D4AF37]/30 text-white placeholder:text-white/30 focus:border-[#D4AF37] rounded-[4px]"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-white/80 text-sm">Poruka</label>
              <Textarea
                placeholder="Kako vam možemo pomoći?"
                rows={5}
                className="bg-[#001233] border-[#D4AF37]/30 text-white placeholder:text-white/30 focus:border-[#D4AF37] rounded-[4px] resize-none"
              />
            </div>
            <button
              type="button"
              className="w-fit py-3 px-6 bg-[#D4AF37] text-[#001233] font-semibold rounded-[4px] hover:bg-[#c49b2e] transition-colors"
            >
              Pošalji Poruku
            </button>
          </div>
          <div className="w-full lg:w-2/5 flex flex-col">
            <div className="flex flex-col gap-2 bg-[#071A3B] border-t lg:border-t-0 lg:border-l border-[#D4AF37]/30 p-6 lg:p-8">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#D4AF37]" />
                <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wider">Adresa</span>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Jurija Gagarina 70<br />
                Beograd, Srbija
              </p>
            </div>
            <div className="flex flex-col gap-2 bg-[#071A3B] border-t border-[#D4AF37]/30 lg:border-l p-6 lg:p-8">
              <div className="flex items-center gap-2">
                <MessageCircle size={16} className="text-[#D4AF37]" />
                <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wider">Kontakt Podaci</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-white/80 text-sm flex items-center gap-2">
                  <span className="text-[#D4AF37]">◆</span>
                  Mob: +381 692005880, +381 63251434
                </p>
                <p className="text-white/80 text-sm flex items-center gap-2">
                  <span className="text-[#D4AF37]">◆</span>
                  Email: info@pogrebnomirandjela.rs
                </p>
              </div>
            </div>
            <div className="flex-1 min-h-48 border-t border-[#D4AF37]/30 lg:border-l overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.5!2d20.4589!3d44.8183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zS3JhbGphIFBldHJhIEkgNDUsIEJlb2dyYWQ!5e0!3m2!1ssr!2srs!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "192px", filter: "grayscale(30%) invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokacija Mir Anđela"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default page;