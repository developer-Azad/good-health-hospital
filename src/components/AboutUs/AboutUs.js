import React from 'react';
import useServices from '../../hooks/useServices';
import Doctors from '../Doctors/Doctors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope, faHeartbeat, faMicrochip } from '@fortawesome/free-solid-svg-icons'
import './AboutUs.css'

const AboutUs = () => {
    const [services] = useServices();
    const element1 = <FontAwesomeIcon icon={faHeartbeat} />
    const element2 = <FontAwesomeIcon icon={faMicrochip} />
    const element3 = <FontAwesomeIcon icon={faStethoscope} />
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
        <div>
            <h1 className="fw-bold m-4">Our Doctors</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-4">
           {
                services.slice(6, 9).map(service => <Doctors
                    key={service.id}
                     service={service}
                     ></Doctors>)
            }
           </div>
           <h3 className="text-center my-4 fw-bold">Our Best Services.</h3>
           <div className="service-items">  
                <div className="text-align">
                   <p className="icon">{element1}</p>
                   <h4>Cardio Monitoring</h4>
                   <p>Cardiac monitoring generally refers to continuous or intermittent monitoring of heart activity, 
                       generally by electrocardiography.
                    </p>
                   </div>
               <div className="text-align">
               <p className="icon">{element2}</p>
                   <h4>Orthodontics</h4>
                   <p>Orthodontics is a branch of dentistry that treats malocclusion, a 
                       condition in which the teeth are not correctly positioned when the mouth is closed.
                    </p>
               </div>
               <div className="text-align">
               <p className="icon">{element3}</p>
                   <h4>Pulmonary</h4>
                   <p>Pulmonary hypertension is high blood pressure in the blood vessels that supply the 
                       lungs (pulmonary arteries). 
                       </p>
               </div>
           </div>
        </div>
    </div>
    );
};

export default AboutUs;