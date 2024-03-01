
import Banner from "../../Shared/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Services from "../Services/Services";
import Appointment from "../Appointment/Appointment";




const Home = () => {
 const services = useLoaderData()
    return (
      <div className=" max-w-7xl mx-auto ">
        <Banner></Banner>
        <h1 className="text-6xl text-pink-600 text-center mt-40 p-2 ">
          Our Services
        </h1>
        <hr className="w-[400px] mx-auto h-[5px] bg-pink-600" />

        <div>
         
            <Services services={services}></Services>
        
        </div>
        <div>
          <Appointment></Appointment>
        </div>
      </div>
    );F
};

export default Home;