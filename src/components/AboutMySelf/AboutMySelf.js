import React from 'react';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react/cjs/react.development';
import useServices from '../../hooks/useServices';

const AboutMySelf = () => {
    const {myselfId} = useParams();
    const [service, setService] = useState({});
    // console.log(service);
   

    return (
        <div>
            <h1>This is Abul Kalam Azad : {myselfId}</h1>
        </div>
    );
};

export default AboutMySelf;