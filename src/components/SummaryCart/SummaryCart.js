import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RemoveContext } from "../../router/AppRoute";

import "./SummaryCart.css";

const SummaryCart = ({ cart, num }) => {
  const [a, handleBuy] = useContext(RemoveContext);

  let productTotal = 0;
  let grandTotal = 0 * Number(num);
 
  let deliveryFee = 0;

  for (const product of cart) {
    const productPrice = product.price.split("");
    console.log(productPrice);
    for (let i = 0; i < productPrice.length; i++) {
      // console.log(convertedProductPrice[i]);
      if (productPrice[i] === "০") {
        productPrice[i] = "0";
      } else if (productPrice[i] === "১") {
        productPrice[i] = "1";
      } else if (productPrice[i] === "২") {
        productPrice[i] = "2";
      } else if (productPrice[i] === "৩") {
        productPrice[i] = "3";
      } else if (productPrice[i] === "৪") {
        productPrice[i] = "4";
      } else if (productPrice[i] === "৫") {
        productPrice[i] = "5";
      } else if (productPrice[i] === "৬") {
        productPrice[i] = "6";
      } else if (productPrice[i] === "৭") {
        productPrice[i] = "7";
      } else if (productPrice[i] === "৮") {
        productPrice[i] = "8";
      } else if (productPrice[i] === "৯") {
        productPrice[i] = "9";
      }
    }

    const numericProductPrice = Number(productPrice.join(""));
    productTotal = productTotal + numericProductPrice;
    deliveryFee = productTotal > 0 ? 100 : 0;
    grandTotal = productTotal + deliveryFee;
  }

  return (
    <div className="total-container p-4 text-start">
      <h4 className="fw-bold">অর্ডার সারাংশ</h4>
      <hr className="px-2 text-secondary" />
      <div className=" text-secondary d-flex justify-content-between align-items-center fw-bold">
        <span>মোট পণ্য:</span>
        <span>{cart.length}</span>
      </div>
      <hr className="px-2 text-secondary" />
      <div className=" text-secondary d-flex justify-content-between align-items-center fw-bold">
        <span>পণ্য ফি:</span>
        <span>{productTotal}৳</span>
      </div>
      <hr className="px-2 text-secondary " />
      <div className="text-secondary d-flex justify-content-between align-items-center fw-bold">
        <span>ডেলিভারি করার টাকা:</span>
        <span>{deliveryFee}৳</span>
      </div>
      <hr className="px-2 text-secondary" />
      <div className=" text-dark d-flex justify-content-between align-items-center">
        <h4 className="fw-bold fs-5">মোট:</h4>
        <h4 className="fw-bold fs-5">{grandTotal}৳</h4>
      </div>
      <div className=" d-grid mt-1">
        <Link to={`/buy`} style={{ textDocoration: "none", color: "#fff" }}>
          <Button variant="success" style={{ marginRight: "20px" }}>
            Buy Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SummaryCart;
