import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddProduct.css";

const AddProduct = () => {
  const [error, setError] = useState(false);
  // const [ratingError,setRatingError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setError(false);
    console.log(data);
    if (
      data.title === "" ||
      data.category === "" ||
      data.price === "" ||
      data.des === "" ||
      data.picture === ""
    ) {
      setError(true);
      return;
    }
    axios.post("http://localhost:5000/addProduct", data).then((res) => {
      if (res.data.insertedId) {
        alert("Product added successfully!");
      }
    });
    reset();
  };
  return (
    <div className="add-product-container">
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div className="addCycle-container">
          <div className="form-container">
            <h2
              style={{
                fontWeight: "bold",
                letterSpacing: "1px",
                textAlign: "center",
                margin: "8px 0 32px 0",
                borderBottom: "4px solid  #198754",
                width: "max-content",
              }}
            >
              পণ্য যোগ করুন
            </h2>
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
              style={{ display: "felx", flexDirection: "column" }}
            >
              <div style={{ margin: "10px 0" }}>
                <input
                  {...register("title")}
                  // defaultValue={user?.displayName}
                  placeholder="Product Title"
                  className="input-field"
                />
              </div>

              <div style={{ margin: "10px 0" }}>
                <input
                  {...register("picture")}
                  type="url"
                  placeholder="Product Image"
                  className="input-field"
                />
              </div>
              <input
                {...register("des")}
                type="text"
                placeholder="Enter Product Description"
                className="input-field"
              />
              <input
                {...register("category")}
                type="text"
                placeholder="Enter  Product Category"
                className="input-field"
              />
              <input
                {...register("price")}
                type="text"
                placeholder="Enter  Product Price"
                className="input-field"
              />

              <input type="submit" value="জমা দিন" className="submit-btn" />
              {error && (
                <p style={{ color: "red", letterSpacing: "2px" }}>
                  Input filelds cannot be empty
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
