import './Landing.scss';
import leftFlowers from './../../assets/landing_left_flowers.png';
import rightFlowers from './../../assets/landing_right_flowers.png';
import Nav from "../../components/Nav/Nav";
import logo from './../../assets/logo.png';
import { useOverlayStore } from '../../store/overlay';


const Landing = () => {

    const {show, toggle} = useOverlayStore()

    return (
        <div className="landing-page" onClick={toggle}>
            <img src={leftFlowers} alt="" />
            <img src={rightFlowers} alt="" />
            <div className="logo">
                <img src={logo} alt="" />
                <h1>AIR BEAN</h1>
                <h2>DRONEDELIVERED COFFEE</h2>
            </div>
            {show ? <Nav /> : null}
        </div>
    )
}

export default Landing