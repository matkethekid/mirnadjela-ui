import Navbar from "@/components/Navbar";
import PostHero from "@/components/PostHero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center mx-auto">
      <Navbar/>
      <main className="w-full h-[70vh] relative bg-[#001233] flex items-center">
        <div className="bg-linear-100 from-[#001233] to-[#001233] absolute inset-0 w-full h-full z-10 opacity-[0.6]"></div>
        <Image src={"/hero.svg"} alt="hero" fill className="object-cover"/>
        <div className="z-30 flex flex-col gap-1 w-full relative max-w-7xl mx-auto p-5 lg:p-10 2xl:p-0">
          <Image src={"/angel.svg"} width={30} height={30} alt="angel logo" className="w-20 h-20 lg:w-30 lg:h-30 -mx-4"/>
          <div>
            <h1 className="text-5xl text-[#D4AF37] lg:text-[4rem]">MIR ANĐELA</h1>
            <div className="flex flex-row gap-1 items-center">
              <div className="bg-[#D4AF37] w-17 lg:w-20 h-px mt-2"></div>
              <span className="mt-1 text-[#D4AF37]">POGREBNE USLUGE</span>
              <div className="bg-[#D4AF37] w-17 lg:w-20 h-px mt-2"></div>
            </div>
            <div className="flex flex-row gap-1 mt-4 text-white text-sm">
              <p>DOSTOJANSTVO</p>
              <span>&middot;</span>
              <p>POŠTOVANJE</p>
              <span>&middot;</span>
              <p>POVERENJE</p>
            </div>
            <p className="text-white mt-2 max-w-125">Tu smo da vam pružimo podršku, razumevanje i profesionalnu uslugu u najtežim trenucima.</p>
          </div>
          <Link href={"/kontakt"} className="pt-3 pb-3 pl-7 pr-7 bg-[#D4AF37] mt-10 max-w-62.5 text-[#002366] text-center rounded-[4px]">KONTAKTIRAJTE NAS</Link>
        </div>
      </main>
      <PostHero/>
    </div>
  );
}
