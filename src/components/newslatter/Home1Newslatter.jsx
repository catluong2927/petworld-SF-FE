import React from "react";

function Home1Newslatter() {
  return (
    <div className="newsletter-area mb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="newsletter-wrap">
              <div className="section-title1 text-center mb-40">
                <span>
                  <img src="assets/images/icon/section-vec-l1.svg" alt="" />
                  Get In Touch
                  <img src="assets/images/icon/section-vec-r1.svg" alt="" />
                </span>
                <h2>Let’s Connect Our Newsletter</h2>
              </div>
              <form>
                <div className="form-inner">
                  <input type="text" placeholder="Type Your Email" />
                  <button className="primary-btn1" type="submit">
                    Connect
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1Newslatter;
