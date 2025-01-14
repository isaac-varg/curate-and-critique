"use client"

import React, { useState, createContext } from "react"

interface AppState {
    isSidebarCollapsed: boolean;
    activeTheme: string; 
}

interface AppProps extends AppState {
    setAppState: React.Dispatch<React.SetStateAction<AppState>>
}

type AppContextProps = {
    children: React.ReactNode;
}

export const AppContext = createContext<AppProps>({
    isSidebarCollapsed: false,
    activeTheme: "dark" ,
    setAppState: () => { },
})

export const AppContextDefaults = {
    isSidebarCollapsed: false,
    activeTheme: "dark"
}

export const AppContextProvider = ({ children }: AppContextProps) => {
    const [appState, setAppState] = useState<AppState>(AppContextDefaults);

    return (
        <AppContext.Provider
            value={{ ...appState, setAppState }}
        >
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;


