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
           <div className="service-container row row-cols-1 row-cols-md-3 g-4">
           {
                services.map(service => <Service 
                    key={service.id}
                    service={service}
                    ></Service>)
            }
           </div>
        </div>
    );
};

export default Home;