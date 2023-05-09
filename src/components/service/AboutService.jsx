import React from "react";

function AboutService() {
  return (
      <div className="h2-services-area mb-120">
        <div className="services-btm ">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="services-img">
                  <div className="services-img-bg">
                    <img src="assets/images/icon/h2-services-img-bg.svg" alt="" />
                  </div>
                  <img
                      className="img-fluid"
                      src="assets/images/bg/h2-services-img.png"
                      alt=""
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="services-content">
                  <img src="assets/images/icon/section-sl-no.svg" alt="" />
                  <h2>we are providing pet care service for years.</h2>
                  <p>
                    Pellentesque maximus augue orci, quis congue purus iaculison
                    id. Maecenas eu lorem quisesdoi massal molestie vulputate in
                    sitagi amet diam. Cras eu odio sit amet ipsum cursus for that
                    gone pellentesquea. thisaton Vestibulum ut aliquet risus. In
                    hac habitasse plateajoa dictumst. Nuncet posuere scelerisque
                    justo in accumsan.
                  </p>
                  <div className="author-area">
                    <div className="author-quat">
                      <p>
                        <sup>
                          <img
                              src="assets/images/icon/author-quat-icon.svg"
                              alt=""
                          />
                        </sup>{" "}
                        Pllentesque maximus augue orci, quis congue purus
                        iaculisona ideno joku Maecenas eu lorem quisesdoi massal
                        molestie jugnute vulputate in sitagajoi amet diam Cras eu
                        odio sit amet.
                      </p>
                    </div>
                    <div className="author-name-deg">
                      <h4>Kash Prestonal </h4>
                      <span>Founder, Scooby</span>
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

export default AboutService;
