import React from 'react';
import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import ProductCard from "@/components/ProductCard";
import { getPayload } from "payload";
import config from "@payload-config";
import { unstable_noStore as noStore } from 'next/cache';

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
    noStore();

    const payload = await getPayload({
        config,
    });

    const { docs: products } = await payload.find({
        collection: "product",
        depth: 1,
        pagination: false,
        limit: 100,
    });
    return (
        <div className="w-full min-h-screen flex flex-col items-center mx-auto">
            <Navbar/>
            <main className="w-full flex-1 bg-[#001233] py-10">
                <div className="w-full max-w-6xl mx-auto px-4">
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