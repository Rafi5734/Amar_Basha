import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useGetSingleBazarQuery } from "../../../features/api/bazarListApiSlice";
export default function UpdateBazarList() {
  const { id } = useParams();
  const [validated, setValidated] = useState(false);

  const { data: singleBazar, isFetching } = useGetSingleBazarQuery(id);

  console.log(singleBazar);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    // updateSingleMeal({ id, allMeal: formValues });

    // navigate("/meal_list");

    // console.log({ id, allMeal: formValues });
  };

  const handleOnChange = (name, value) => {
    // const changingValue = { ...formValues };
    // changingValue[name] = value;
    // setFormValues(changingValue);
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
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter member name"
                  //   name={member?.name}
                  //   defaultValue={member?.value}
                  //   onChange={(e) => handleOnChange(member?.name, e.target.value)}
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
