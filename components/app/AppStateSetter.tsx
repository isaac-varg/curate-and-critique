"use client"

import { UserConfig } from "@prisma/client";
import { useAppActions, useTheme } from "~/store/appStore";
import { Theme } from "~/types/Theme";

// probably not the right way to handle this, but it is the solution i came up with

type AppStateSetterProps = {
    configs: UserConfig
}


const AppStateSetter = ({ configs } : AppStateSetterProps) => {

    const { setTheme } = useAppActions()

    const { activeTheme } = configs

    setTheme(activeTheme as Theme)

    return null;
}

export default AppStateSetter
