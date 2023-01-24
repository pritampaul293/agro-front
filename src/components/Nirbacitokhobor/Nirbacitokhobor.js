import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap/esm";
import { Link } from "react-router-dom";
import Motamot from "../Motamot/Motamot";
import "./Nirbacitokhobor.css";

const Nirbacitokhobor = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    // setShowLoader(true);
    axios.get(`http://localhost:5000/recentNews`).then((res) => {
      setNews(res.data);
      //   setShowLoader(false);
      console.log(res.data);
    });
  }, []);
  return (
    <Container style={{ marginTop: "50px", borderRadius: "20px" }}>
      <Row>
        <Col xs={12} md={8} lg={8}>
          <h3 className="CardHeadline">নির্বাচিত খবর</h3>
          <Row>
            {news.map(({ title, picture, des, _id }) => {
              return (
                <Card
                  key={_id}
                  style={{
                    width: "14rem",
                    height: "16rem",
                    margin: "10px",
                    borderColor: "white",
                  }}
                >
                  <Link to={`/recentNews/${_id}`}>
                    <div className="image-box">
                      <Card.Img
                        className="image"
                        variant="top"
                        src={picture}
                      ></Card.Img>
                    </div>
                    <Card.Body>
                      <Card.Title className="newTitle">{title}</Card.Title>
                    </Card.Body>
                  </Link>
                </Card>
              );
            })}
          </Row>
        </Col>
        <Motamot />
      </Row>
    </Container>
  );
};

export default Nirbacitokhobor;
