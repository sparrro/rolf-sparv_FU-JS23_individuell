import { useCartStore } from "../../store/cart";
import CoffeType from "../../interfaces/CoffeeType";
import './MenuItem.scss'
import dots from './../../assets/dots.png';

const MenuItem = ({item, index}: {item: CoffeType, index: number}) => {

    const {incrementCart} = useCartStore()

    // console.log(index, typeof index)
    // den ljuger om att de inte har unika nycklar

    return (
        <article className="menu-item" key={index} >
            <div className="add" onClick={incrementCart}>+</div>
            <h2>{item.title}</h2>
            <p>{item.price} kr</p>
            <p>{item.desc}</p>
            <img src={dots} alt="" />
        </article>
    );
}
 
export default MenuItem;