import React, { useState } from "react";
import {Link, useRouteLoaderData} from "react-router-dom";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ShopCard from "../components/shop/ShopCard";
import Layout from "../layout/Layout";
import { useEffect } from "react";
import axios from "axios";
import {useSelector} from "react-redux";


function Shop() {

  const [sizePage, setSizePage] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [category, setCategory] = useState([]);
  const [checkedCategory, setCheckedCategory] = useState([]);
  const isLogin = useSelector((state) => state.auth.login?.currentUser);
  let token = '';
  if(isLogin){
    token = isLogin.token;
  }
  console.log(token)

  const CATEGORY_API = process.env.REACT_APP_FETCH_API + `/categorys`;
  useEffect(() => {
    axios.get(`${CATEGORY_API}`, {

      headers: {
        'Authorization': `Bearer ${token}` // Truyền t
      }
    })
        .then(res => {
          setCategory(res.data.content);
        })
        .catch(err => {
        });
  }, []);


  //Cập nhật lại size
  function handleSizeChange(event) {
    setSizePage(event.target.value);
    setCurrentPage(0);
  }

  //Cập nhật lại số trang hiện tại
  function changePageNumber(page) {
    setCurrentPage(page);
    window.scroll(0,0);
  };

 
  const checkbokHandler = (event) => {
    var updatedList = [...checkedCategory];
    if (event.target.checked) {
      updatedList = [...checkedCategory, event.target.value];
    } else {
      updatedList.splice(checkedCategory.indexOf(event.target.value), 1);
      setCurrentPage(0);
    }
    setCheckedCategory(updatedList);
  };



  console.log(checkedCategory)
  //Phân trang
  function contentPageNumber() {
    let content = []
    for (let i = 0; i < totalPages; i++) {
      content.push(
        <li className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <Link className="page-link" onClick={() => changePageNumber(i)}>
            {i+1}
          </Link>
        </li>
      )
    }
    return content;
  }

  return (
    <>
    <Layout>
      <Breadcrumb pageName="Shop" pageTitle="Shop" />
      <div className="shop-page pt-120 mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="shop-sidebar">
                <div className="shop-widget">
                  <div className="check-box-item">
                    <h5 className="shop-widget-title">Category</h5>
                    <div className="checkbox-container">

                    {category.map((item) => (
                      <label className="containerss" key={item.name}>
                        {item.name}
                        <input
                          type="checkbox"
                          id={item.id}
                          value={item.id}
                          onChange={checkbokHandler} 
                        />
                        <span className="checkmark"/>
                      </label>
                    ))}

                    </div>
                  </div>
                </div>
                <div className="shop-widget">
                  <div className="item">
                    <h5 className="shop-widget-title">Brands included</h5>
                    <ul className="container">
                        <li>Korea </li>
                        <li>VietNam </li>
                        <li>Japan</li>
                        <li>America</li>
                        <li>ChiNa</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="row mb-50">
                <div className="col-lg-12">
                  <div className="multiselect-bar">
                    <h6>shop</h6>
                    <div className="multiselect-area">
                      <div className="single-select">
                        <span>Show</span>
                        <select
                          className="defult-select-drowpown"
                          id="color-dropdown"
                          onChange={handleSizeChange}
                        >
                          <option name="9" value={"9"} >9</option>
                          <option name="12" value={"12"} >12</option>
                          <option name="15" value={"15"} >15</option>
                          <option name="18" value={"18"} >18</option>
                          <option name="21" value={"21"} >21</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row g-4 justify-content-center">
                <ShopCard sizePages={sizePage} currentPage={currentPage} setTotalPages={setTotalPages} checkedCategory={checkedCategory}/>
              </div>
              <div className="row pt-70">
                <div className="col-lg-12 d-flex justify-content-center">
                  <div className="paginations-area">

                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>

                          <Link className="page-link" onClick={() => changePageNumber(currentPage - 1)}>
                            <i className="bi bi-arrow-left-short" />
                          </Link>
                        </li>

                        {contentPageNumber()}
                        
                        <li className={`page-item ${currentPage === (totalPages - 1) ? 'disabled' : ''}`}>
                          <Link className="page-link" onClick={() => changePageNumber(currentPage + 1)}>
                            <i className="bi bi-arrow-right-short" />
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    </>
  );
                    }

export default Shop;
