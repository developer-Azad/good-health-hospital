import React, { useEffect, useState } from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services] = useServices();
  
  
    return (
        <div>
            <h2>24 Hours Services</h2>
           <div className="row row-cols-1 row-cols-md-3 g-4">
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