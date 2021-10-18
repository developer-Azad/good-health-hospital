import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-item p-5 text-white">
                <div>
                    <h5>Contact Us:</h5>
                    <p>01787-26233</p>
                </div>
                <div>
                    <h5>Our Branches:</h5>
                    <p>Dhaka</p>
                    <p>Rajshahi</p>
                    <p>Dinajpur</p>
                </div>
                <div>
                    <h5>Online service:</h5>
                    <p>www.healthcare.com</p>
                    <p>www.facebook.com</p>
                    <p>www.messenger.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;