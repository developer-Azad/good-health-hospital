import React from 'react';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Home = () => {
    const [services] = useServices();

    return (
        <div>
            <div>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                         <img height="400px" src="https://www.ayurmade.com/wp-content/uploads/2021/08/666.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
            </div>
            <h1 className="text-center fw-bold tech-heading">Our Services</h1>
           <div className="mx-5 mb-3 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
           {
                services.slice(0, 6).map(service => <Service 
                    key={service.id}
                    service={service}
                    ></Service>)
            }
           </div>
        </div>
    );
};

export default Home;