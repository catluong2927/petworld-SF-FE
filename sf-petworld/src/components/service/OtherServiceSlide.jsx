import {Await,  Link,  useRouteLoaderData} from 'react-router-dom'
import React, { useState, Suspense, useEffect} from "react";
import {Audio} from 'react-loader-spinner';
import '../../pages/test.css'


const OtherServiceSlide = (props) => {

<<<<<<< HEAD
    const fetchData = async (page, pageSize) => {
        const response = await fetch(`http://192.168.4.227:8080/api/service-packages/1`);
        const data = await response.json();
        const totalCount = response.headers.get('X-Total-Count');
        console.log(data)
        return data;
    };
    fetchData();
=======


>>>>>>> fa10c9d591fb149a0403f1589f4d619e0b2e31f9
  const servicePackages = useRouteLoaderData('packages');
  return (
      <>
        <Suspense fallback={<Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
        />}>
          <Await resolve={servicePackages}>
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
                      <div className="services-card1">
                        <div className="icon">
                          <img src="/assets/images/pet/pet-care-slide3-img-1 (1).png" alt="" className='package-image ' />
                        </div>
                        <div className="content package-content">
                          <h3>
                            <Link legacyBehavior to={`/service-packages/${element.id}`}>
                              <a>{element.name}</a>
                            </Link>
                          </h3>
                            {element.services.map(service => (
                                <p>{service.name}</p>
                            ))}
                        </div>
                        <Link legacyBehavior to={`/service-packages/${element.id}`}>
                          <a className="more-btn">
                            More Details
                            <img src="/assets/images/icon/btn-arrow1.svg" alt="" />
                          </a>
                        </Link>
                      </div>
                  )}

                </div>

              </>
            }
          </Await>
        </Suspense>
      </>
  );
}

export default OtherServiceSlide;



