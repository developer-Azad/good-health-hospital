import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

import './Footer.css'

const Footer = () => {
    const icon1 = <FontAwesomeIcon icon={faPhoneAlt} />
    const icon2 = <FontAwesomeIcon icon={faEnvelope} />
    const icon3 = <FontAwesomeIcon icon={faMapMarkerAlt} />

    return (
        <div className="footer">
            <div className="footer-item px-5 py-4 text-white">
                <div>
                    <h3>Departments</h3>
                    <p>Surgery and Radiology</p>
                    <p>Nuclear Teeatment</p>
                    <p>Radiotherapy</p>
                    <p>Eye care</p>
                    <p>dental unit</p>
                </div>
                <div>
                    <h3>Coming Soon</h3>
                    <p>Plastic Surgery</p>
                    <p>Open Heart Surgery</p>
                    <p>Brain treatment</p>
                    <p>Special baby care</p>
                </div>
                <div>
                    <h3>Our Branches:</h3>
                    <p>{icon3} Torento</p>
                    <p>{icon3} Alaska</p>
                    <p>{icon3} Florida</p>
                    <p>{icon3} Louisiana</p>
                    <p>{icon3} Maryland</p>
                </div>
                <div>
                    <h3>Get In Touch</h3>
                    <h5>Hotline:</h5>
                    <p>{icon1} 01872-972125</p>
                    <h5>Email:</h5>
                    <p>{icon2} goodhealth@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;