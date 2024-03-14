import "./Nav.scss";
import close from './../../assets/close.png';
import { Link } from "react-router-dom";
import { useOrderStore } from "../../store/order";
import { getOrderStatus } from "../../api/api";

const Nav = ({navToggler}: {navToggler: () => void}) => {

    const {sentOrder, updateOrderStatus} = useOrderStore();

    const handleStatus = async () => {
        if (sentOrder != null) {
            let status = await getOrderStatus(sentOrder);
            updateOrderStatus(status);
        }
    }

    return (
        <nav className="nav" onClick={(e) => e.stopPropagation()}>
            <img src={close} alt="" onClick={navToggler} />
            <Link to="/menu"><h2>Meny</h2></Link>
            <hr />
            <Link to="/about"><h2>Vårt kaffe</h2></Link>
            <hr />
            <Link to="/status"><h2 onClick={handleStatus}>Orderstatus</h2></Link>
        </nav>
    );
}
 
export default Nav;