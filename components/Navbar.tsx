"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Noto_Serif } from "next/font/google";
import { Phone, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const notoSerif = Noto_Serif({
    subsets: ["latin-ext"],
    weight: ["400", "600", "800"],
    display: "swap"
});

interface Link {
    id: number;
    name: string;
    path: string;
};

const links: Link[] = [
    { id: 0, name: "POČETNA", path: "/" },
    { id: 1, name: "O NAMA", path: "/onama" },
    { id: 2, name: "USLUGE", path: "/usluge" },
    { id: 3, name: "KONTAKT", path: "/kontakt" }
];

const Navbar = () => {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    useEffect(() => {
        document.body.classList.toggle("no-scroll", isSidebarOpen);

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [isSidebarOpen]);
  return (
    <nav className="w-full h-23 sticky top-0 left-0 bg-[#001233] flex flex-row justify-between p-5 lg:pl-25 lg:pr-25 items-center z-99">
        <div className="flex flex-row gap-5 items-center justify-center z-100">
            <Image src={"/angel.svg"} width={30} height={30} alt="angel logo" className="w-20 h-20"/>
            <Link href={"/"} className={`text-2xl text-[#D4AF37] ${notoSerif.className} hidden md:block`}>MIR ANĐELA</Link>
        </div>
        <div className="hidden lg:flex flex-row gap-10">
            <ul className="flex flex-row gap-4 text-white justify-center items-center">
                {
                    links.map((link: Link, index: number) => (
                        <li key={index}>
                            <Link href={link.path} className={pathname == link.path ? "link" : ""}>{link.name}</Link>
                        </li>
                    ))
                }
            </ul>
            <Link href={"/kontakt"} className="flex flex-row gap-2 bg-transparent justify-center items-center pt-1 pb-1 pl-3 pr-3 text-[#D4AF37] border border-[#D4AF37] rounded-[4px]">
                <Phone/>
                <div className="flex flex-col">
                    <p className="text-sm">24H DOSTUPNI</p>
                    <p className="text-sm">+381 692005880</p>
                </div>
            </Link>
        </div>
        <button onClick={() => setIsSidebarOpen(prevState => !prevState)} className="flex lg:hidden justify-center items-center text-white z-100">
            {
                isSidebarOpen ? <X/> : <Menu/>
            }
        </button>
        <div className={isSidebarOpen ? "absolute inset-0 w-full h-screen bg-[#001233]" : "hidden"}>
            <ul className="flex flex-col gap-4 text-white justify-center items-center h-full">
                {
                    links.map((link: Link, index: number) => (
                        <li key={index}>
                            <Link href={link.path} className={pathname == link.path ? "link" : ""}>{link.name}</Link>
                        </li>
                    ))
                }
                <li className="mt-10">
                    <Link href={"/kontakt"} className="flex flex-row gap-2 bg-transparent justify-center items-center pt-1 pb-1 pl-3 pr-3 text-[#D4AF37] border border-[#D4AF37] rounded-[4px]">
                        <Phone/>
                        <div className="flex flex-col">
                            <p className="text-sm">24H DOSTUPNI</p>
                            <p className="text-sm">+381 692005880</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar;