import './Menu.scss';

import menu from "../../api/api";
import Header from "../../components/Header/Header";

import { useCartStore } from '../../store/cart';




const Menu = () => {

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
            <p>meny</p>
        </div>

    );
}
 
export default Menu;