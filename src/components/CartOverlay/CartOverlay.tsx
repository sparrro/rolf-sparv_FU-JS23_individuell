import CartIcon from '../CartIcon/CartIcon';
import dots from '../../assets/dots.png'
import menu from '../../api/api'
import { useCartStore } from '../../store/cart';
import './CartOverlay.scss'

const CartOverlay = () => {

    const {cart} = useCartStore()

    return (
        <>
        <CartIcon />
        <div className="cart-overlay">
            <div className="nub"></div>
            <h2>Din beställning</h2>
            <ul>
                <li>
                    <h3>{cart[1].title}</h3>
                    <p>{cart[1].price} kr</p>
                </li>
            </ul>
        </div>
        </>
    );
}
 
export default CartOverlay;