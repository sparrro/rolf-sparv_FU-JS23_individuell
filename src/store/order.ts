import { create } from "zustand";
import OrderType from "../interfaces/OrderType";
import { useCartStore } from "./cart";
import OrderResponseType from "../interfaces/OrderResponseType";


interface OrderState {
    orders: OrderType[];
    compileOrders: () => void;
    resetOrders: () => void;
    sentOrder: OrderResponseType | null;
    updateSentOrder: (order: OrderResponseType) => void;
}

export const useOrderStore = create<OrderState>()((set) => ({
    orders: [],
    compileOrders: () => {
        set((state) => {
            let compiledOrders = state.orders
            useCartStore.getState().cart.forEach(item => {
                for (let i = 0; i<item.quantity!; i++) {
                    compiledOrders.push({
                        'name': item.title,
                        'price': item.price
                    })
                }
            })
            return {orders: compiledOrders}
        })
    },
    resetOrders: () => set({orders: []}),
    sentOrder: null,
    updateSentOrder: (order) => set({sentOrder: order}) // vägrar funka !?!??!?!?!?
}))