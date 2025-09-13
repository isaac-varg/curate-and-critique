import { create } from "zustand"

type State = {
  isSidebarCollapsed: boolean
}

type Actions = {
  actions: {
    toggleSidebarCollapse: () => void;
  }
}

export const useAppSelection = create<State & Actions>((set) => ({
  isSidebarCollapsed: false,

  actions: {
    toggleSidebarCollapse: () => {
      set((state) => ({ isSidebarCollapsed: !state.isSidebarCollapsed }))
    }

  },



}))

export const useAppActions = () => useAppSelection((state) => state.actions)
