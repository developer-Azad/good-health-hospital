import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css'


const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [serviceDetail, setServiceDetail] = useState([]);

    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServiceDetail(data))
    }, [])

    const gotDetails = serviceDetail.find(serve => serve.id === serviceId)

    return (
        <div className="text-center">
            <div className="tech-heading">
                <h2>Service details</h2>
            </div>
            <div class="align mx-5 mb-5">
              <img className="detail-img" src={gotDetails?.url} alt="..."/>
                <div className="align detail-text">
                  <div>
                  <h3 className="fw-bold">{gotDetails?.name}</h3>
                   <p>{gotDetails?.description}</p>
                  </div>
                </div>
            </div>
          </div>
    );
};

export default ServiceDetails;