"use client"

import { useEffect, useState } from "react"
import { useTheme } from "~/store/appStore";

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
    const [mounted, setMounted] = useState(false);
    const theme = useTheme()

    // use effect only runs on the client,
    // so if we are mounted we can wrap the theme and not get a hydration error
    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <html data-theme={theme ?? 'dark'} >
                {children}
        </html>
    )
}

export default ThemeWrapper
