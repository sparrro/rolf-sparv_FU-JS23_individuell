import './Header.scss';
import hamberder from '../../assets/navicon.png';
import bag from '../../assets/bag.png';
import { useOverlayStore } from '../../store/overlay';
import { useCartStore } from '../../store/cart';

const Header = ({showCart}: {showCart: boolean}) => {

    const {toggleNav} = useOverlayStore()
    const {cart} = useCartStore()

    return (
        <header>
            <img src={hamberder} alt="" onClick={toggleNav}/>
            {showCart && 
            <div className='cart-icon'>
                <img src={bag} alt="" />
                {cart.length>0 && <p>{cart.length}</p>}
            </div>
            }
        </header>
    );
}
 
export default Header;