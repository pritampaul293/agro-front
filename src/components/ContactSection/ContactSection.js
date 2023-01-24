import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { Fragment } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";

function ContactSection() {
  // Adding contact info to database
  const [value, setValue] = useState(0);
  const [error, setError] = useState(false);
  //   const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setError(false);
    if (data.name === "" || data.email === "" || data.description === "") {
      setError(true);
      return;
    }
    axios.post("http://localhost:5000/contacts", data).then((res) => {
      if (res.data.insertedId) {
        setValue(0);
        alert("আপনার তথ্য আমরা গ্রহণ করেছি |");
      }
    });

    reset();
  };

  return (
    <Fragment>
      <Container className="mt-5 pb-5">
        <Row>
          <Col lg={6} md={6} sm={12}>
            <h1>দ্রুত যোগাযোগ করুন</h1>
            <Form
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="serviceDescription">নাম</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="আপনার নাম লিখুন"
                  {...register("name")}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label className="serviceDescription">
                  ইমেল এড্রেস
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="আপনার ইমেল এড্রেসটি লিখুন"
                  {...register("email")}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label className="serviceDescription">বার্তা</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  type="text"
                  {...register("description")}
                />
              </Form.Group>

              <Button variant="primary" className="mt-2" type="submit">
                জমা দিন
              </Button>
            </Form>
            {error && (
              <p style={{ color: "red", letterSpacing: "2px" }}>
                সব ক্ষেত্রগুলি পূরণ করুন
              </p>
            )}
          </Col>

          <Col lg={6} md={6} sm={12}>
            <h1 style={{ marginLeft: "20px", color: "black" }}>আলোচনার জন্য</h1>
            <p className="serviceDescription" style={{ marginLeft: "20px" }}>
              {" "}
              কন্দাকার পাড়া , ৭নং ওয়ার্ড, চকারিয়া ,কক্সবাজার ,বাংলাদেশ
            </p>
            <p className="serviceDescription" style={{ marginLeft: "20px" }}>
              <FontAwesomeIcon icon={faEnvelope} /> Pritampaul@gmail.com
            </p>
            <p className="serviceDescription" style={{ marginLeft: "20px" }}>
              <FontAwesomeIcon icon={faPhone} /> +৮৮০১৯৭৪৯৫৩৪৮৬
            </p>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default ContactSection;
