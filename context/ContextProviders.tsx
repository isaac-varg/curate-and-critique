import React from "react";
import AppContextProvider from "./AppContext";

const ContextProviders = ({ children }: { children: React.ReactNode }) => {

    return (
        <AppContextProvider>
            {children}
        </AppContextProvider>
    )
}

export default ContextProviders;
