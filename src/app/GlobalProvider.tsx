"use client";

import React from "react";
import {PrimeReactProvider} from "primereact/api";

export function GlobalProvider({children}: { children: React.ReactNode }) {
    return (
        <PrimeReactProvider>
            {children}
        </PrimeReactProvider>
    );
}
