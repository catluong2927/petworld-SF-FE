import React from "react";

function ChooseUs() {
  return (
    <div className="h1-choose-area mb-120">
      <div className="container ">
        <div className="row g-lg-4 gy-5 justify-content-center">
          <div className="col-lg-5">
            <div className="section-title1">
              <span>
                <img src="assets/images/icon/section-vec-l1.svg" alt="" />
                Why Choose Us
                <img src="assets/images/icon/section-vec-r1.svg" alt="" />
              </span>
              <h2>we provide the best care services.</h2>
            </div>
            <div className="choose-content">
              <p>
                Pellentesque maximus augue orci, quis congue purus iaculis id.
                Maecenas eudocl lorem quis massal molestie vulputate in sit amet
                diam. Cras eu odio sit amet ont tellus. Cras ut sollicitudin
                urna. Vivamus blandit,
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
                      01. In et finibus lectus. Donec scelerisque tortor?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Pellentesque maximus augue orci, quis congue purus iaculis
                      id. Maecenas eudocl lorem quis massal molestie vulputate
                      in sit amet diam. Cras eu odio sit amet ont tellus. Cras
                      ut sollicitudin urna. Vivamus blandit,{" "}
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
                      02. rhoncus turpis porta non Curabitur interdum?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Pellentesque maximus augue orci, quis congue purus iaculis
                      id. Maecenas eudocl lorem quis massal molestie vulputate
                      in sit amet diam. Cras eu odio sit amet ont tellus. Cras
                      ut sollicitudin urna. Vivamus blandit,{" "}
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
                      Pellentesque maximus augue orci, quis congue purus iaculis
                      id. Maecenas eudocl lorem quis massal molestie vulputate
                      in sit amet diam. Cras eu odio sit amet ont tellus. Cras
                      ut sollicitudin urna. Vivamus blandit,
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-8">
            <div className="choose-img">
              <div className="batch">
                <img src="assets/images/icon/choose-star.svg" alt="" />
                <span>
                  100% Safe
                  <br />
                  Your Pet
                </span>
              </div>
              <div className="choose-vector">
                <img src="assets/images/icon/choose-vector.svg" alt="" />
              </div>
              <img
                className="img-fluid"
                src="assets/images/bg/choose-img.png"
                alt="choose-img"
              />
            </div>
          </div>
          <div className="col-lg-2">
            <div className="choose-feature">
              <ul>
                <li>
                  <div className="single-choose-card">
                    <div className="icon">
                      <img src="assets/images/icon/care.svg" alt="" />
                    </div>
                    <div className="content">
                      <h4>Personalized care</h4>
                      <p>
                        Pellentesque maximus augue orci, quisl congue purus
                        iaculison
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="single-choose-card">
                    <div className="icon">
                      <img src="assets/images/icon/team.svg" alt="" />
                    </div>
                    <div className="content">
                      <h4>Trusted Team</h4>
                      <p>
                        Pellentesque maximus augue orci, quisl congue purus
                        iaculison
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="single-choose-card">
                    <div className="icon">
                      <img src="assets/images/icon/mind.svg" alt="" />
                    </div>
                    <div className="content">
                      <h4>Peace of mind</h4>
                      <p>
                        Pellentesque maximus augue orci, quisl congue purus
                        iaculison
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
