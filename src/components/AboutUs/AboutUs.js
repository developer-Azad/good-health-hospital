import React from 'react';
import useServices from '../../hooks/useServices';
import Doctors from '../Doctors/Doctors';
import './AboutUs.css'

const AboutUs = () => {
    const [services] = useServices();
    return (
        <div>
            <div className="about-heading"> 
            <div className="section">
            <div className="description">
            <h1 className="text">We are Committed</h1>
            <h1 className="text">to Your Best Health</h1>
                </div>
                <div className="middle">
                <img src="https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/WORKPLACEV9CMS/2bgqjhmw_0iifqf_p8twtq.jpg" alt="" />
                </div>
            </div>
        </div>
        <div className="mx-5">
            <h1>Our Doctors</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 doctors">
           {
                services.slice(6, 9).map(service => <Doctors
                    key={service.id}
                     service={service}
                     ></Doctors>)
            }
           </div>
        </div>
    );
};

export default AboutUs;