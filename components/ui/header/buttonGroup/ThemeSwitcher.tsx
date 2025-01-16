"use client"
import { TbColorSwatch } from "react-icons/tb"
import { setTheme } from "~/actions/app/setTheme";
import config from "~/tailwind.config"

const ThemeSwitcher = () => {

    const themes: string[] = config.daisyui.themes;

    const handleThemeSwitch = async (theme: string) => {
       await setTheme(theme) 

    }

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
                <span className="text-2xl"> <TbColorSwatch /></span>
            </div>


            <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">


                {themes.map((theme) => {
                    return (
                        <li key={theme}>

                            <input
                                onClick={() => handleThemeSwitch(theme)}
                                type="radio"
                                name="theme-dropdown"
                                className="uppercase theme-controller btn btn-sm btn-block btn-ghost justify-start"
                                aria-label={theme}
                                value={theme} />
                        </li>

                    )
                })}
            </ul>
        </div>)
}

export default ThemeSwitcher
