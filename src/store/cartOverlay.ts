import { create } from "zustand";

interface CartOverlayState {
    showCartOverlay: boolean;
    toggleCartOverlay: () => void;
}

export const useCartOverlayStore = create<CartOverlayState>()((set) => ({
    showCartOverlay: false,
    toggleCartOverlay: () => set((state) => ({showCartOverlay: !state.showCartOverlay}))
}));