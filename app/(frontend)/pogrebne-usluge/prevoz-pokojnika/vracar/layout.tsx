import React from "react";
import { createOpstinaMetadata } from "@/app/(frontend)/lib/metadata";

export const metadata = createOpstinaMetadata("Vračar");

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}