import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import "./Buy.css";

const Buy = () => {
  return (
    <>
      <div className="container buy-container">
        <h1 className="buy-heading">আপনার পেমেন্ট বিকল্প চয়ন করুন</h1>
        <div className="buy-options-container">
          <div className="options-1">
            <Link to={'/payment/bkash'}>
              <img
                src="https://download.logo.wine/logo/BKash/BKash-Logo.wine.png"
                alt=""
              />
            </Link>
            
            <Link to={'/payment/rocket'}>
              <img
                src="https://seeklogo.com/images/D/dutch-bangla-rocket-logo-B4D1CC458D-seeklogo.com.png"
                alt=""
              />
            </Link>
            
            <Link to={'/payment/nagad'}>
              <img
                src="https://www.logo.wine/a/logo/Nagad/Nagad-Vertical-Logo.wine.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="options-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMPtyZDB0ipWJuZ1124pBfUyaV2Y4wNYz3S-vT_aZbPA&s"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/en/8/82/City_Bank_%28Bangladesh%29_logo.png"
              alt=""
            />
          </div>
          <div className="options-3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp9zt6hfUST1cTv0CiwWEwLkuD1I__LCH6P4y4A4VLf4PgUcfwALEyZm965TPc6pBo_Ow&usqp=CAU"
              alt=""
            />
            <img
              src="https://imageio.forbes.com/blogs-images/steveolenski/files/2016/07/Mastercard_new_logo-1200x865.jpg?format=jpg&width=960"
              alt=""
            />
            <img
              src="https://e7.pngegg.com/pngimages/745/624/png-clipart-american-express-logo-credit-card-payment-credit-card-blue-text-thumbnail.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Buy;
