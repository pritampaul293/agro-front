import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Motamot = () => {
  const [allMotamot, setAllMotamot] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/motamot/all").then((res) => {
      setAllMotamot(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <Col xs={4} md={4}>
      <h3 className="CardHeadline">মতামত</h3>
      <div style={{ marginTop: "2rem" }}>
        {allMotamot?.map(({ title, des, picture, _id }) => {
          return (
            <Card
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0.25rem",
                flexDirection: "row",
                marginBottom: "0.4rem",
              }}
            >
              <div className="card-img">
                <img src={picture} style={{ width: "6rem", height: "5rem" }} />
              </div>
              <div>
                <Link to={`/motamot/${_id}`}>
                  <Card.Body>
                    <Card.Title className="newTitle">{title}</Card.Title>
                  </Card.Body>
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </Col>
  );
};

export default Motamot;
