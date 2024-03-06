import "./Nav.scss"
import close from './../../assets/close.png';
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <img src={close} alt="" />
            <Link to="/menu"><h2>Meny</h2></Link>
            <hr />
            <Link to="/about"><h2>Vårt kaffe</h2></Link>
            <hr />
            <Link to="/profile"><h2>Min profil</h2></Link>
            <hr />
            <Link to="/status"><h2>Orderstatus</h2></Link>
        </div>
    );
}
 
export default Nav;