import React from 'react';
import { useHistory } from 'react-router';
import './Service.css'

const Service = (props) => {
    const {id, name, url, description} = props.service;
    const history = useHistory();

    const handleDetails = () => {
        history.push(`/servicedetails/${id}`);
    }

    return (          
  <div className="col">
    <div className="card h-100">
      <img src={url} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer c-footer">
      <button className="detail-btn" onClick={handleDetails}>Details</button>
      </div>
    </div>
  </div>
    );
};

export default Service;