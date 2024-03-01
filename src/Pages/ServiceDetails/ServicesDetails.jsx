import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import ServiceDetalsCard from '../ServiceDetailsCard/ServiceDetalsCard';

const ServicesDetails = () => {
    const { id, } = useParams()
    const [service , setService] = useState({})
    const services = useLoaderData()
    console.log(services)
    useEffect(() => {
      const findService = services.find(service => service.id === id)
      setService(findService)
    },[id,service])
    
    

    return (
      <div>
        <ServiceDetalsCard service={service}></ServiceDetalsCard>
      </div>
    );
};

export default ServicesDetails;