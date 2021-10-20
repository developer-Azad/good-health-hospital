import React from 'react';
import { useHistory } from 'react-router';
import './Doctors.css'

const Doctors = (props) => {
    const {id, name, url, description} = props.service;
    const history = useHistory();


    const handleDetails = () => {
        console.log('Clicked');
        history.push(`/servicedetails/${id}`);
    }
    return (
        <div className="col">
        <div className="card-img">
          <img src={url} className="card-img-top" alt="..."/>
          <div className="my-4">
            <h3 className="text-center">{name}</h3>
            <p className="text-center">{description}</p>
          </div>
        </div>
      </div>
    );
};

export default Doctors;