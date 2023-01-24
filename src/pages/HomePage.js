import React, { Component, Fragment } from "react";
import AgroGib from "../components/AgroGib/AgroGib";
import FarmToProkriti from "../components/FarmToProkriti/FarmToProkriti";
import Footer from "../components/Footer/Footer";
import FourCards from "../components/FourCards/FourCards";
import KGoveshonaTips from "../components/KGoveshonaTips/KGoveshonaTips";
import News from "../components/News/News";
import Nirbacitokhobor from "../components/Nirbacitokhobor/Nirbacitokhobor";
import Orthouddug from "../components/Orthouddug/Orthouddug";
import Slider from "../components/Slider/Slider";
import TopBanner from "../components/TopBanner/TopBanner";
import Video from "../components/Video/Video";

class HomePage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <Fragment>
        <TopBanner />
        <News />
        {/* <Services/> */}
        <Slider />
        <Nirbacitokhobor />
        <FourCards />
        <Orthouddug />
        <AgroGib />
        <KGoveshonaTips />
        <FarmToProkriti />
        {/* <Analysis/> */}
        {/* <RecentProjects/> */}
        {/* <Courses/> */}
        {/* <Summary/> */}
        <Video />
        {/* <ClientReview/> */}
        <Footer />
      </Fragment>
    );
  }
}

export default HomePage;
