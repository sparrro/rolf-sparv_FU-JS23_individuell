import './CartIcon.scss'
import bag from './../../assets/bag.png';
import { useCartStore } from '../../store/cart';
import { useCartOverlayStore } from '../../store/cartOverlay';


const CartIcon = () => {


    const {cart} = useCartStore()
    const {toggleCartOverlay} = useCartOverlayStore()


    return (
        <div className='cart-icon' onClick={toggleCartOverlay}>
            <img src={bag} alt="" />
            {cart.length>0 && <p>{cart.length}</p>}
        </div>
    );
}
 
export default CartIcon;