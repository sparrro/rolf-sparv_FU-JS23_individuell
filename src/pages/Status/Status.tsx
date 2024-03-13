import './Status.scss'
import { Link } from "react-router-dom";
import { useOrderStore } from "../../store/order";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import bigLogo from '../../assets/big_logo.png';

const Status = () => {

    const {sentOrder} = useOrderStore()
    const [showNav, setShowNav] = useState(false)
    const navigate = useNavigate()

    return (
        <div className="status-page">
            {sentOrder ?
            <>
                <p>Ordernummer <span>#{sentOrder.orderNr}</span></p>
                <img src={bigLogo} alt="" />
                <h1>Din beställning är på väg!</h1>
                <p><span>{sentOrder.eta}</span> minuter</p>
                <button onClick={() => {navigate('/'); console.log(showNav)}}>Ok, cool!</button>
            </>
            :
            <>
                <h1>Du har inte lagt någon beställning än!</h1>
                <button onClick={() => navigate(-1)}>Okej då</button>
            </>
            }
        </div>
    );
}
 
export default Status;