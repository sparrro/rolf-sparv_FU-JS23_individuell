import { create } from "zustand";
import CoffeType from "../interfaces/CoffeeType";
import OrderType from "../interfaces/OrderType";

interface CartState {
    cart: CoffeType[];
    addToCart: (coffee: CoffeType) => void;
    removeFromCart: (coffee: CoffeType) => void;
}

export const useCartStore = create<CartState>()((set) => ({
    cart: [],
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
    
    
}))