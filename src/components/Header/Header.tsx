import './Header.scss';
import hamberder from '../../assets/navicon.png';
import CartIcon from '../CartIcon/CartIcon';
import { useCartOverlayStore } from '../../store/cartOverlay';

const Header = ({showCartIcon, navToggler, className}: {showCartIcon: boolean, navToggler: () => void, className?: string}) => {

    const {showCartOverlay} = useCartOverlayStore();

    return (
        <header className={className}>
            <img src={hamberder} alt="" onClick={() => {if (!showCartOverlay) {navToggler()}}} />
            {showCartIcon && 
                <CartIcon />
            }
        </header>
    );
}
 
export default Header;