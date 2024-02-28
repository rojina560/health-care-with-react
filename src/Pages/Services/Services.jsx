
import SingleServices from "../SingleServices/SingleServices";


const Services = ({ services }) => {
   
    return (
      <div className=" mt-10  max-w-7xl mx-auto grid cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map((service) => (
          <SingleServices key={service.id} service={service}></SingleServices>
        ))}
      </div>
    );
};   

export default Services;