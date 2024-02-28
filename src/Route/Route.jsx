import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Doctors from "../Pages/Doctors/Doctors";
import { Login } from "@mui/icons-material";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ServicesDetails from "../Pages/ServiceDetails/ServicesDetails";



const route = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
      },

      {
        path: '/servicesDetails/:id',
        loader: ()=> fetch('/services.json'),

        element: <ServicesDetails></ServicesDetails>

      },
     
      {
        path: "/doctors",
        element: <Doctors></Doctors>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default route