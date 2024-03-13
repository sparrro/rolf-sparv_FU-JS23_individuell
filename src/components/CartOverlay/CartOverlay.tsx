import CartIcon from '../CartIcon/CartIcon';
import { useCartStore } from '../../store/cart';
import { useOrderStore } from '../../store/order';
import './CartOverlay.scss'
import CartItem from '../CartItem/CartItem';
import { sendOrder } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import OrderResponseType from '../../interfaces/OrderResponseType';

const CartOverlay = () => {

    const {cart} = useCartStore()
    let {orders, compileOrders, resetOrders, sentOrder, updateSentOrder} = useOrderStore()
    const navigate = useNavigate()

    let cartItems = cart.map((item, index) => (
        <CartItem item={item} key={index} />
    ))

    const calcSum = () => {
        let sum = 0
        for (let item of useCartStore.getState().cart) {
            sum += item.quantity! * item.price
        }
        return sum
    }

    let sum = calcSum()

    let test = async () => {
        compileOrders();
        console.log(sentOrder, typeof sentOrder)
        sendOrder(orders).then(res => {updateSentOrder(res as OrderResponseType), console.log(sentOrder)}) //jävla satan
        console.log(sentOrder, typeof sentOrder)
        //navigate('/status')
        //resetOrders()
    }


    return (
        <>
        <CartIcon />
        <div className="cart-overlay">
            <div className="nub"></div>
            <h2>Din beställning</h2>
            <ul>
                {cartItems.length>0 ? cartItems : 'Här var det tomt!'}
            </ul>
            <div className="total-sum">
                <h3>Total<span>{sum} kr</span></h3>
                <p>inkl moms + drönarleverans</p>
            </div>
            <button type='button' onClick={test}>Take my money!</button>
        </div>
        </>
    );
}
 
export default CartOverlay;