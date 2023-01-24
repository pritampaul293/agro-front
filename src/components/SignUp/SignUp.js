import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { user, setUser, registerUser, setIsLoading, saveUser } = useAuth();
  const history = useHistory();
  const [error, setError] = useState(false);
  const [passError, setPassError] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm();

  //   show user
  useEffect(() => {
    // console.log(user);
    // console.log(user.email, user.displayName, user.mobile, user.nidNo);
  }, [user]);

  const onSubmit = (data) => {
    //   console.log(data)
    setError(false);
    setPassError(false);
    if (
      data.name === "" ||
      data.email === "" ||
      data.password === "" ||
      data.mobile === "" ||
      // data.nidNo === "" ||
      data.remember === ""
    ) {
      setError(true);
      return;
    }
    // register user with email and password
    registerUser(data.email, data.password)
      .then((result) => {
        // console.log(data);
        // console.log(data.displayName);
        saveUser(
          data.email,
          data.displayName,
          data.mobile,
          data.location,
          // data.nidNo,
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        );
        setUser({
          ...user,
          email: data.email,
          displayName: data.displayName,
          mobile: data.mobile,
          location: data.location,
          // nidNo: data.nidNo,
          imgUrl:
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        });
        alert("Registration successfull");
        history.push("/dashboard");

        // saveUser(data.name,data.email,data.mobile,data.nidNo)
      })
      .catch((err) => {
        alert(`Error: ${err.message}`);
      })
      .finally(setIsLoading(false));

    reset();
  };

  return (
    <>
      <Container fluid={true} className="topFixedPage p-5">
        <div>
          <Container className="regBox">
            <Row>
              <form
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
              >
                <h3 className="signUPHeader">নিবন্ধন করুন</h3>

                <div className="form-group">
                  <label className="loginText">নাম(ইংরেজীতে লিখুন)</label>
                  <input
                    style={{ borderRadius: "20px" }}
                    {...register("displayName")}
                    type="text"
                    className="form-control"
                    placeholder="Enter name"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label className="loginText">ইমেইল(ইংরেজীতে লিখুন)</label>
                  <input
                    style={{ borderRadius: "20px" }}
                    {...register("email")}
                    email
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label className="loginText">
মোবাইল নাম্বার(ইংরেজীতে লিখুন)</label>
                  <input
                    style={{ borderRadius: "20px" }}
                    {...register("mobile")}
                    type="text"
                    className="form-control"
                    placeholder="Enter mobile no"
                  />
                </div>
                <br />
                <div className="form-group">
                  <label className="loginText">জেলা(ইংরেজীতে লিখুন)</label>
                  <input
                    style={{ borderRadius: "20px" }}
                    {...register("location")}
                    type="text"
                    className="form-control"
                    placeholder="Enter your location"
                  />
                </div>
                {/* <div className="form-group">
                  <label className="loginText">Nid NO</label>
                  <input
                    style={{ borderRadius: "20px" }}
                    {...register("nidNo")}
                    type="text"
                    className="form-control"
                    placeholder="Enter your Nid number"
                  />
                </div> */}
                <div className="form-group">
                  <label className="loginText">
পাসওয়ার্ড(ইংরেজীতে লিখুন)</label>
                  <input
                    style={{ borderRadius: "20px" }}
                    {...register("password")}
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      {...register("remember")}
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label className="loginText2" htmlFor="customCheck1">
                    মনে রাখবেন
                    </label>
                  </div>
                </div>

                <Button variant="success" type="submit">
                নিবন্ধন করুন
                </Button>
                {error && (
                  <p
                    style={{
                      color: "red",
                      letterSpacing: "1px",
                      marginTop: "5px",
                    }}
                  >
                    ইনপুট ক্ষেত্র খালি করা যাবে না
                  </p>
                )}
                <br />
                <p className="loginText2">
                ভুলে গেছেন?,{" "}
                  <a className="loginText" href="#">
                  পাসওয়ার্ড?
                  </a>
                </p>
              </form>
            </Row>
          </Container>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
