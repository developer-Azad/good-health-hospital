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
           <div class="row row-cols-1 row-cols-md-2 g-4 align">
  <div class="col">
    <div class="card">
      <img src={gotDetails?.url} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{gotDetails?.name}</h5>
    <p class="card-text">{gotDetails?.description}</p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceDetails;