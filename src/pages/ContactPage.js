import React, { Component, Fragment } from "react";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";

class ContactPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <PageTop pagetitle="যোগাযোগ করুন" />
        {/* <Orthouddug /> */}
        <ContactSection />

        <Footer />
      </Fragment>
    );
  }
}

export default ContactPage;
