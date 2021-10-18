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
                         <img src="https://www.ayurmade.com/wp-content/uploads/2021/08/666.jpg" className="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>
            </div>
           <div className="service-container">
           {
                services.map(service => <Service 
                    key={services.id}
                    service={service}
                    ></Service>)
            }
           </div>
        </div>
    );
};

export default Home;