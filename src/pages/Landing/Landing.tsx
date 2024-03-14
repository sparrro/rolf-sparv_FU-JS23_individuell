import './Landing.scss';
import leftFlowers from './../../assets/landing_left_flowers.png';
import rightFlowers from './../../assets/landing_right_flowers.png';
import logo from './../../assets/logo.png';
import Nav from "../../components/Nav/Nav";
import { useState } from 'react';




const Landing = () => {

    const [showNav, setShowNav] = useState(false);

    return (
        <div className="landing-page" onClick={() => setShowNav(!showNav)}>
            <img src={leftFlowers} alt="" />
            <img src={rightFlowers} alt="" />
            <div className="logo">
                <img src={logo} alt="" />
                <h1>AIR BEAN</h1>
                <h2>DRONEDELIVERED COFFEE</h2>
            </div>
            {showNav && <Nav navToggler={() => setShowNav(!showNav)} />}
        </div>
    )
}

export default Landing