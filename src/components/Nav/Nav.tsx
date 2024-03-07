import "./Nav.scss"
import close from './../../assets/close.png';
import { Link } from "react-router-dom";
import { useOverlayStore } from "../../store/overlay";



const Nav = () => {

    const {showNav, toggleNav} = useOverlayStore()

    return (
        <nav className="nav" onClick={(e) => e.stopPropagation()}>
            <img src={close} alt="" onClick={toggleNav} />
            <Link to="/menu"><h2>Meny</h2></Link>
            <hr />
            <Link to="/about"><h2 onClick={toggleNav}>Vårt kaffe</h2></Link>
            <hr />
            <Link to="/profile"><h2>Min profil</h2></Link>
            <hr />
            <Link to="/status"><h2>Orderstatus</h2></Link>
        </nav>
    );
}
 
export default Nav;