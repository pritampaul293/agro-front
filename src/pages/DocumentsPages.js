import React, { Component, Fragment } from "react";
import Documents from "../components/Documents/Documents";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";

class DocumentsPages extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <PageTop pagetitle="Papers Documents" />
        <Documents />

        <Footer />
      </Fragment>
    );
  }
}

export default DocumentsPages;
