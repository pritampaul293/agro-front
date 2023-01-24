import React, { Component, Fragment } from "react";
import Footer from "../components/Footer/Footer";
import KhoborDetails from "../components/KhoborDetails/KhoborDetails";
import RelatedArticles from "../components/RelatedArticles/RelatedArticles";

class CourseDetailsPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        {/* <CourseDetails/> */}
        <KhoborDetails />
        <RelatedArticles />
        <Footer />
      </Fragment>
    );
  }
}

export default CourseDetailsPage;
