import { create } from "zustand";

interface CartState {
    cart: Object[];
    incrementCart: () => void
}

export const useCartStore = create<CartState>()((set) => ({
    cart: [],
    incrementCart: () => set((state) => ({cart: [...state.cart, {product: 'dummy'}]}))
}))