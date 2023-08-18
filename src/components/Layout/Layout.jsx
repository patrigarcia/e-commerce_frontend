import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Layout = () => {
    return (
        <>
            <Header />
            <div className="custom-margin">
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
