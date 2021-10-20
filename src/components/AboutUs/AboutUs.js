import React from 'react';
import useServices from '../../hooks/useServices';
import Doctors from '../Doctors/Doctors';
import './AboutUs.css'

const AboutUs = () => {
    const [services] = useServices();
    return (
        <div>
            <div className="about-cover"> 
            <div className="section">
            <div className="description fw-bold">
                <div className="about-heading">
                <h1 className="about-text">We are <span className="text-danger">Committed</span></h1>
                <h1 className="about-text">to Your Best Health</h1>
                </div>
                </div>
                <div className="middle">
                <img src="https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/WORKPLACEV9CMS/2bgqjhmw_0iifqf_p8twtq.jpg" alt="" />
                </div>
            </div>
        </div>
        <div className="m-3">
            <h1 className="fw-bold m-4">Our Doctors</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
           {
                services.slice(6, 9).map(service => <Doctors
                    key={service.id}
                     service={service}
                     ></Doctors>)
            }
           </div>
           <h3 className="text-center">We ready to take care of you any time.</h3>
           <div className="services">
               <div className="text-center">
                   <h4>Cardio Monitoring</h4>
                   <p>Cardiac monitoring generally refers to continuous or intermittent monitoring of heart activity, 
                       generally by electrocardiography.
                    </p>
               </div>
               <div>
                   <h3>Orthodontics</h3>
                   <p>Orthodontics is a branch of dentistry that treats malocclusion, a 
                       condition in which the teeth are not correctly positioned when the mouth is closed.
                    </p>
               </div>
               <div>
                   <h3>Pulmonary</h3>
                   <p>Cardiac monitoring generally refers to continuous or intermittent monitoring of heart activity, 
                       generally by electrocardiography, with assessment of the patient's condition relative to their cardiac rhythm.
                    </p>
               </div>
           </div>
           </div>
        </div>
    );
};

export default AboutUs;