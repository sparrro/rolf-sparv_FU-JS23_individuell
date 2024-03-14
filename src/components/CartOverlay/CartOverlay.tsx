import './CartOverlay.scss';
import CartIcon from '../CartIcon/CartIcon';
import CartItem from '../CartItem/CartItem';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCartStore } from '../../store/cart';
import { useOrderStore } from '../../store/order';
import { useCartOverlayStore } from '../../store/cartOverlay';
import { sendOrder, getOrderStatus } from '../../api/api';

const CartOverlay = () => {

    const {cart} = useCartStore();
    const {orders, compileOrders, resetOrders, sentOrder, updateSentOrder, updateOrderStatus} = useOrderStore();
    const {toggleCartOverlay} = useCartOverlayStore();
    const [emptyCartP, setEmptyCartP] = useState('Här var det tomt!');
    const navigate = useNavigate();

    let cartItems = cart.map((item, index) => (
        <CartItem item={item} key={index} />
    ));

    const calcSum = () => {
        let sum = 0;
        for (let item of cart) {
            sum += item.quantity! * item.price
        }
        return sum
    }

    let sum = calcSum();

    const emptyCartPs = [
        'Här var det tomt!',
        'Glöm inte kaffet!',
        'Du har inget kaffe i vagnen!',
        'Men vad vill du ha?',
        'Det finns inget att beställa!'
    ]

    const handleOrder = async () => {
        compileOrders();
        if (orders.length>0) {
            if (sentOrder == null) {
                let order = await sendOrder(orders);
                updateSentOrder(order);
                let status = await getOrderStatus(order);
                updateOrderStatus(status);
            } else {
                let status = await getOrderStatus(sentOrder);
                updateOrderStatus(status);
            }
            toggleCartOverlay();
            navigate('/status');
        } else {
            setEmptyCartP(emptyCartPs[Math.floor(Math.random() * emptyCartPs.length)]);
        }
        resetOrders();

    }


    return (
        <>
        <CartIcon />
        <div className="cart-overlay">
            <div className="nub"></div>
            <h2>Din beställning</h2>
            <ul>
                {cartItems.length>0 ? cartItems : <p>{emptyCartP}</p>}
            </ul>
            <div className="total-sum">
                <h3>Total<span>{sum} kr</span></h3>
                <p>inkl moms + drönarleverans</p>
            </div>
            <button type='button' onClick={handleOrder}>Take my money!</button>
        </div>
        </>
    );
}
 
export default CartOverlay;