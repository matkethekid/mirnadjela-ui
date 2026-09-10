import React from 'react';
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Church } from "lucide-react";

const Footer = dynamic(() => import("@/components/Footer"), {
    ssr: true,
});

// const products: Product[] = [
//     { id: 1, name: "Urnja Premium", description: "Elegantna i trajna urnja izrađena od najkvalitetnijih materijala.", image: "/api/media/file/prvaverztreca.png" },
//     { id: 2, name: "Urnja Premium", description: "Elegantna i trajna urnja izrađena od najkvalitetnijih materijala.", image: "/api/media/file/prvaverztreca.png" },
//     { id: 3, name: "Urnja Premium", description: "Elegantna i trajna urnja izrađena od najkvalitetnijih materijala.", image: "/api/media/file/prvaverztreca.png" },
//     { id: 4, name: "Urnja Premium", description: "Elegantna i trajna urnja izrađena od najkvalitetnijih materijala.", image: "/api/media/file/prvaverztreca.png" },
//     { id: 4, name: "Urnja Premium", description: "Elegantna i trajna urnja izrađena od najkvalitetnijih materijala.", image: "/api/media/file/prvaverztreca.png" },
//     { id: 4, name: "Urnja Premium", description: "Elegantna i trajna urnja izrađena od najkvalitetnijih materijala.", image: "/api/media/file/prvaverztreca.png" },
//     { id: 4, name: "Urnja Premium", description: "Elegantna i trajna urnja izrađena od najkvalitetnijih materijala.", image: "/api/media/file/prvaverztreca.png" },
//     { id: 4, name: "Urnja Premium", description: "Elegantna i trajna urnja izrađena od najkvalitetnijih materijala.", image: "/api/media/file/prvaverztreca.png" },
// ];

async function Page() {
    return (
        <div className="w-full min-h-screen flex flex-col items-center mx-auto">
            <Navbar/>
            <main className="w-full flex-1 bg-[#001233] py-10">
                <div className="w-full max-w-6xl mx-auto px-4 flex flex-col h-[600px] gap-2">
                    {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">*/}
                    {/*    {products.map((product) => (*/}
                    {/*        <ProductCard*/}
                    {/*            key={product.id}*/}
                    {/*            product={product}*/}
                    {/*        />*/}
                    {/*    ))}*/}
                    {/*</div>*/}
                    <div className="flex flex-col lg:flex-row gap-2 w-full h-1/2">
                        <div className="h-full flex flex-1">
                            <div className="bg-[#0A1E42]/70 border border-[#1E3A6B] p-8 rounded-[4px] flex flex-1 flex-col items-start hover:bg-[#0A1E42] transition-colors duration-300">
                                <div className="w-12 h-12 rounded-full border border-[#C9A227] flex items-center justify-center text-[#C9A227] mb-6">
                                    <Church/>
                                </div>
                                <h3 className="text-xl text-white font-medium mb-4">Krstovi i piramide</h3>
                                <p className="text-[#C5C6D2] text-sm leading-relaxed mb-8 flex-1">Odabrani krstovi izrađeni sa pažnjom i poštovanjem, namenjeni za obeležavanje mesta večnog počinka.</p>
                                <Link href={"/pogrebna-oprema/krstovi"} className="text-[#C9A227] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
                                    Detaljnije <span>→</span>
                                </Link>
                            </div>
                        </div>
                        <div className="h-full flex flex-1">
                            <div className="bg-[#0A1E42]/70 border border-[#1E3A6B] p-8 rounded-[4px] flex flex-1 flex-col items-start hover:bg-[#0A1E42] transition-colors duration-300">
                                <div className="w-12 h-12 rounded-full border border-[#C9A227] flex items-center justify-center text-[#C9A227] mb-6">
                                    <Church/>
                                </div>
                                <h3 className="text-xl text-white font-medium mb-4">Suze i venci</h3>
                                <p className="text-[#C5C6D2] text-sm leading-relaxed mb-8 flex-1">Dostojanstveni cvetni aranžmani, suze i venci, pažljivo izrađeni za odavanje počasti i izražavanje najdubljih osećanja.</p>
                                <Link href={"/pogrebna-oprema/suze-venci"} className="text-[#C9A227] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
                                    Detaljnije <span>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1">
                        <div className="bg-[#0A1E42]/70 border border-[#1E3A6B] p-8 rounded-[4px] flex flex-1 flex-col items-start hover:bg-[#0A1E42] transition-colors duration-300">
                            <div className="w-12 h-12 rounded-full border border-[#C9A227] flex items-center justify-center text-[#C9A227] mb-6">
                                <Church/>
                            </div>
                            <h3 className="text-xl text-white font-medium mb-4">Kovčezi</h3>
                            <p className="text-[#C5C6D2] text-sm leading-relaxed mb-8 flex-1">Dostojanstveni i pažljivo izrađeni kovčezi, izrađeni od kvalitetnih materijala uz posebnu pažnju prema svakom detalju.</p>
                            <Link href={"/pogrebna-oprema/kovcezi"} className="text-[#C9A227] text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all">
                                Detaljnije <span>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Page;