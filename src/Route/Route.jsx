import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import Doctors from "../Pages/Doctors/Doctors";


const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=>fetch('/services.json')
               

            },
            {
                path: '/services',
                element: <Services></Services>
                
            },
            {
                path: '/doctors',
                element: <Doctors></Doctors>
            }
        ]
        
    }
])
export default route