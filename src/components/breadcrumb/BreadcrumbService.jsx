import {Link, useRouteLoaderData} from "react-router-dom";
import React from "react";

function BreadcrumbService({ pageName = "Page Name", pageTitle = "Page Title" }) {
    const servicePackages = useRouteLoaderData('packages');
    return (
        <div className="inner-page-banner">
            <div className="breadcrumb-vec-btm">
                <img
                    className="img-fluid"
                    src="/assets/images/bg/inner-banner-btm-vec.png"
                    alt=""
                />
            </div>
            <div className="container">
                <div className="row justify-content-center align-items-center text-center">
                    <div className="col-lg-6 align-items-center">
                        <div className="banner-content">
                            <h1>{servicePackages.name}</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link legacyBehavior to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        {pageName}
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="banner-img d-lg-none d-block">
                            <img
                                className="img-fluid"
                                src="/assets/images/bg/inner-banner-img.png"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-img d-lg-block d-none">
                            <div className="banner-img-bg">
                                <img
                                    className="img-fluid pet-image"

                                    src="/assets/images/pet/pet-care-slide3-img-1%20(1).png"
                                    alt=""
                                />
                            </div>
                            <img
                                className="img-fluid "
                                src="assets/images/bg/inner-banner-img.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BreadcrumbService;
