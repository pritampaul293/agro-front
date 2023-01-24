import React,{useState} from "react";
import CartSingleProduct from "../CartSingleProduct/CartSingleProduct";
import SummaryCart from "../SummaryCart/SummaryCart";
import "./Cart.css";

const Cart = ({ cart }) => {
  const [num, setNum]= useState(0);
  const handleChange = (e)=>{
    setNum(e.target.value);
   };

  const incNum =()=>{
    setNum(Number(num)+1);
  };

const decNum = () => {
  setNum(num - 1);
  };

  return (
    <div className="cart-container  my-5 p-5">
      <div className="details-container">
        {cart.length != 0 ? (
          cart.map((product) => (
            <CartSingleProduct
              key={product._id}
              item={product}
              num={num}
              handleChange={handleChange}
              incNum={incNum}
              decNum={decNum}
            ></CartSingleProduct>
          ))
        ) : (
          <div>
            <p className="h3 text-secondary">আপনার পণ্য কার্ট খালি!!</p>
          </div>
        )}
      </div>
      <div className="summary-container">
        <SummaryCart
          cart={cart}
          num={num}
          // handleBuy={handleBuy}
        ></SummaryCart>
      </div>
    </div>
  );
};

export default Cart;
