import { useContext } from "react"
import { AppContext } from "~/context/AppContext"
import config from "~/tailwind.config";

const useApp = () => {
    const { setAppState, activeTheme } = useContext(AppContext);

    const setTheme = (theme: string) => {
        setAppState((previousState) => ({
            ...previousState,
            activeTheme: theme,
        }));
    }


    const toggleSidebar = () => {
        setAppState((previousState) => ({
            ...previousState,
            isSidebarCollapsed: !previousState.isSidebarCollapsed,
        }));
    }

    return {
        setTheme,
        toggleSidebar,
        // state values
        activeTheme,
    }
}

export default useApp;
