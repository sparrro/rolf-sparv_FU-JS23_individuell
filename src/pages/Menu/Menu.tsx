import './Menu.scss';

import menu from "../../api/api";
import Header from "../../components/Header/Header";

import { useOverlayStore } from '../../store/overlay';
import Nav from '../../components/Nav/Nav';
import MenuItem from '../../components/MenuItem/MenuItem';
import CoffeType from '../../interfaces/CoffeeType';



console.log(menu)



const Menu = () => {

    const {showNav} = useOverlayStore()

    let coffees = menu.filter((item: CoffeType) => {
        return item.id.charAt(0) == 'c'
    })

    let menuItems = menu.map((item: CoffeType, index: string) => (
            <MenuItem item={item} key={index.toString()}/>
        )
    )

    return (
        <div className="menu-page">
            <Header showCart={true} />
            <main>
                <h1>Meny</h1>
                {menuItems}
            </main>
            {showNav && <Nav />}
        </div>

    );
}
 
export default Menu;