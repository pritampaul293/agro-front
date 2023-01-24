import React, { Component, Fragment } from "react";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";
import RefundSection from "../components/RefundDescription/RefundSection";

class RefundPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <PageTop pagetitle="Refund Policy" />
        <RefundSection />
        <Footer />
      </Fragment>
    );
  }
}

export default RefundPage;
