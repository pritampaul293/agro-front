import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";
import PageTop from "../PageTop/PageTop";
import "./digitalTechDetails.css";

const DigitalTechDetails = ({ addToCart }) => {
  const [item, setItem] = useState({});
  console.log(item);
  const { id } = useParams();
  console.log(id);
  const { title, des, _id, category, picture, price } = item || {};
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setShowLoader(true);
    const url = `http://localhost:5000/digitalTechnologies/${id}`;
    axios.get(url).then((res) => {
      console.log(res.data);
      setItem(res.data);
      setShowLoader(false);
      console.log(res.data);
    });
  }, [id]);
  return (
    <>
      <PageTop pagetitle="Details Products" />
      <Container className="EDetais">
        <Link to="/Ecom">
          <Button variant="danger" style={{ margin: "4px" }}>
          ফিরে যান

          </Button>
        </Link>
        <Row>
          <Col sm={12} md={7}>
            <Card style={{ width: "100%" }}>
              <Card.Img variant="top" className="Edetaisimages" src={picture} />
            </Card>
          </Col>
          <Col sm={6} md={4}>
            <Card style={{ padding: "1rem" }}>
              <Card.Body>
                <Card.Title
                  style={{
                    color: "black",
                    fontSize: "25px",
                    textAlign: "center",
                    marginBottom: "2rem",
                  }}
                >
                  {/* {category ? category.toUpperCase() : null} */}
                </Card.Title>
                <Card.Text
                  style={{
                    color: "gray",
                    marginLeft: "20px",
                    fontSize: "40px",
                  }}
                >
                  {title}
                </Card.Text>
                <Card.Text
                  style={{
                    color: "gray",
                    marginLeft: "20px",
                    fontSize: "20px",
                  }}
                >
                  {des}
                </Card.Text>
                <Card.Text
                  style={{
                    color: "#333",
                    margin: "18px 0",
                    fontSize: "18px",
                    fontWeight: "600",
                  }}
                >
                  ৳{price}
                </Card.Text>
                <Link
                  to={`/buy`}
                  style={{ textDocoration: "none", color: "#fff" }}
                >
                  <Button variant="success" style={{ marginRight: "20px" }}>
                  এখনই কিনুন

                  </Button>
                </Link>
                <Button variant="success" onClick={() => addToCart(_id)}>
                কার্টে যোগ করুন

                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DigitalTechDetails;
