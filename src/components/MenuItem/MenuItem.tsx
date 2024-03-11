import { useCartStore } from "../../store/cart";
import CoffeType from "../../interfaces/CoffeeType";
import './MenuItem.scss'
import dots from './../../assets/dots.png';

const MenuItem = ({item}: {item: CoffeType}) => {

    const {cart, addToCart} = useCartStore()

    return (
        <article className="menu-item" >
            <div className="add" onClick={() => addToCart(item)}>+</div>
            <h2>{item.title}</h2>
            <p>{item.price} kr</p>
            <p>{item.desc}</p>
            <img src={dots} alt="" />
        </article>
    );
}
 
export default MenuItem;