import axios from "axios";
import React, { useEffect, useState } from "react";
import "./DashProfile.css";

const DashProfile = (props) => {
  const { user } = props;
  const [data, setData] = useState("");
  const [userDetails, setUserDetails] = useState({});
  console.log(userDetails.imgUrl);

  useEffect(() => {
    const url = `http://localhost:5000/users/${user.email}`;
    axios.get(url).then((res) => {
      setUserDetails(res.data[0]);
    });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${userDetails?.location}&appid=2a67c3797591a5470e6cb9ae433854e7`
      )
      .then((res) => {
        setData(res.data);
      });
  }, [userDetails]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <div>
          <img
            className="userAvatar"
            src={userDetails.imgUrl ? userDetails.imgUrl : null}
            alt=""
          />
        </div>
        <p style={{ lineHeight: "1.5", fontSize: "24px", color: "#fff" }}>
        নাম: {userDetails.displayName}
        </p>
        <p>ইমেইল: {userDetails.email}</p>
        <p>মোবাইল নাম্বার: {userDetails.mobile}</p>
        {/* <p>NidNo: {userDetails.nidNo}</p> */}
        <p style={{ marginBottom: "0.5rem" }}>
        জেলা : {userDetails.location}
        </p>
        <div className="location-container">
          <p
            style={{ marginBottom: "0.5rem", fontSize: "24px", color: "#fff" }}
          >
            <span>
              
তাপমাত্রা:{" "}
              <span style={{ color: "goldenrod" }}>
                {(data?.main?.temp - 273.15).toFixed(3)}
              </span>
            </span>
            &deg;C
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashProfile;
