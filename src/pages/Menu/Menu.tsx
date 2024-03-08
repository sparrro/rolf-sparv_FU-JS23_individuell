import menu from "../../api/api";
import Header from "../../components/Header/Header";






const Menu = () => {
    return (
        <div className="menu-page">
            <Header />
            {menu.map((item: any, index: number) => (
                    <div key={index}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <p>{item.price}</p>
                    </div>
                )
            )}
            <p>meny</p>
        </div>

    );
}
 
export default Menu;