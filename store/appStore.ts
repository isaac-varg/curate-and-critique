import { create } from 'zustand'
import { Theme } from '~/types/Theme'

type State = {
    theme: Theme
}

type Actions = {
    actions: {
        setTheme: (themeName: Theme) => void;
    };

};

const useAppStore = create<State & Actions>((set) => ({
    theme: "dark",

    actions: {
        setTheme: (themeName) => set(() => ({ theme: themeName }))
    }

}))


export const useTheme = () => useAppStore((state) => state.theme)

export const useAppActions = () => useAppStore((state) => state.actions)

