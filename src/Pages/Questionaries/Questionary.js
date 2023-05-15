import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function Questionary() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleBack = (event) => {
    window.history.back();
  };
  return (
    <div className="bg_primary w-100">
      <Container
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>How many member remain in your house?</h1>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>Number of member</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Enter a number of house member"
                // defaultValue="Mark"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid number.
              </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div>
            <Button className="me-2" onClick={handleBack}>
              Back
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
