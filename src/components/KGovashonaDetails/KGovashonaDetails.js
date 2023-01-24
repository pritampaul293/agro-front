import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap/esm";
import { Link, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

const KGovashonaDetails = () => {
  const [data, setData] = useState({});
  const [allData, setAllData] = useState([]);
  const { id } = useParams();
  const { title, _id, picture, des } = data || {};
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/govashonaProjukti/${id}`).then((res) => {
      setData(res.data);
    });
    axios.get("http://localhost:5000/govashonaProjukti/all").then((res) => {
      setAllData(res.data);
      console.log(res.data);
    });
  }, [id]);
  return (
    <>
      <Container style={{ padding: "24px 0" }}>
        <Card style={{ border: "none" }}>
          <Card.Title style={{ margin: "30px", fontSize: "40px" }}>
            {title}
          </Card.Title>
          <Card.Img
            style={{
              width: "75%",
              margin: "0 auto",
              objectFit: "contain",
              borderRadius: "6px",
              height: "40%",
            }}
            variant="top"
            src={picture}
          />
          <Card.Body>
            <Card.Text
              style={{
                margin: "20px",
                fontSize: "20px",
                lineHeight: 1.8,
                color: "#777",
              }}
            >
              {des}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Container
        style={{
          marginTop: "30px",
          borderRadius: "20px",
          padding: "0 0 5rem 0",
        }}
      >
        <Row>
          <Col xs={12} md={8} lg={8}>
            <h3
              style={{
                padding: "0.3rem 0.6rem",
                color: "white",
                padding: "0.8rem 1rem",
                color: "white",
                backgroundColor: "#198151",
                fontSize: "20px",
              }}
              className="CardHeadline"
            >
              RELATED ARTICLES
            </h3>
            <Row>
              {allData
                .filter((data) => data._id !== id)
                .map(({ title, picture, des, _id }) => {
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
                      <Link to={`/govashonaProjukti/${_id}`}>
                        <div className="image-box">
                          <Card.Img
                            style={{ width: "100%", bordreRadius: "6px" }}
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
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default KGovashonaDetails;
