import React, {useMemo, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

function ServiceNavigation(props) {
    const [currentPage, setCurrentPage] = useState(props.currentPage);
    const totalPages = props.totalPages;
    props.getCurrentPage(currentPage);

    const changePageHandler = (props) => {
        setCurrentPage(props);
    };

    const pageLinks = [];
    for (let i = 0; i < totalPages; i++) {
        const pageNumber = i ;
        const itemClass = currentPage === pageNumber? 'page-item active' : 'page-item';
        const linkText = pageNumber.toString()
        pageLinks.push(
            <SwiperSlide className='swiper-page-service-details' key={pageNumber} >
                <li className={itemClass} >
                    <p className='page-link' onClick={changePageHandler.bind(null,pageNumber )} >
                        {linkText}
                    </p>
                </li>
            </SwiperSlide>
        );
    }

    const prevPageHandler = () => {
        if(currentPage === 0){
            return;
        } else {
            setCurrentPage(currentPage - 1);
        }
    }
    const nextPageHandler = () => {
        if(currentPage === totalPages){
            return;
        } else {
            setCurrentPage(currentPage + 1);
        }
    };

    // Handel for page slide
    const slider = useMemo(() => {
        return (
            {
                slidesPerView: "auto",
                loop: false,
                speed: 1500,
                navigation: {
                    nextEl: ".next-btn-1",
                    prevEl: ".prev-btn-1",
                },
            }
        )
    })
    return (
        <div className="paginations-area d-flex justify-content-center">
            <nav aria-label="Page navigation example">
                <ul className="pagination  pagination-service-details">
                    <li className="page-item">
                        <a className="page-link" >
                            <i className="bi bi-arrow-left-short" onClick={prevPageHandler} />
                        </a>
                    </li>
                    <Swiper {...slider}>
                        {pageLinks}
                    </Swiper>
                    <li className="page-item">
                        <a className="page-link" >
                            <i className="bi bi-arrow-right-short" onClick={nextPageHandler} />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default ServiceNavigation;
