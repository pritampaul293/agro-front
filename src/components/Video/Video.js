import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css"
import {BigPlayButton, Player} from 'video-react'

class Video extends Component {

    constructor() {
        super();
        this.state = {
            show: false
        }
    }

    modalClose = () => this.setState({show: false})
    modalOpen = () => this.setState({show: true})


    render() {
        return (
            <Fragment>
                <Container className="text-center" style={{marginTop:'7px'}}>
                    <Row>
                        <Col lg={12} md={12} sm={12} className="videoCard">
                            <div>
                                <p className="videoTitle">কিভাবে করবো !</p>
                                <p className="videoDes">প্রথমে আমি প্রকল্পের প্রয়োজনীয়তা বিশ্লেষণ করি। প্রয়োজনীয়তা অনুসারে আমি একটি সঠিক প্রযুক্তিগত বিশ্লেষণ করি, তারপর আমি একটি সফ্টওয়্যার আর্কিটেকচার তৈরি করি। পরিকল্পনা অনুযায়ী আমি কোডিং শুরু করি। কোডিং নিয়ে পরীক্ষাও চলছে। কোডিং অংশ শেষ করার পরে চূড়ান্ত পরীক্ষা সঞ্চালিত হয়. সফল বাস্তবায়নের পর আমি সংশ্লিষ্ট প্রকল্পের জন্য 6 মাসের বিনামূল্যে বাগ ফিক্সিং পরিষেবা প্রদান করি।
                                কৃষিকাজ হল গাছপালা এবং গবাদি পশু চাষের পদ্ধতি। উপবিষ্ট মানব সভ্যতার উত্থানের বিকাশের চাবিকাঠি ছিল কৃষি, যার ফলে গার্হস্থ্যকৃত প্রজাতির চাষ খাদ্য উদ্বৃত্ত তৈরি করে যা মানুষকে শহরে বসবাস করতে সক্ষম করে। কৃষিকাজের ইতিহাসের সূত্রপাত হয়েছিল হাজার হাজার বছর আগে। </p>
                                <p><FontAwesomeIcon onClick={this.modalOpen} className="playBtn" icon={faPlayCircle}/>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                    <Modal.Body>
                        <Player>
                            <source
                                src="https://www.farmingfuturebd.com/media/imgAll/bg/FFB_30%20Sec_V0.1.mp4"/>
                            <BigPlayButton position="center"/>
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>


            </Fragment>
        );
    }
}

export default Video;