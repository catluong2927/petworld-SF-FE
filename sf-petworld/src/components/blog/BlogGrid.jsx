import {Link} from "react-router-dom";
import React from "react";
import blogData from "../../data/blog.json";
import BlogPagination from "./BlogPagination";
function BlogGrid() {
  return (
    <div className="blog-grid-pages pt-120 mb-120">
      <div className="container">
        <div className="row g-lg-4 gy-5 justify-content-center mb-70">
          {blogData.slice(0, 6).map((element) => {
            const { date, image, title, id, category } = element;
            return (
              <div key={id} className="col-lg-4 col-md-6 col-sm-10">
                <div className="h1-blog-card">
                  <div className="blog-img">
                    <img className="img-fluid" src={image} alt="" />
                    <div className="category">
                      <a href="#">{category}</a>
                    </div>
                  </div>
                  <div className="blog-content">
                    <div className="blog-meta">
                      <a href="#">{date}</a>
                    </div>
                    <h4>
                      <Link legacyBehavior href="/blog-details">
                        <a>{title}</a>
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <BlogPagination />
      </div>
    </div>
  );
}

export default BlogGrid;
