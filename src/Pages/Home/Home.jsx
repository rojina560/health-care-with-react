
import Banner from "../../Shared/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Services from "../Services/Services";



const Home = () => {
 const services = useLoaderData()
    console.log(services)
    return (
      <div className=" max-w-7xl mx-auto ">
        <Banner></Banner>
        <h1 className="text-6xl text-pink-600 text-center mt-36 p-10">Our Services</h1>

        <div className=" mt-10  max-w-7xl mx-auto grid cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <Services key={service.id} service={service}></Services>
          ))}
        </div>
      </div>
    );
};

export default Home;