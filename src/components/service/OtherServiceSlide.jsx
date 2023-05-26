import React, { useState, useEffect} from "react";
const OtherServiceSlide = (props) => {
    const [servicePackages, setServicePackages] = useState([]);
    useEffect(() => {
        setServicePackages(props.servicePackages);
    });
    return (
        <>
            {
                <div>
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
                        {servicePackages && servicePackages.map((element, index) =>
                            <div className="services-card1" key={index}>
                                <div className="icon">
                                    <img src={element.image} alt="" className='package-image ' />
                                </div>
                                <div className="content package-content">
                                    <h3 >
                                        <a href={`/service-packages/${element.id}`} >
                                            <p id='package-content-title'>{element.centerName}</p>
                                        </a>
                                    </h3>
                                    <p>{element.description}</p>
                                </div>
                                <div >
                                    <h6 className="package-price">{`$ ${element.price}`}</h6>
                                    <del></del>
                                </div>
                                <a  href={`/service-packages/${element.id}`}>
                                    <p className="more-btn">
                                        <img src="/assets/images/icon/btn-arrow1.svg" alt="" />
                                    </p>
                                </a  >
                            </div>
                        )}
                    </div>
                </div>
            }
        </>
    );
}
export default OtherServiceSlide;
