import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Header/Navbar";
import Footer from "../Pages/Footer/Footer";


const MainLayouts = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayouts;