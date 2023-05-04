import React from "react";

export const ServicePackageDescription = () => {
    return (
        <div
            className="tab-content tab-content2"
            id="v-pills-tabContent2"
        >

            <div
                className="tab-pane fade active show"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
            >
                <div className="description">
                    <p className="para-2 mb-3">
                        Our pet care service provides various forms of care for
                        pets, including feeding, exercise, grooming, and overall
                        well-being. This type of service can be provided in the
                        pet owner's home or at a facility, such as a pet hotel or
                        boarding kennel. We also offer additional services such as
                        training, transportation, and medical care. We are
                        specialize in caring for a specific type of animal, such
                        as cats or dogs, while others may be able to care for a
                        variety of different types of pets. The level of our care
                        and type of services offered will vary depending on the
                        specific pet care service.
                    </p>
                    <p className="para-2">
                        This Pet care services can be a great option for busy pet
                        owners who are unable to provide the necessary care for
                        their pets due to work or other commitments. They can also
                        be a helpful resource for pet owners who are traveling and
                        need someone to look after their pets while they are away.
                    </p>
                </div>
                <div className="row g-lg-4 gy-5">
                    <div className="col-lg-6 service-package-detail-content">
                        <p className="para-2 mb-2">
                            There is often ask some questions about the pet care
                            service and we always try to give all the answer of
                            their questions. Before taking services it is important
                            to know about the service process and its advantages or
                            disadvantages. Here is some questions and answers we set
                            as standard.
                        </p>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        01. What services are offered?
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Pet care services can include dog walking, feeding
                                        and watering, administering medication, providing
                                        companionship and playtime, and basic grooming.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        02. How do I choose a pet care service?
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Some things to consider when choosing a pet care
                                        service include the type of service you need, the
                                        cost, the availability of the service.{" "}
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        03. Is it safe to leave my pet with a pet care
                                        service?
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        Pet care services should be able to provide a safe
                                        and comfortable environment for your pet.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="services-dt-img">
                            <img
                                className="img-fluid"
                                src="assets/images/bg/services-dt-immg.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}