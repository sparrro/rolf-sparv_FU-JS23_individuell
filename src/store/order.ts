import { create } from "zustand";
import { useCartStore } from "./cart";
import OrderType from "../interfaces/OrderType";
import OrderResponseType from "../interfaces/OrderResponseType";
import OrderStatusType from "../interfaces/OrderStatusType";


interface OrderState {
    orders: OrderType[];
    compileOrders: () => void;
    resetOrders: () => void;
    sentOrder: OrderResponseType | null;
    updateSentOrder: (order: OrderResponseType) => void;
    orderStatus: OrderStatusType | null;
    updateOrderStatus: (order: OrderResponseType) => void
}

export const useOrderStore = create<OrderState>()((set) => ({
    orders: [],
    compileOrders: () => {
        set((state) => {
            let compiledOrders = state.orders;
            useCartStore.getState().cart.forEach(item => {
                for (let i = 0; i < item.quantity!; i++) {
                    compiledOrders.push({
                        'name': item.title,
                        'price': item.price
                    });
                }
            });
            return {orders: compiledOrders}
        });
    },
    resetOrders: () => set({orders: []}),
    sentOrder: null,
    updateSentOrder: (order) => set({sentOrder: order}),
    orderStatus: null,
    updateOrderStatus: (order) => set({orderStatus: order})
}));