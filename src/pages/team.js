import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import teamData from "../data/team_data.json";
import Layout from "../layout/Layout";
function Team() {
  return (
    <Layout>
      <Breadcrumb pageName="Our Team" pageTitle="Our Team" />
      <div className="team-area two pt-120 mb-120">
        <div className="container">
          <div className="row gy-5">
            {teamData.map((item) => {
              return (
                <div key={item.id} className="col-lg-3 col-md-4 col-sm-6">
                  <div className="single-team-card">
                    <div className="member-img">
                      <img className="img-fluid" src={item.image} alt="" />
                    </div>
                    <div className="member-content">
                      <span>{item.designation}</span>
                      <h3>{item.name}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Team;
