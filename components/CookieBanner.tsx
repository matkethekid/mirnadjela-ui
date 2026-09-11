"use client";

import { useEffect, useState } from "react";

declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}

const GA_ID = "AW-18444138813";

export default function CookieBanner() {
    const [consent, setConsent] = useState<string | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem("cookie_consent");

        setConsent(saved);

        if (saved === "accepted") {
            loadGA();
        }
    }, []);

    const loadGA = () => {
        // Sprečava učitavanje taga više puta
        if (document.getElementById("ga-script")) {
            return;
        }

        window.dataLayer = window.dataLayer || [];

        window.gtag = function (...args: any[]) {
            window.dataLayer.push(args);
        };

        const script = document.createElement("script");

        script.id = "ga-script";
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

        document.head.appendChild(script);

        script.onload = () => {
            window.gtag("js", new Date());
            window.gtag("config", GA_ID);
        };
    };

    const accept = () => {
        localStorage.setItem("cookie_consent", "accepted");
        setConsent("accepted");

        loadGA();
    };

    const decline = () => {
        localStorage.setItem("cookie_consent", "declined");
        setConsent("declined");
    };

    if (consent !== null) {
        return null;
    }

    return (
        <div className="fixed max-w-125 right-0 bottom-0 bg-black p-6 lg:p-4 rounded-sm flex flex-col gap-5 z-10">
            <div>
                <p className="text-white">
                    Koristimo kolačiće.
                </p>

                <p className="text-gray-300 text-sm">
                    Poštujemo Vašu privatnost. Koristimo kolačiće da bismo
                    analizirali sajt i unapredili ga. Analitički kolačići
                    (kao Google Analytics) će se koristiti samo uz Vaš
                    pristanak.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-3">
                <button
                    className="pt-1 pb-1 pl-5 pr-5 bg-white border border-zinc-200 rounded-sm text-sm cursor-pointer"
                    onClick={accept}
                >
                    Prihvati
                </button>

                <button
                    className="pt-1 pb-1 pl-5 pr-5 bg-white border border-zinc-200 rounded-sm text-sm cursor-pointer"
                    onClick={decline}
                >
                    Odbij
                </button>
            </div>
        </div>
    );
}
