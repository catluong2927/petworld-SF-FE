import React from "react";

function VideoBanner1() {
  return (
    <div className="hero-video-area">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="video-wraper">
              <video autoPlay loop="loop" muted preload="auto">
                <source src="assets/video/video-02.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoBanner1;
