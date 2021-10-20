import React, { useEffect, useState } from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services] = useServices();
  
  
    return (
        <div>
            <h2 className="service-heading fw-bold">Our Runing Services</h2>
           <div className="mx-5 mb-3 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
           {
                services.slice(0, 6).map(service => <Service
                    key={service.id}
                     service={service}
                     ></Service>)
            }
           </div>
        </div>
    );
};

export default Services;