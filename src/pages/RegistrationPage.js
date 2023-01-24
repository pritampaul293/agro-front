import React, { Component, Fragment } from "react";

import Footer from "../components/Footer/Footer";
import SignUp from "../components/SignUp/SignUp";

class RegistrationPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        {/* <PageTop pagetitle="Registration System"/> */}
        <SignUp />
        <Footer />
      </Fragment>
    );
  }
}

export default RegistrationPage;
