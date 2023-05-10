import {Await, Link, NavLink, useRouteLoaderData} from 'react-router-dom'
import React, { useState, Suspense, useEffect} from "react";
import {Audio} from 'react-loader-spinner';
import '../../pages/test.css'
const OtherServiceSlide = (props) => {
    const [servicePackages, setServicePackages] = useState([]);
    useEffect(async () => {
        const response = await fetch(`http://localhost:8080/api/service-packages/search/Day Care`);
        const data = await response.json();
        console.log(data)
        setServicePackages(data)
    }, [])
    // const servicePackages = useRouteLoaderData('packages');
    return (
        <>
                    {
                        <>
                            <div className="row">
                                <div
                                    className="col-lg-12 d-flex flex-wrap align-items-center justify-content-sm-between justify-content-start gap-4 mb-60">
                                    <div className="inner-section-title">
                                        <h2>Service Packages</h2>
                                    </div>
                                    <div className="swiper-btn-wrap d-flex align-items-center">
                                        <div className="slider-btn prev-btn-1">
                                            <i style={{cursor: "pointer"}} className="bi bi-arrow-left"/>
                                        </div>
                                        <div className="slider-btn next-btn-1">
                                            <i style={{cursor: "pointer"}} className="bi bi-arrow-right"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row home1-services-slider">
                                {servicePackages.map(element =>
                                    <div className="services-card1" key={element.id}>
                                        <div className="icon">
                                            <img src={element.image} alt="" className='package-image ' />
                                        </div>
                                        <div className="content package-content">
                                            <h3>
                                                <NavLink to={`/service-packages/${element.id}`}>
                                                    <a>{element.name}</a>
                                                </NavLink>
                                            </h3>
                                            <p>{element.description}</p>
                                        </div>
                                        <Link  to={`/service-packages/${element.id}`}>
                                            <a className="more-btn">
                                                More Details
                                                <img src="/assets/images/icon/btn-arrow1.svg" alt="" />
                                            </a>
                                        </Link >
                                    </div>
                                )}
                            </div>
                        </>
                    }
        </>
    );
}
export default OtherServiceSlide;