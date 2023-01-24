import React, { Component, Fragment } from "react";
import AgroGib from "../../components/AgroGib/AgroGib";
import Footer from "../../components/Footer/Footer";
import PageTop from "../../components/PageTop/PageTop";

class AgroComPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <Fragment>
        <PageTop pagetitle="এগ্রো বিজনেস কমুনিটি" />
        {/* <Orthouddug /> */}
        <AgroGib />
        <Footer />
      </Fragment>
    );
  }
}

export default AgroComPage;
