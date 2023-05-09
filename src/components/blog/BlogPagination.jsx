import React from "react";

function BlogPagination() {
  return (
    <div className="paginations-area d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              <i className="bi bi-arrow-left-short" />
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              01
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              02
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              03
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              <i className="bi bi-arrow-right-short" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BlogPagination;
