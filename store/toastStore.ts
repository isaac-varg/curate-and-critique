import { create } from 'zustand'
import { toastClasses } from '~/components/toast/toastClasses'

type Toast = {
    title: string
    description: string
    color: keyof typeof toastClasses.color
}

type State = {
    isActive: boolean
    toast: Toast
}

type Actions = {
    actions: {
        stopToast: () => void;
        toast: (toast: Toast) => void;
    };

};

const useToastStore = create<State & Actions>((set) => ({
    isActive: false,
    toast: {
        title: '',
        description: '',
        color: 'success'
    },
    actions: {
        stopToast: () => set(() => ({ isActive: false })),
        toast: (toast) => set(() => ({ toast, isActive: true }))
    }

}))


export const useToast = () => useToastStore((state) => state.isActive)

export const useToastContents = () => useToastStore((state) => state.toast)

export const useToastActions = () => useToastStore((state) => state.actions)

