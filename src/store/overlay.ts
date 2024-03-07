import { create } from "zustand";

interface OverlayState {
    showNav: boolean;
    toggleNav: () => void
}

export const useOverlayStore = create<OverlayState>()((set) => ({
    showNav: false,
    toggleNav: () => set((state) => ({showNav: !state.showNav}))
}))