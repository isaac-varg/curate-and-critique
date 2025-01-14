"use client"

import { useEffect } from "react";
import { getConfigs } from "~/actions/user/getConfigs";
import useApp from "~/hooks/useApp";

// probably not the right way to handle this, but it is the solution i came up with


const AppStateSetter = () => {

    const { setTheme } = useApp()

    useEffect(() => {
        const runConfigGetter = async () => {
            const configs = await getConfigs()


            //theme
            setTheme(configs.activeTheme)
        }

        runConfigGetter()
    }, [])
    return null;
}

export default AppStateSetter
