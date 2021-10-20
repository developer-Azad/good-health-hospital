import React from 'react';
import { Link } from 'react-router-dom';
import './Technology.css'

const Technology = () => {
    return (
        <div>
            <div className="tech-heading">
            <h2 className="fw-bold">We Use Digital Technology</h2>
            </div>
        <div className="mx-5 mb-5">
            <div className="section">
                <div className="">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/UPMCEast_CTscan.jpg/1200px-UPMCEast_CTscan.jpg" alt="" />
                </div>
                <div className="description">
                    <div>
                    <h2>Digital CT Scanner</h2>
                    <p>A CT scan or computed tomography scan (formerly known as computed axial tomography or CAT scan)
                         is a medical imaging technique used in radiology to 
                        get detailed images of the body noninvasively for diagnostic purposes. The personnel
                         that perform CT scans are called radiographers or radiology technologists</p>
                         <a href="https://en.wikipedia.org/wiki/CT_scan"> for more</a>
                    </div>
                </div>
            </div>
            <div className="section">
            <div className="description">
                    <div className="section-1">
                        <h2>Digital X-ray</h2>
                        <p>Digital x-rays can be used in any situation where problems with bone, teeth, 
                        or organs need to be diagnosed. To a lesser extent, they can also pick up your body fat, muscle, 
                        and even the air in your lungs! They produce images of the area of concern, allowing doctors to see various issues. Breaks, fractures, abnormal 
                        growths, and structural issues with certain organs can be pinpointed.</p>
                    </div>
                </div>
                <div className="section-2">
                <img src="https://5.imimg.com/data5/LV/AA/MY-53226304/digital-x-ray-machine-500x500-500x500.jpg" alt="" />
                </div>
            </div>
            <div className="section">
                <div className="">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/MRI-Philips.JPG/1200px-MRI-Philips.JPG" alt="" />
                </div>
                <div className="description">
                    <div>
                    <h2>Digital MRI</h2>
                    <p>Digital capabilities help physicians with accurate diagnosis across a range of 
                        clinical applications, including cardiac, neurological and musculoskeletal. 
                        Digital also helps clinics to overcome
                         RF channel scalability limitations that can be problematic with analog. </p>
                    </div>
                </div>
            </div>
            <div className="section mt-5">
                <div className="description">
                    <div>
                    <h2>Digital Covid-19 Care</h2>
                    <p>Critically ill COVID-19 patients need artificial respiration. But there is a worldwide lack of equipment.</p>
                    </div>
                </div>
                <div className="middle">
                    <img src="https://static.dw.com/image/52885257_101.jpg" alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Technology;