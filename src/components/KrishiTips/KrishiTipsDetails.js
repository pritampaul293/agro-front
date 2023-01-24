import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap/esm";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";

const KrishiTipsDetails = () => {
  const [krishiTip, setKrishiTip] = useState({});
  const { id } = useParams();

  const { title, _id, picture, des } = krishiTip || {};
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/krishiTips/${id}`).then((res) => {
      setKrishiTip(res.data);
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
          <Card.Img width="400" height="385" variant="top" src={picture} />
          <Card.Body>
            <Card.Text
              style={{
                margin: "20px",
                fontSize: "22px",
                lineHeight: 1.8,
                color: "#666",
              }}
            >
              {des}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </>
  );
};

export default KrishiTipsDetails;
