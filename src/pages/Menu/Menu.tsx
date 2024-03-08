import './Menu.scss';

import menu from "../../api/api";
import Header from "../../components/Header/Header";

import { useCartStore } from '../../store/cart';
import { useOverlayStore } from '../../store/overlay';
import Nav from '../../components/Nav/Nav';




const Menu = () => {

    const {showNav} = useOverlayStore()
    const {incrementCart} = useCartStore()

    return (
        <div className="menu-page">
            <Header showCart={true} />
            {menu.map((item: any, index: number) => (
                    <div key={index} onClick={incrementCart}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <p>{item.price}</p>
                    </div>
                )
            )}
            {showNav && <Nav />}
        </div>

    );
}
 
export default Menu;