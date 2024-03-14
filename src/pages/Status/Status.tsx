import './Status.scss';
import bigLogo from '../../assets/big_logo.png';
import { useNavigate } from 'react-router-dom';
import { useOrderStore } from "../../store/order";

const Status = () => {

    const {sentOrder, orderStatus} = useOrderStore();
    const navigate = useNavigate();

    return (
        <div className="status-page">
            {(sentOrder && orderStatus?.eta) ?
            <>
                <p>Ordernummer <span>#{sentOrder.orderNr}</span></p>
                <img src={bigLogo} alt="" />
                <h1>Din beställning är på väg!</h1>
                <p><span>{orderStatus.eta}</span> {orderStatus.eta == 1 ? 'minut' : 'minuter'}</p>
                <button onClick={() => navigate('/')}>Ok, cool!</button>
            </>
            :
            <>
                <h1>Ingen aktiv beställning</h1>
                <button onClick={() => navigate(-1)}>Okej då</button>
            </>
            }
        </div>
    );
}
 
export default Status;