import { create } from "zustand";
import CoffeType from "../interfaces/CoffeeType";

interface CartState {
    cart: CoffeType[];
    //incrementCart: () => void
    addToCart: (coffee: CoffeType) => void
}

export const useCartStore = create<CartState>()((set) => ({
    cart: [],
    //incrementCart: () => set((state) => ({cart: [...state.cart, {product: 'dummy'}]})),
    addToCart: (coffee) => set((state) => ({
        cart: [...state.cart, coffee]
    }))
}))