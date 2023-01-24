import React, { Component, Fragment } from "react";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import TermsDescription from "../components/TermsDescription/TermsDescription";

class TermsPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <PageTop pagetitle="Terms & Condition" />
        <TermsDescription />
        <Footer />
      </Fragment>
    );
  }
}

export default TermsPage;
