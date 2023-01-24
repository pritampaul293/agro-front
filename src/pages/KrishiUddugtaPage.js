import React, { Component, Fragment } from "react";
import FarmToProkriti from "../components/FarmToProkriti/FarmToProkriti";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";

class KrishiUddugtaPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <PageTop pagetitle="ফার্ম টু ডাইনিং" />
        {/* <Orthouddug /> */}
        <FarmToProkriti />

        <Footer />
      </Fragment>
    );
  }
}

export default KrishiUddugtaPage;
