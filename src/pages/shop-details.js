import { useParams } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import ProductDetails from "../components/shop/ProductDetails";
import SingleProductDescription from "../components/shop/SingleProductDescription";
import Layout from "../layout/Layout";
import { Toast } from 'primereact/toast';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";  

function ShopDetails() {
  const { id } = useParams();
  const toast = useRef(null);
  const PRODUCT_DETAIL_API = process.env.REACT_APP_FETCH_API + `/products/${id}`;
  const [product, setProduct] = useState({});

  useEffect((() => {
    axios
      .get(`${PRODUCT_DETAIL_API}`)
      .then(res => {
        setProduct(res.data)
        window.scroll(0,0)
      })
      .catch(err => { throw err })
  }), [id, PRODUCT_DETAIL_API])

  return (
    <>
      <div className="card flex justify-content-center">
        <Toast ref={toast} />
      </div>
      <Layout>
        <Breadcrumb pageName="Shop Details" pageTitle="Shop Details" />
        <div className="shop-details-page pt-120 mb-120">
          <div className="container">
            <ProductDetails productDetail={product} productId={id} toast={toast}/>
            <SingleProductDescription productDescription={product}/>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default ShopDetails;
