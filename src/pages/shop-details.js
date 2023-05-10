import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import OthersProduct from "../components/shop/OthersProduct";
import ProductDetails from "../components/shop/ProductDetails";
import SingleProductDescription from "../components/shop/SingleProductDescription";

import Layout from "../layout/Layout";

function ShopDetails() {
  const { productId } = useParams();
  const PRODUCT_DETAIL_API = process.env.REACT_APP_FETCH_API + `/products/${productId}`;
  const [product, setProduct] = useState({});

  useEffect((() => {
    axios
      .get(`${PRODUCT_DETAIL_API}`)
      .then(res => {
        console.log(res.data)
        setProduct(res.data)
      })
      .catch(err => { throw err })
  }), [productId, PRODUCT_DETAIL_API])

  return (
    <Layout>
      <Breadcrumb pageName="Shop Details" pageTitle="Shop Details" />
      <div className="shop-details-page pt-120 mb-120">
        <div className="container">
          <ProductDetails productDetail = {product}/>
          <SingleProductDescription productDescription = {product}/>
          <OthersProduct />
        </div>
      </div>
    </Layout>
  );
}

export default ShopDetails;
