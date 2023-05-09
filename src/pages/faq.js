import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import Layout from "../layout/Layout";

function Faq() {
  return (
    <Layout>
      <Breadcrumb pageName="FAQ" pageTitle="FAQ" />
      <div className="faq-page pt-120 mb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="genarel-qustions-area mb-100">
                <h2>General Questions</h2>
                <p>
                  Donec bibendum enim ut elit porta ullamcorper. Vestibulum Nai
                  quam nulla, venenatis eget dapibus ac, catali aman topuny
                  wekemdini iaculis vitae nulla. Morbi mattis nec mi ac mollis.{" "}
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
                        04. I have a press/media enquiry – who should I contact
                        can help?
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
              <div className="genarel-qustions-area">
                <h2>Other Questions</h2>
                <p>
                  Donec bibendum enim ut elit porta ullamcorper. Vestibulum Nai
                  quam nulla, venenatis eget dapibus ac, catali aman topuny
                  wekemdini iaculis vitae nulla. Morbi mattis nec mi ac mollis.{" "}
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
                        04. I have a press/media enquiry – who should I contact
                        can help?
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
    </Layout>
  );
}

export default Faq;
