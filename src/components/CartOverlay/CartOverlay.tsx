import CartIcon from '../CartIcon/CartIcon';
import dots from '../../assets/dots.png'
import { menu } from '../../api/api';
import { useCartStore } from '../../store/cart';
import './CartOverlay.scss'
import CartItem from '../CartItem/CartItem';

const CartOverlay = () => {

    const {cart, calcSum} = useCartStore()

    let cartItems = cart.map((item, index) => (
        <CartItem item={item} key={index} />
    ))

    let sum = calcSum()

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
            <button type='button'>Take my money!</button>
        </div>
        </>
    );
}
 
export default CartOverlay;