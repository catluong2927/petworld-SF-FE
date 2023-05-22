import Layout from "../layout/Layout";
import OtherServiceSlide from "../components/service/OtherServiceSlide";
import './ServicePackage.css';
import {json, redirect, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import BreadcrumbService from "../components/breadcrumb/BreadcrumbService";
import ServiceNavigation from "../components/service/ServiceNavigation";

const fetchData = async (packageName,pageSize, currentPage, sortedField="") => {
    const URL = `http://localhost:8080/api/packages/search/${packageName}?size=${pageSize}&page=${currentPage}&sort=${sortedField}`;
    const response = await fetch(URL);
    const data = await response.json();
    const servicePackages = data.content;
    const totalPages = data.totalPages;
    return { servicePackages, totalPages };
};
export const ServicePackage = () => {
    const  packageName = useParams();
    const [isSortedByPrice, setIsSortedByPrice] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const pageSize = 9;
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        let sortedField= '';
        if(isSortedByPrice){
            sortedField = 'minPrice'
        }
        const fetchPage = async () => {
            const { servicePackages, totalPages } = await fetchData("DayCare", pageSize, currentPage, sortedField);
            setData(servicePackages);
            setTotalPages(totalPages);
        };
        fetchPage();
    }, [currentPage, pageSize, isSortedByPrice]);

    const getCurrentPageHandler = (currentPage) => {
        setCurrentPage(currentPage)
    }
    const sortByPriceHandler = () => {
        setIsSortedByPrice(!isSortedByPrice);
    }
    return (
        <Layout>
            <BreadcrumbService/>
            <div className='service-package'>
                <div className="service-package-wrapper">
                    <div className="service-package-sidebar">
                        <div className="service-package-check-box-item">
                            <h5 className="service-package-widget-title">Order By</h5>
                            <div className="service-package-checkbox-container">
                                <label className="service-package-checkbox-label" >
                                    Price
                                    <input type="button" onClick={sortByPriceHandler} />
                                    <span className="service-package-checkmark" />
                                    {isSortedByPrice && <p className="service-package-checkmark--checked"></p>}
                                </label>
                                <label className="service-package-checkbox-label">
                                    Option 2
                                    <input type="checkbox" />
                                    <span className="service-package-checkmark" />
                                    {<p className="service-package-checkmark--checked"></p>}
                                </label>
                                <label className="service-package-checkbox-label">
                                    Option 3
                                    <input type="checkbox" />
                                    <span className="service-package-checkmark" />
                                    {<p className="service-package-checkmark--checked"></p>}
                                </label>
                                <label className="service-package-checkbox-label">
                                    Option 4
                                    <input type="checkbox" />
                                    <span className="service-package-checkmark" />
                                    {<p className="service-package-checkmark--checked"></p>}
                                </label>
                                <label className="service-package-checkbox-label">
                                    Bones &amp; Rawhide
                                    <input type="checkbox" />
                                    <span className="service-package-checkmark" />
                                    {<p className="service-package-checkmark--checked"></p>}
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="service-package-content">
                        <OtherServiceSlide servicePackages={data} />
                    </div>
                </div>
            </div>
            <ServiceNavigation
                currentPage={currentPage}
                totalPages = {totalPages}
                getCurrentPage={getCurrentPageHandler}
            />
        </Layout>
    )
}


export const sentRequest = async (url, method = 'GET', data = null) =>{
    const CART_API = process.env.REACT_APP_FETCH_API;
    console.log(data)
    try {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        if (data) {
            options.body = JSON.stringify(data);
            const responsePost = await fetch(`${CART_API}/${url}`, options);
            return redirect("/cart")
        }

        const response = await fetch(`${CART_API}/${url}`, options);

        if (!response.ok) {
            throw new Error('Request failed');
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        // Handle error here
        console.error('Error:', error.message);
        // You can choose to throw an error or return a default value
        throw error;
    }
}
