import React from "react";

function BlogComment() {
  return (
    <div className="comment-area">
      <div className="blog-comments mb-120">
        <div className="comments-title">
          <h2>Comment</h2>
        </div>
        <ul className="comment-list">
          <li>
            <div className="single-comment mb-50 d-flex align-items-center justify-content-between flex-md-nowrap flex-wrap">
              <div className="comment-content">
                <div className="c-header d-flex align-items-center justify-content-between">
                  <div className="author-area">
                    <div className="author-img">
                      <img src="assets/images/blog/blog-author.png" alt="" />
                    </div>
                    <div className="author-details">
                      <h5 className="mb-0">Angilano Cooper</h5>
                      <div className="c-date">11 January, 2022 At 01.56 pm</div>
                    </div>
                  </div>
                  <div className="replay-btn">
                    <a href="#">
                      <img src="assets/images/icon/replay-icon.svg" alt="" />{" "}
                      Reply
                    </a>
                  </div>
                </div>
                <div className="c-body">
                  <p>
                    Pellentesque maximus augue orci, quis congue purus iaculison
                    id. Maecenas eu lorem quisesdoi massal molestie vulputate in
                    sitagi amet diam. Cras eu odio sit amet ipsum cursus for
                    that gone pellentesquea. thisaton Vestibulum ut aliquet
                    risus. In hac habitasse plateajoa dictumst. Nuncet posuere
                    scelerisque justo in accumsan.Pellentesque
                  </p>
                </div>
              </div>
            </div>
            <ul className="comment-reply">
              <li>
                <div className="single-comment d-flex align-items-center justify-content-between flex-md-nowrap flex-wrap">
                  <div className="comment-content">
                    <div className="c-header d-flex align-items-center justify-content-between">
                      <div className="author-area">
                        <div className="author-img">
                          <img
                            src="assets/images/blog/blog-author1.png"
                            alt=""
                          />
                        </div>
                        <div className="author-details">
                          <h5 className="mb-0">Polard Girdet</h5>
                          <div className="c-date">
                            11 January, 2022 At 01.56 pm
                          </div>
                        </div>
                      </div>
                      <div className="replay-btn">
                        <a href="#">
                          <img
                            src="assets/images/icon/replay-icon.svg"
                            alt=""
                          />{" "}
                          Reply
                        </a>
                      </div>
                    </div>
                    <div className="c-body">
                      <p>
                        Pellentesque maximus augue orci, quis congue purus
                        iaculison id. Maecenas eu lorem quisesdoi massal
                        molestie vulputate in sitagi amet diam. Cras eu odio sit
                        amet ipsum cursus for that gone pellentesquea. thisaton
                        Vestibulum ut aliquet risus. In hac habitasse plateajoa
                        dictumst. Nuncet posuere scelerisque justo in
                        accumsan.Pellentesque
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="comment-form">
        <div className="comments-title">
          <h2>Leave a Reply</h2>
        </div>
        <form>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-inner name mb-40">
                <input type="text" placeholder="Enter your name" required />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-inner email mb-40">
                <input type="text" placeholder="Enter your email" required />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-inner mb-40">
                <textarea placeholder="Your message" defaultValue={""} />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="form-inner two">
                <button className="primary-btn3 btn-lg" type="submit">
                  Submit Comment
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BlogComment;
