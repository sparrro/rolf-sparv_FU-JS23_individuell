import './MenuItem.scss';
import CoffeType from "../../interfaces/CoffeeType";
import dots from './../../assets/dots.png';
import { useCartStore } from "../../store/cart";
import { useCartOverlayStore } from "../../store/cartOverlay";

const MenuItem = ({item}: {item: CoffeType}) => {

    const {addToCart} = useCartStore();
    const {showCartOverlay} = useCartOverlayStore();

    return (
        <article className="menu-item" >
            <div className="add" onClick={() => {if (!showCartOverlay) {addToCart(item)}}}>+</div>
            <h2>{item.title}</h2>
            <p>{item.price} kr</p>
            <p>{item.desc}</p>
            <img src={dots} alt="" />
        </article>
    );
}
 
export default MenuItem;