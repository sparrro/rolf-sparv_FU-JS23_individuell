import { create } from "zustand";
import CoffeType from "../interfaces/CoffeeType";

interface CartState {
    cart: CoffeType[];
    //incrementCart: () => void
    addToCart: (coffee: CoffeType) => void;
    removeFromCart: (coffee: CoffeType) => void;
    calcSum: () => number;
}

export const useCartStore = create<CartState>()((set) => ({
    cart: [],
    //incrementCart: () => set((state) => ({cart: [...state.cart, {product: 'dummy'}]})),
    addToCart: (coffee) => {
        set((state) => {
            let newCart = state.cart
            if (state.cart.some(item => item.id === coffee.id)) {
                let coffeIndex = newCart.findIndex(item => item.id === coffee.id)
                newCart[coffeIndex].quantity!++
            } else {
                newCart.push({...coffee, quantity: 1})
            }
            return {cart: newCart}
        })
    },
    removeFromCart: (coffee) => {
        set((state) => {
            let newCart = state.cart
            let coffeeIndex = newCart.findIndex(item => item.id === coffee.id)
            if (newCart[coffeeIndex].quantity == 1) {
                newCart.splice(coffeeIndex, 1)
            } else {
                newCart[coffeeIndex].quantity!--
            }
            return {cart: newCart}
        })
    },
    calcSum: () => {

        let sum = 0
        for (let item of useCartStore.getState().cart) {
            sum += item.quantity!*item.price
        }
        return sum
    }
}))