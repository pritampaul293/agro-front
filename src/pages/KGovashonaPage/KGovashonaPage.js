import React, { Component, Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import KGoveshonaTips from "../../components/KGoveshonaTips/KGoveshonaTips";
import PageTop from "../../components/PageTop/PageTop";

class KGovashonaPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <PageTop pagetitle="কৃষি গবেষণা ও প্রযুক্তি" />
        {/* <Orthouddug /> */}
        <KGoveshonaTips />
        <Footer />
      </Fragment>
    );
  }
}

export default KGovashonaPage;
