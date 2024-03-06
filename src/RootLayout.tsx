import "./RootLayout.scss"
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <main className="main">
            <h1>header</h1>
            <Outlet />
            <h1>footer</h1>
        </main>
    );
}
 
export default RootLayout;