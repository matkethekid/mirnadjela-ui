"use client";

import { useState } from "react";
import Image from "next/image";
import { Media } from "@/payload-types";

interface Product {
    id: number;
    title?: string | null;
    image: number | Media;
    updatedAt: string;
    createdAt: string;
}

function ProductCard({ product }: { product: Product }) {
    const [isZoomed, setIsZoomed] = useState(false);

    if (typeof product.image === "number") {
        return null;
    }
    return (
        <div className="w-full flex-1 flex flex-col bg-[#011a40] border border-[#D4AF37]/20 rounded-[4px] overflow-hidden">
            <div className="relative w-full aspect-4/3 overflow-hidden cursor-pointer z-0 group" onClick={() => setIsZoomed(!isZoomed)}>
                <Image
                    src={product.image.url || ""}
                    alt={product.image.alt || product.title || ""}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className={`object-cover transition-transform duration-700 ease-in-out ${
                        isZoomed
                            ? "scale-150"
                            : "scale-100 group-hover:scale-105"
                    }`}
                />
                <div className="absolute top-3 right-3 bg-[#001233]/80 text-[#D4AF37] p-2 rounded-full pointer-events-none transition-opacity duration-300">
                    {isZoomed ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                    )}
                </div>
            </div>
            <div className="p-5 flex flex-col gap-2 pointer-events-none select-none">
                <h3 className="text-xl text-[#D4AF37] font-medium tracking-wide">{product.title}</h3>
            </div>
        </div>
    );
}

export default ProductCard;
