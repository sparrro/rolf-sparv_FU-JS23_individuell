import './Header.scss';
import hamberder from '../../assets/navicon.png';
import { useOverlayStore } from '../../store/overlay';
import { useNavigate } from 'react-router-dom';
import CartIcon from '../CartIcon/CartIcon';

const Header = ({showCartIcon, className}: {showCartIcon: boolean, className?: string}) => {

    const {toggleNav} = useOverlayStore()
    const navigate = useNavigate()

    const openCart = () => {
        navigate('/cart')
    }

    return (
        <header className={className}>
            <img src={hamberder} alt="" onClick={toggleNav}/>
            {showCartIcon && 
                <CartIcon/>
            }
        </header>
    );
}
 
export default Header;