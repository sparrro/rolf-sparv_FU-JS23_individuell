import './Header.scss';
import hamberder from '../../assets/navicon.png';
import { useCartOverlayStore } from '../../store/cartOverlay';
import CartIcon from '../CartIcon/CartIcon';

const Header = ({showCartIcon, navToggler, className}: {showCartIcon: boolean, navToggler: () => void, className?: string}) => {

    const {showCartOverlay} = useCartOverlayStore()



    return (
        <header className={className}>
            <img src={hamberder} alt="" onClick={() => {if (!showCartOverlay) {navToggler()}}}/>
            {showCartIcon && 
                <CartIcon/>
            }
        </header>
    );
}
 
export default Header;