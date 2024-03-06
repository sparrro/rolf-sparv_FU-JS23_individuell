import { create } from "zustand";

interface OverlayState {
    show: boolean;
    toggle: () => void
}

export const useOverlayStore = create<OverlayState>()((set) => ({
    show: false,
    toggle: () => set((state) => ({show: !state.show}))
}))