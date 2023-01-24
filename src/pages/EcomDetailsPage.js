import React, { Component, Fragment } from "react";
import DigitalTechDetials from "../components/DigitalTechDetails/digitalTechDetails";
import PageTop from "../components/PageTop/PageTop";
export default class EcomDetailsPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <PageTop pagetitle="Details Products" />
        <DigitalTechDetials />
      </Fragment>
    );
  }
}
