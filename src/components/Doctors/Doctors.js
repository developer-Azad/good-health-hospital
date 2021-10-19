import React from 'react';
import './Doctors.css'

const Doctors = (props) => {
    const {name, url, description} = props.service;
    
    return (
        <div className="col">
        <div className="card-img">
          <img src={url} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h3 className="text-center">{name}</h3>
            <p className="text-center card-text">{description}</p>
          </div>
        </div>
      </div>
    );
};

export default Doctors;