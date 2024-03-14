import './CartItem.scss';
import more from './../../assets/more.png';
import less from './../../assets/less.png';
import { useCartStore } from '../../store/cart';
import CoffeType from "../../interfaces/CoffeeType";

const CartItem = ({item}: {item: CoffeType}) => {

    const {addToCart, removeFromCart} = useCartStore();

    return (
        <li className="cart-item">
            <h3>{item.title}</h3>
            <p>{item.price} kr</p>
            <img src={more} alt="" onClick={() => addToCart(item)} />
            <p>{item.quantity}</p>
            <img src={less} alt="" onClick={() => removeFromCart(item)} />
        </li>
    );
}
 
export default CartItem;