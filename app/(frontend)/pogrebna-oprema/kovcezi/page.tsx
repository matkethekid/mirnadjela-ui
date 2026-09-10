import React from 'react';
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import ProductCard from "@/components/ProductCard";
import { getPayload } from "payload";
import config from "@payload-config";
import { unstable_noStore as noStore } from 'next/cache';
import { Noto_Serif } from "next/font/google";

const Footer = dynamic(() => import("@/components/Footer"), {
    ssr: true,
});

const notoSerif = Noto_Serif({
    subsets: ["latin-ext"],
    weight: ["400"],
    display: "swap"
});

async function Page() {
    noStore();

    const payload = await getPayload({
        config,
    });

    const { docs: products } = await payload.find({
        collection: "product",
        depth: 1,
        pagination: false,
        limit: 1000,
        where: {
            category: {
                equals: "kovceg"
            }
        }
    });
    return (
        <div className="w-full min-h-screen flex flex-col items-center mx-auto">
            <Navbar/>
            <main className="w-full flex-1 bg-[#001233] py-10">
                <div className="w-full max-w-6xl mx-auto px-4">
                    <h1 className={`text-4xl text-[#D4AF37] ${notoSerif.className} mb-10`}>Kovčezi</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}

export default Page;