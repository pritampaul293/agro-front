import React, { Component, Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import Orthouddug from "../../components/Orthouddug/Orthouddug";
import PageTop from "../../components/PageTop/PageTop";

class KrishiCampusPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <PageTop pagetitle="কৃষি ক্যাম্পাস" />
        {/* <Orthouddug /> */}
        <Orthouddug />
        <Footer />
      </Fragment>
    );
  }
}

export default KrishiCampusPage;
