import "./RootLayout.scss"
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <main className="main">
            <Outlet />
        </main>
    );
}
 
export default RootLayout;