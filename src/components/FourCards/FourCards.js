import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap/esm";
import { Link } from "react-router-dom";
import "./FourCards.css";

const FourCards = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    axios.get("http://localhost:5000/poltryDairy/all").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <Container style={{ marginTop: "50px", borderRadius: "20px" }}>
      <Row>
        <Col xs={3} md={3}>
          <h3 className="CardHeadline">পোল্ট্রি</h3>
          <Row>
            {data
              ?.filter((item) => item.category === "polotry")
              .map(({ title, picture, des, _id }) => {
                return (
                  <Card
                    key={_id}
                    style={{
                      width: "15rem",
                      height: "14rem",
                      marginLeft: "15px",
                      marginBottom: "15px",
                      borderColor: "white",
                    }}
                  >
                    <Link to={`/poltryDairy/${_id}`}>
                      <div className="image-box">
                        <Card.Img
                          className="image"
                          variant="top"
                          src={picture}
                        ></Card.Img>
                      </div>
                      <Card.Body>
                        <Card.Title className="newTitle">{title}</Card.Title>
                        {/* <Card.Text className='newsSubTitle'>
                                            {des}
                                        </Card.Text> */}
                      </Card.Body>
                    </Link>
                  </Card>
                );
              })}
          </Row>
        </Col>
        <Col xs={3} md={3}>
          <h3 className="CardHeadline">ডেইরি</h3>
          <Row>
            {data
              ?.filter((item) => item.category === "dairy")
              .map(({ title, picture, des, _id }) => {
                return (
                  <Card
                    key={_id}
                    style={{
                      width: "15rem",
                      height: "14rem",
                      marginBottom: "15px",
                      borderColor: "white",
                    }}
                  >
                    <Link to={`/poltryDairy/${_id}`}>
                      <div className="image-box">
                        <Card.Img
                          className="image"
                          variant="top"
                          src={picture}
                        ></Card.Img>
                      </div>
                      <Card.Body>
                        <Card.Title className="newTitle">{title}</Card.Title>
                        {/* <Card.Text className='newsSubTitle'>
                                            {des}
                                        </Card.Text> */}
                      </Card.Body>
                    </Link>
                  </Card>
                );
              })}
          </Row>
        </Col>
        <Col xs={3} md={3}>
          <h3 className="CardHeadline">একুয়া</h3>
          <Row>
            {data
              ?.filter((item) => item.category === "aqua")
              .map(({ title, picture, des, _id }) => {
                return (
                  <Card
                    key={_id}
                    style={{
                      width: "15rem",
                      height: "14rem",
                      marginBottom: "15px",
                      borderColor: "white",
                    }}
                  >
                    <Link to={`/poltryDairy/${_id}`}>
                      <div className="image-box">
                        <Card.Img
                          className="image"
                          variant="top"
                          src={picture}
                        ></Card.Img>
                      </div>
                      <Card.Body>
                        <Card.Title className="newTitle">{title}</Card.Title>
                        {/* <Card.Text className='newsSubTitle'>
                                            {des}
                                        </Card.Text> */}
                      </Card.Body>
                    </Link>
                  </Card>
                );
              })}
          </Row>
        </Col>
        <Col xs={3} md={3}>
          <h3 className="CardHeadline">এগ্রো</h3>
          <Row>
            {data
              .filter((item) => item.category === "agro")
              .map(({ title, picture, des, _id }) => {
                return (
                  <Card
                    key={_id}
                    style={{
                      width: "15rem",
                      height: "14rem",
                      marginBottom: "15px",
                      borderColor: "white",
                    }}
                  >
                    <Link to={`/poltryDairy/${_id}`}>
                      <div className="image-box">
                        <Card.Img
                          className="image"
                          variant="top"
                          src={picture}
                        ></Card.Img>
                      </div>
                      <Card.Body>
                        <Card.Title className="newTitle">{title}</Card.Title>
                        {/* <Card.Text className='newsSubTitle'>
                                            {des}
                                        </Card.Text> */}
                      </Card.Body>
                    </Link>
                  </Card>
                );
              })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default FourCards;
