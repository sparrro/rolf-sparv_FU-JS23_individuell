import './Header.scss';
import hamberder from '../../assets/navicon.png';
import { useOverlayStore } from '../../store/overlay';

const Header = () => {

    const {showNav, toggleNav} = useOverlayStore()

    return (
        <header>
            <img src={hamberder} alt="" onClick={toggleNav}/>
        </header>
    );
}
 
export default Header;