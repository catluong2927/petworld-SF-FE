import React from "react";

function Home2Contact() {
  return (
    <div className="h2-contact-area mb-120">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row">
              <div className="col-lg-4">
                <div className="contact-wrap">
                  <div className="section-title">
                    <h2>Contact</h2>
                  </div>
                  <form>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-inner user">
                          <input type="text" placeholder="Enter your name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-inner email">
                          <input type="text" placeholder="Enter your email" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner querry">
                          <input type="text" placeholder="Subject" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <textarea
                            placeholder="Your message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-inner">
                          <button className="primary-btn3" type="submit">
                            send Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="contact-img">
                  <img
                    className="img-fluid"
                    src="assets/images/bg/h2-contact-img.png"
                    alt="contact-img"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="section-title">
                  <h2>FAQ</h2>
                </div>
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        01. In et finibus lectus. Donec scelerisque tortor?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Pellentesque maximus augue orci, quis congue purus
                        iaculis id. Maecenas eudocl lorem quis massal molestie
                        vulputate in sit amet diam. Cras eu odio sit amet ont
                        tellus. Cras ut sollicitudin urna. Vivamus blandit,{" "}
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
                        02. Rhoncus turpis porta non Curabitur interdum?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Pellentesque maximus augue orci, quis congue purus
                        iaculis id. Maecenas eudocl lorem quis massal molestie
                        vulputate in sit amet diam. Cras eu odio sit amet ont
                        tellus. Cras ut sollicitudin urna. Vivamus blandit,{" "}
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
                        03. Donec ac enim vitae ligula ultrices accum?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Pellentesque maximus augue orci, quis congue purus
                        iaculis id. Maecenas eudocl lorem quis massal molestie
                        vulputate in sit amet diam. Cras eu odio sit amet ont
                        tellus. Cras ut sollicitudin urna. Vivamus blandit,
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        04. Donec ac enim vitae ligula ultrices accum?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Pellentesque maximus augue orci, quis congue purus
                        iaculis id. Maecenas eudocl lorem quis massal molestie
                        vulputate in sit amet diam. Cras eu odio sit amet ont
                        tellus. Cras ut sollicitudin urna. Vivamus blandit,
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2Contact;
