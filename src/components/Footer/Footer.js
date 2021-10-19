import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-item p-5 text-white">
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
                    <p>Dhaka</p>
                    <p>Rajshahi</p>
                    <p>Dinajpur</p>
                    <p>Kumilla</p>
                    <p>Barishal</p>
                </div>
                <div>
                    <h3>Get In Touch</h3>
                    <h5>Hotline:</h5>
                    <p>01872-972125</p>
                    <h5>Email:</h5>
                    <p>goodhealth@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;