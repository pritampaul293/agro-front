import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import CustomerRating from "./CustomerRating";

const Review = () => {
  const [value, setValue] = useState(0);
  const [error, setError] = useState(false);
  const { user, notify } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setError(false);
    data.rating = value;
    data.reviewerEmail = user?.email;
    if (
      data.name === "" ||
      data.photo === "" ||
      data.description === "" ||
      data.rating === 0 ||
      data.rating === null
    ) {
      setError(true);
      return;
    }
    axios.post("http://localhost:5000/reviews", data).then((res) => {
      if (res.data.insertedId) {
        setValue(0);
        alert("আমরা আপনার পর্যালোচনা প্রশংসা করি");
      }
    });

    reset();
  };
  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div style={{ width: "48rem" }}>
          <div className="form-container">
            <h2
              style={{
                fontWeight: "bold",
                letterSpacing: "1px",
                textAlign: "center",
                margin: "8px 0",
                borderBottom: "2px solid #15c7e7",
                width: "max-content",
              }}
            >
              পর্যালোচনা দিন
            </h2>
            <form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
              style={{ display: "felx", flexDirection: "column" }}
            >
              <div style={{ margin: "10px 0" }}>
                <input
                  {...register("name")}
                  // defaultValue={user?.displayName}
                  placeholder="আপনার নাম"
                  className="input-field"
                />
              </div>

              <div style={{ margin: "10px 0" }}>
                <input
                  {...register("photo")}
                  type="url"
                  placeholder="আপনার ফটো'র লিংক"
                  className="input-field"
                />
              </div>
              <textarea
                {...register("description")}
                type="text"
                placeholder="
                আপনার বর্ণনা"
                className="input-field"
                rows={3}
                cols={30}
              />
              {error && (
                <p style={{ color: "red", letterSpacing: "2px" }}>
                সব ক্ষেত্রগুলি পূরণ করুন
                </p>
              )}

              <CustomerRating value={value} setValue={setValue} />
              <input type="submit" value="জমা দিন" className="submit-btn" />

              {/* <input type="submit" value="SUBMIT" className="review-btn" /> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
