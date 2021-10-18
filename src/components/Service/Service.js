import React from 'react';
import './Service.css'

const Service = (props) => {
    const {name, url, description} = props.service;


    const handleDetails = () => {
        console.log('Clicked');
    }

    return (
        <div className="service-card">
            <div >
            <div className="image-fluid">
            <img width="300px" src={url} alt="" />
            </div>
            <h4>Service : {name}</h4>
            <p>{description}</p>
            <div>
                <button className="detail-btn" onClick={handleDetails}>Details</button>
            </div>
            </div>
            
        </div>
    );
};

export default Service;