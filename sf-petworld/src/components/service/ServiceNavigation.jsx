import React, {useMemo, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";

function ServiceNavigation(props) {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [data, setData] = useState([]);
    const [totalCount, setTotalCount] = useState(100);
    const totalPages = Math.ceil(totalCount / pageSize);




// Tạo danh sách các trang phân trang
    const pageLinks = [];
    for (let i = 0; i < totalPages; i++) {
        const pageNumber = i + 1;
        const itemClass = currentPage === pageNumber? 'page-item active' : 'page-item';
        const linkUrl = `?numberPage=${pageNumber}`;
        const linkText = pageNumber.toString() // Định dạng số trang thành chuỗi, thêm số 0 phía trước nếu số trang có 1 chữ số

        pageLinks.push(
            <SwiperSlide className='swiper-page-service-details'>
                <li className={itemClass} key={pageNumber}>
                    <a className='page-link' href={linkUrl}>
                        {linkText}
                    </a>
                </li>
            </SwiperSlide>
        );
    }
    /// Tackle button to change the next page or the previous page //

    const prevPageHandler = () => {
        if(currentPage === 0){
            return;
        } else {
            setCurrentPage(currentPage - 1);
        }
    }
    const nextPageHandler = () => {
        if(currentPage === totalCount){
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
                autoplay: {
                    delay: 2000,
                },
                navigation: {
                    nextEl: ".next-btn-1",
                    prevEl: ".prev-btn-1",
                },
            }
        )
    })
    console.log(currentPage)
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
                    {/*<li className="page-item active">*/}
                    {/*    <a className="page-link" href={`?numberPage=1`}>*/}
                    {/*        01*/}
                    {/*    </a>*/}
                    {/*</li>*/}

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
