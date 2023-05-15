import Layout from "../layout/Layout";
import OtherServiceSlide from "../components/service/OtherServiceSlide";
import './ServicePackage.css';
import {json, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import BreadcrumbService from "../components/breadcrumb/BreadcrumbService";
import ServiceNavigation from "../components/service/ServiceNavigation";

const fetchData = async (packageName,pageSize, currentPage) => {
    const URL = `http://localhost:8080/api/packages/search/${packageName}?size=${pageSize}&page=${currentPage}`;
    const response = await fetch(URL);
    const data = await response.json();
    const servicePackages = data.content;
    const totalPages = data.totalPages;
    return { servicePackages, totalPages };
};
export const ServicePackage = () => {
    const  packageName = useParams();

    const [currentPage, setCurrentPage] = useState(0);
    const pageSize = 9;
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        const fetchPage = async () => {
            const { servicePackages, totalPages } = await fetchData("Package 1", pageSize, currentPage);
            setData(servicePackages);
            setTotalPages(totalPages);
        };
        fetchPage();
    }, [currentPage, pageSize]);

    const getCurrentPageHandler = (currentPage) => {
        setCurrentPage(currentPage)
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
                                <label className="service-package-checkbox-label">
                                    Price
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span className="service-package-checkmark" />
                                    {<p className="service-package-checkmark--checked"></p>}
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
export async function loaderPackages({request, params}) {
    const name = params.name;
    const URL = 'http://localhost:8080/api/service-packages/';
    const URL_FAKE = 'https://6436d35a3e4d2b4a12dcb9a2.mockapi.io/api/v1/service-packages/8';
    const response = await fetch( URL_FAKE);
    if (!response.ok) {
        throw json({message: "no result"}, {status: 500})
    } else {
        const resData = await response.json();
        return resData;
    }
};