import React from "react";
import { createOpstinaMetadata } from "@/app/lib/metadata";

export const metadata = createOpstinaMetadata("Palilula");

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}