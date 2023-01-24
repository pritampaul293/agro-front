import React, { Component, Fragment } from "react";
import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login";

class LoginPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        {/* <PageTop pagetitle="Login System"/> */}
        <Login />
        <Footer />
      </Fragment>
    );
  }
}

export default LoginPage;
