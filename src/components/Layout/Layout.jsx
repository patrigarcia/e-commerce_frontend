import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <div className="custom-margin">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Layout;
