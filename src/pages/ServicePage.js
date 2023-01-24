import React, { Component, Fragment } from 'react';
import Footer from "../components/Footer/Footer";
import KGoveshonaTips from '../components/KGoveshonaTips/KGoveshonaTips';
import PageTop from "../components/PageTop/PageTop";

class ServicePage extends Component {
    componentDidMount() {
        window.scroll(0, 0)

    }

    render() {
        return (
            <Fragment>
                <PageTop pagetitle="কৃষি গবেষণা ও প্রযুক্তি"/>
                <KGoveshonaTips />_________________________________________________________


                <Footer/>


            </Fragment>
        );
    }
}

export default ServicePage;
