import React, {useEffect, useRef, useState} from "react";
import Breadcrumb from "../components/breadcrumb/Breadcrumb";
import BillingDetails from "../components/shop/BillingDetails";
import { Toast } from 'primereact/toast';
import OrderSummary from "../components/shop/OrderSummary";
import Layout from "../layout/Layout";

function CheckOutPage() {
  const toast = useRef(null);
  const [alteredAmount, setAlteredAmount] = useState(0);
  const  [total, seTotal] = useState(0);

  useEffect(() => {

  }, [alteredAmount])
  return (
    <Layout>
      <Breadcrumb pageName="Check Out" pageTitle="Check Out" />
      <Toast ref={toast} />
      <div className="checkout-section pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
              <BillingDetails  toast={toast} onGetTotal={total} />
            </div>
            <aside className="col-lg-5">
              <OrderSummary  onSenTotal={seTotal}  />
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CheckOutPage;
