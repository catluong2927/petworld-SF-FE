import React, {useEffect, useState} from "react";

export const ServiceReview = (props) => {
    const  [reviews, setReviews] = useState([]);
    useEffect(() => {
        setReviews(props.reviews)
    }, [reviews])
    return (
        <div
            className="tab-content tab-content2"
        >
            <div
                className="tab-pane fade active show"
            >
                <div className="reviews-area">
                    <div className="row g-lg-4 gy-5">
                        <div className="col-lg-8">
                            <div className="number-of-review">
                                <h3>Review ({reviews.length}) :</h3>
                            </div>
                            <div className="review-list-area">
                                <ul className="review-list">
                                    {reviews.map(review =>
                                        <li key={review.key}>
                                        <div className="single-review d-flex  flex-md-nowrap flex-wrap">
                                            <div className="review-image">
                                                <img
                                                    src="/assets/images/bg/review-img-1.png"
                                                    alt="image"
                                                />
                                            </div>
                                            <div className="review-content">
                                                <div className="c-header d-flex align-items-center">
                                                    <div className="review-meta">
                                                        <h5 className="mb-0">
                                                            <a href="#">Rocky Mike ,</a>
                                                        </h5>
                                                        <div className="c-date">
                                                            {new Date(review.date).toLocaleDateString('en-US', {
                                                                day: 'numeric',
                                                                month: 'long',
                                                                year: 'numeric',
                                                                hour: 'numeric',
                                                                minute: 'numeric',
                                                                hour12: true
                                                            })}
                                                        </div>

                                                    </div>
                                                    <div className="replay-btn">
                                                        <a href="#">
                                                            <i className="bi bi-reply"/>
                                                            Reply
                                                        </a>
                                                    </div>
                                                </div>
                                                <ul className="product-review">
                                                    {Array(review.start).fill(0).map((star, index) => (
                                                        <li key={index}>
                                                            <i className="bi bi-star-fill" />
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="c-body">
                                                    <p>{review.review}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                        )
                                    }
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
                                                <input
                                                    type="text"
                                                    placeholder="Name*"
                                                    required
                                                />
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

    )
}