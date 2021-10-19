import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ServiceCard from '../ServiceCard/ServiceCard';


const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [serviceDetail, setServiceDetail] = useState([]);
    const [singleDetails, setSingleDetails] = useState({});
    // const {id, name, url, description} = singleDetails;
    console.log(singleDetails);

    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServiceDetail(data))
    }, [])

    useEffect(() => {
        const gotDetails = serviceDetail.find(serve => serve.id === serviceId)
        setSingleDetails(gotDetails)
    }, [serviceId, serviceDetail])

    return (
        <div>
            <div className="tech-heading">
            <h2>Service details</h2>

            </div>
           {/* <h2>{name}</h2> */}
           {/* <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src={url} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
    <p class="card-text">{description}</p>
      </div>
    </div>
  </div>
</div> */}
        </div>
    );
};

export default ServiceDetails;