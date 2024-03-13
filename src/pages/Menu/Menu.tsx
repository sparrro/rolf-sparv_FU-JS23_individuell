import './Menu.scss';

import { menu } from '../../api/api';
import Header from "../../components/Header/Header";
import { useCartOverlayStore } from '../../store/cartOverlay';
import { useState } from 'react';
import Nav from '../../components/Nav/Nav';
import MenuItem from '../../components/MenuItem/MenuItem';
import CoffeType from '../../interfaces/CoffeeType';
import CartOverlay from '../../components/CartOverlay/CartOverlay';



console.log(menu)



const Menu = () => {

    const {showCartOverlay} = useCartOverlayStore()
    const [showNav, setShowNav] = useState(false)





    let menuItems = menu.map((item, index) => (
            <MenuItem item={item} key={index}/>
        )
    )

    return (
        <div className="menu-page">
            <Header showCartIcon={true} navToggler={() => setShowNav(!showNav)} className={showCartOverlay ? 'overlay-shadow' : ''}/>
            <main className={showCartOverlay ? 'overlay-shadow' : ''}>
                <h1>Meny</h1>
                {menuItems}
            </main>
            {showCartOverlay && <CartOverlay />}
            {showNav && <Nav navToggler={() => setShowNav(!showNav)} />}
        </div>

    );
}
 
export default Menu;