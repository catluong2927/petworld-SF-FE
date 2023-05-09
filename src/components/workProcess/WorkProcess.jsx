import React from "react";

function WorkProcess() {
  return (
    <div className="h2-working-process mb-120">
      <div className="container">
        <div className="row mb-60">
          <div className="col-lg-12">
            <div className="section-title2 text-center">
              <h2>Three Step And enjoy your day.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="work-process-area">
              <div className="work-process-card">
                <div className="sl-no">
                  <span>Step</span>
                  <h3>01</h3>
                </div>
                <div className="icon">
                  <img src="assets/images/icon/search2.svg" alt="" />
                </div>
                <div className="work-content text-center">
                  <h3>Select Service</h3>
                  <p>
                    Read verified reviews by pet owners like you and choose a
                    sitter who’s a great match for you .
                  </p>
                </div>
              </div>
              <div className="work-proces-arrow">
                <img
                  className="img-fluid"
                  src="assets/images/bg/h2-work-proces-arrow.png"
                  alt=""
                />
              </div>
              <div className="work-process-card two">
                <div className="sl-no">
                  <span>Step</span>
                  <h3>02</h3>
                </div>
                <div className="icon">
                  <img src="assets/images/icon/appoinment2.svg" alt="" />
                </div>
                <div className="work-content text-center">
                  <h3>Book Your Day</h3>
                  <p>
                    Read verified reviews by pet owners like you and choose a
                    sitter who’s a great match for you .
                  </p>
                </div>
              </div>
              <div className="work-proces-arrow">
                <img
                  className="img-fluid"
                  src="assets/images/bg/h2-work-proces-arrow.png"
                  alt=""
                />
              </div>
              <div className="work-process-card three">
                <div className="sl-no">
                  <span>Step</span>
                  <h3>03</h3>
                </div>
                <div className="icon">
                  <img src="assets/images/icon/relax2.svg" alt="" />
                </div>
                <div className="work-content text-center">
                  <h3>Have Relax</h3>
                  <p>
                    Read verified reviews by pet owners like you and choose a
                    sitter who’s a great match for you .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkProcess;
