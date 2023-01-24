import React, { Component, Fragment } from 'react';
import AgroGib from "../components/AgroGib/AgroGib";
import Footer from "../components/Footer/Footer";
import PageTop from "../components/PageTop/PageTop";

class PortfolioPage extends Component {
    componentDidMount() {
        window.scroll(0, 0)

    }

    render() {
        return (
            <Fragment>
                <PageTop pagetitle="এগ্রো বিজনেস কমুনিটি"/>
                <AgroGib />
                {/* <AllProjects/> */}
                <Footer/>

            </Fragment>
        );
    }
}

export default PortfolioPage;