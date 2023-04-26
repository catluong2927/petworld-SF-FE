import React from "react";

function Home1feature() {
  return (
    <div className="h1-feature-area">
      <div className="container-fluid p-0">
        <div className="row justify-content-center bg">
          <div className="col-lg-10 gap-4 d-flex align-items-center justify-content-lg-between justify-content-center flex-lg-nowrap flex-wrap ">
            <div className="feature-left">
              <div className="single-card mb-45">
                <div className="icon">
                  <img src="assets/images/icon/badge1.svg" alt="" />
                </div>
                <div className="content">
                  <h4>ID Badged</h4>
                  <p>
                    Pellentesque maximus augue orci, quis congue purus iaculison
                  </p>
                </div>
              </div>
              <div className="single-card">
                <div className="icon">
                  <img src="assets/images/icon/checked1.svg" alt="" />
                </div>
                <div className="content">
                  <h4>DBS Checked</h4>
                  <p>
                    Pellentesque maximus augue orci, quis congue purus iaculison
                  </p>
                </div>
              </div>
            </div>
            <div className="freture-title">
              <h2>
                Your Pets Are <span>100% Safe</span> at Our Care.
              </h2>
            </div>
            <div className="feature-right">
              <div className="single-card mb-45">
                <div className="icon">
                  <img src="assets/images/icon/insured1.svg" alt="" />
                </div>
                <div className="content">
                  <h4>Fully Insured</h4>
                  <p>
                    Pellentesque maximus augue orci, quis congue purus iaculison
                  </p>
                </div>
              </div>
              <div className="single-card">
                <div className="icon">
                  <img src="assets/images/icon/fast-aid1.svg" alt="" />
                </div>
                <div className="content">
                  <h4>Pet First-Aid Trained</h4>
                  <p>
                    Pellentesque maximus augue orci, quis congue purus iaculison
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

export default Home1feature;
