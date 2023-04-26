import React from "react";

function SingleProductDescription() {
  return (
    <>
      <div className="row mb-120">
        <div className="col-lg-12">
          <div
            className="nav nav2 nav  nav-pills"
            id="v-pills-tab2"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              className="nav-link active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="false"
            >
              Description
            </button>
            <button
              className="nav-link"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="true"
            >
              Excessive Info
            </button>
            <button
              className="nav-link"
              id="v-pills-common-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-common"
              type="button"
              role="tab"
              aria-controls="v-pills-common"
              aria-selected="true"
            >
              Review
            </button>
          </div>
          <div className="tab-content tab-content2" id="v-pills-tabContent2">
            <div
              className="tab-pane fade active show"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <div className="description">
                <p className="para-2 mb-3">
                  This is a type of food that is specifically formulated and
                  intended for consumption by pets. It is usually sold in the
                  form of dry kibble or wet cans, and is designed to meet the
                  nutritional needs of a variety of different types of pets,
                  including dogs, cats, and small animals like guinea pigs and
                  rabbits.
                </p>
                <p className="para-2 mb-3">
                  This food may help from a variety of different ingredients,
                  including meat, grains, vegetables, and fortified vitamins and
                  minerals. Some pet food is formulated for specific life
                  stages, such as puppy or senior, and may contain higher levels
                  of certain nutrients to support the needs of pets at those
                  stages of life.
                </p>
                <p className="para-2 mb-0">
                  At the end, also formulated for pets with special dietary
                  needs, such as those with food allergies or sensitivities.
                </p>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <div className="addithonal-information">
                <table className="table total-table2">
                  <tbody>
                    <tr>
                      <td>Protein</td>
                      <td>
                        25%, to build and repair tissues, produce enzymes, and
                        maintain healthy organs.
                      </td>
                    </tr>
                    <tr>
                      <td>Fats</td>
                      <td>
                        0.5%, They also help keep the skin and coat healthy.
                      </td>
                    </tr>
                    <tr>
                      <td>Carbohydrates</td>
                      <td>
                        10%, provide energy and help pets maintain healthy
                        weight and keep good the digestive system.
                      </td>
                    </tr>
                    <tr>
                      <td>Minerals</td>
                      <td>
                        20%,Help building strong bones, maintaining healthy
                        muscles, and regulating the body's fluid balance.
                      </td>
                    </tr>
                    <tr>
                      <td>Vitamins</td>
                      <td>
                        15.5%, Essential for a variety of functions in the body,
                        including the immune system, metabolism, and growth.
                      </td>
                    </tr>
                    <tr>
                      <td>Animale</td>
                      <td> For Dog, Cat.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-common"
              role="tabpanel"
              aria-labelledby="v-pills-common-tab"
            >
              <div className="reviews-area">
                <div className="row g-lg-4 gy-5">
                  <div className="col-lg-8">
                    <div className="number-of-review">
                      <h3>Review (02) :</h3>
                    </div>
                    <div className="review-list-area">
                      <ul className="review-list">
                        <li>
                          <div className="single-review d-flex justify-content-between flex-md-nowrap flex-wrap">
                            <div className="review-image">
                              <img
                                src="assets/images/bg/review-img-1.png"
                                alt="image"
                              />
                            </div>
                            <div className="review-content">
                              <div className="c-header d-flex align-items-center">
                                <div className="review-meta">
                                  <h5 className="mb-0">
                                    <a href="#">Rocky Mike ,</a>
                                  </h5>
                                  <div className="c-date">06 july,2022</div>
                                </div>
                                <div className="replay-btn">
                                  <a href="#">
                                    <i className="bi bi-reply" />
                                    Reply
                                  </a>
                                </div>
                              </div>
                              <ul className="product-review">
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                              </ul>
                              <div className="c-body">
                                <p>
                                  I must explain to you how all this mistaken
                                  idea of denouncing pleasure and praising pain
                                  was born and I will give you a complete
                                  account.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="single-review d-flex justify-content-between flex-md-nowrap flex-wrap">
                            <div className="review-image">
                              <img
                                src="assets/images/bg/review-img-3.png"
                                alt="image"
                              />
                            </div>
                            <div className="review-content">
                              <div className="c-header d-flex align-items-center">
                                <div className="review-meta">
                                  <h5 className="mb-0">
                                    <a href="#">Rony Jhon ,</a>
                                  </h5>
                                  <div className="c-date">07 july,2022</div>
                                </div>
                                <div className="replay-btn">
                                  <a href="#">
                                    <i className="bi bi-reply" />
                                    Reply
                                  </a>
                                </div>
                              </div>
                              <ul className="product-review">
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                                <li>
                                  <i className="bi bi-star-fill" />
                                </li>
                              </ul>
                              <div className="c-body">
                                <p>
                                  I must explain to you how all this mistaken
                                  idea of denouncing pleasure and praising pain
                                  was born and I will give you a complete
                                  account.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="review-form">
                      <div className="number-of-review">
                        <h3>Leave A Reply</h3>
                      </div>
                      <form>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="form-inner mb-20">
                              <input type="text" placeholder="Name*" required />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-inner mb-20">
                              <input
                                type="email"
                                placeholder="Email*"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-inner mb-10">
                              <textarea
                                placeholder="Message..."
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-inner2 mb-30">
                              <div className="review-rate-area">
                                <p>Your Rating</p>
                                <div className="rate">
                                  <input
                                    type="radio"
                                    id="star5"
                                    name="rate"
                                    defaultValue={5}
                                  />
                                  <label htmlFor="star5" title="text">
                                    5 stars
                                  </label>
                                  <input
                                    type="radio"
                                    id="star4"
                                    name="rate"
                                    defaultValue={4}
                                  />
                                  <label htmlFor="star4" title="text">
                                    4 stars
                                  </label>
                                  <input
                                    type="radio"
                                    id="star3"
                                    name="rate"
                                    defaultValue={3}
                                  />
                                  <label htmlFor="star3" title="text">
                                    3 stars
                                  </label>
                                  <input
                                    type="radio"
                                    id="star2"
                                    name="rate"
                                    defaultValue={2}
                                  />
                                  <label htmlFor="star2" title="text">
                                    2 stars
                                  </label>
                                  <input
                                    type="radio"
                                    id="star1"
                                    name="rate"
                                    defaultValue={1}
                                  />
                                  <label htmlFor="star1" title="text">
                                    1 star
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-inner two">
                              <button
                                className="primary-btn3 btn-lg"
                                type="submit"
                              >
                                Post Comment
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProductDescription;
