import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetSingleBazarQuery } from "../../../features/api/bazarListApiSlice";
export default function UpdateBazarList() {
  const { id } = useParams();
  const { data: singleBazar, isFetching } = useGetSingleBazarQuery(id);

  const [validated, setValidated] = useState(false);
  const [formValues, setFormValues] = useState({
    date: singleBazar?.date,
    name: singleBazar?.name,
    amount: singleBazar?.amount,
    given_amount: singleBazar?.given_amount,
    return_amount: singleBazar?.return_amount,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    console.log(formValues);

    // updateSingleMeal({ id, allMeal: formValues });

    // navigate("/meal_list");

    // console.log({ id, allMeal: formValues });
  };

  const onChange = (e) => {
    // setFormValues({
    //   ...formValues,
    //   e.target.name: e.target.value,
    // });

    console.log(e.target.name, e.target.value);
  };
  return (
    <div>
      <div className="bg_primary add_member_form">
        <Container>
          <div>
            <h1 className="text-center pt-3 pb-3">Update bazar list info</h1>
          </div>
          <Form
            className="background_color_secondary p-3 rounded"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Row className="mb-3">
              <Form.Group
                className="mb-3"
                as={Col}
                md="4"
                controlId="validationCustom01"
              >
                <Form.Label>Date</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter bazar date"
                  name={singleBazar?.date}
                  defaultValue={singleBazar?.date}
                  onChange={(e) => onChange(e)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                as={Col}
                md="4"
                controlId="validationCustom01"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter bazar member name"
                  name={singleBazar?.name}
                  defaultValue={singleBazar?.name}
                  onChange={(e) => onChange(e)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                as={Col}
                md="4"
                controlId="validationCustom01"
              >
                <Form.Label>Amount</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter bazar member amount"
                  name={singleBazar?.amount}
                  defaultValue={singleBazar?.amount}
                  onChange={(e) => onChange(e)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                className="mb-3"
                as={Col}
                md="4"
                controlId="validationCustom01"
              >
                <Form.Label>Given amount</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter bazar date"
                  name={singleBazar?.given_amount}
                  defaultValue={singleBazar?.given_amount}
                  onChange={(e) => onChange(e)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                as={Col}
                md="4"
                controlId="validationCustom01"
              >
                <Form.Label>Return amount</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter bazar member name"
                  name={singleBazar?.return_amount}
                  defaultValue={singleBazar?.return_amount}
                  onChange={(e) => onChange(e)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit">Update bazar</Button>
          </Form>
        </Container>
      </div>
    </div>
  );
}
