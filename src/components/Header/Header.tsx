import './Header.scss';
import hamberder from '../../assets/navicon.png';
import { useOverlayStore } from '../../store/overlay';
import { useCartOverlayStore } from '../../store/cartOverlay';
import CartIcon from '../CartIcon/CartIcon';

const Header = ({showCartIcon, className}: {showCartIcon: boolean, className?: string}) => {

    const {toggleNav} = useOverlayStore()
    const {showCartOverlay} = useCartOverlayStore()



    return (
        <header className={className}>
            <img src={hamberder} alt="" onClick={() => {if (!showCartOverlay) {toggleNav()}}}/>
            {showCartIcon && 
                <CartIcon/>
            }
        </header>
    );
}
 
export default Header;