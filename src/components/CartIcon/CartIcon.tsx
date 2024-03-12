import './CartIcon.scss'
import bag from './../../assets/bag.png';
import { useCartStore } from '../../store/cart';
import { useCartOverlayStore } from '../../store/cartOverlay';


const CartIcon = () => {


    const {cart} = useCartStore()
    const {toggleCartOverlay} = useCartOverlayStore()

    let cartSize = 0
    for (let item of cart) {
        cartSize += item.quantity!
    }

    return (
        <div className='cart-icon' onClick={toggleCartOverlay}>
            <img src={bag} alt="" />
            {cartSize>0 && <p>{cartSize}</p>}
        </div>
    );
}
 
export default CartIcon;