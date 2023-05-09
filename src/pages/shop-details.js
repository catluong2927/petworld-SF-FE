import React from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import OthersProduct from "../components/shop/OthersProduct";
import ProductDetails from "../components/shop/ProductDetails";
import SingleProductDescription from "../components/shop/SingleProductDescription";

import Layout from "../layout/Layout";

function ShopDetails() {
  return (
    <Layout>
      <Breadcrumb pageName="Shop Details" pageTitle="Shop Details" />
      <div className="shop-details-page pt-120 mb-120">
        <div className="container">
          <ProductDetails />
          <SingleProductDescription />
          <OthersProduct />
        </div>
      </div>
    </Layout>
  );
}

export default ShopDetails;
