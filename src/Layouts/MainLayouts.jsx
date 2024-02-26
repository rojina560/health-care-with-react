import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Header/Navbar";
import Banner from "../Shared/Banner/Banner";


const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainLayouts;