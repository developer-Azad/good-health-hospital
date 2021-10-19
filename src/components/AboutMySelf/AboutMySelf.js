import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';
import useServices from '../../hooks/useServices';

const AboutMySelf = () => {
    const {myselfId} = useParams();
    const [service, setService] = useState({});
    // console.log(service);
    const url = `https://jsonplaceholder.typicode.com/users/${myselfId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setService(data))
    return (
        <div>
            <h1>This is Abul Kalam Azad : {myselfId}</h1>
            <h3>{service.name}</h3>

            
        </div>
    );
};

export default AboutMySelf;