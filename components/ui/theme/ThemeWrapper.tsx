"use client"

import { useEffect, useState } from "react"

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
    const [mounted, setMounted] = useState(false);



    // use effect only runs on the client,
    // so if we are mounted we can wrap the theme and not get a hydration error
    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <html data-theme={"light"} >
                {children}
        </html>
    )
}

export default ThemeWrapper
