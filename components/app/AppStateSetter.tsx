"use client"

import { UserConfig } from "@prisma/client";
import { useAppActions } from "~/store/appStore";
import { Theme } from "~/types/Theme";
import { UserCollection } from "~/types/UserCollection";

// probably not the right way to handle this, but it is the solution i came up with

type AppStateSetterProps = {
    configs: UserConfig
}


const AppStateSetter = ({ configs  } : AppStateSetterProps) => {
    
    // get the actions for the stores
    const { setTheme } = useAppActions()

    // deconstruct if necessary
    const { activeTheme } = configs

    // call the store actions
    setTheme(activeTheme as Theme)

    return null;
}

export default AppStateSetter
