import React, { Component, Fragment } from "react";
import AboutDescription from "../components/AboutDescription/AboutDescription";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";

class AboutPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <PageTop pagetitle="About Me" />
        <AboutDescription />
        <Footer />
      </Fragment>
    );
  }
}

export default AboutPage;
