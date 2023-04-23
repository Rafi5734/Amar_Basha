import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  useGetSingleMealQuery,
  useUpdateSingleMealMutation,
} from "../../features/api/mealListApiSlice";

const UpdateMealList = () => {
  let { id } = useParams();
  const [validated, setValidated] = useState(false);
  const { data: singleMeal } = useGetSingleMealQuery(id);
  const [updateSingleMeal] = useUpdateSingleMealMutation();
  const [singleMealCount, setSingleMealCount] = useState();
  const [formValues, setFormValues] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    updateSingleMeal({ id, allMeal: formValues });

    console.log({ id, allMeal: formValues });
  };

  useEffect(() => {
    if (singleMeal) {
      const myMealArray = Object.entries(singleMeal?.allMeal).map(
        ([key, value]) => ({
          name: key,
          value,
        })
      );
      setSingleMealCount(myMealArray);
    }
    setFormValues(singleMeal?.allMeal);
  }, [singleMeal]);

  const handleOnChange = (name, value) => {
    const changingValue = { ...formValues };
    changingValue[name] = value;
    setFormValues(changingValue);
  };

  return (
    <div>
      <div className="bg_primary add_member_form">
        <Container className="mb-5">
          <div>
            <h1 className="text-center pt-3 pb-3">Update Meal Info - date</h1>
          </div>
          <Form
            className="background_color_secondary p-3 rounded"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Row className="mb-3">
              {singleMealCount?.map((member) => (
                <Form.Group
                  className="mb-3"
                  as={Col}
                  md="4"
                  controlId="validationCustom01"
                >
                  <Form.Label>{member?.name}</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter member name"
                    name={member?.name}
                    defaultValue={member?.value}
                    onChange={(e) =>
                      handleOnChange(member?.name, e.target.value)
                    }
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </Form.Group>
              ))}
            </Row>
            <Button type="submit">Update Meal</Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default UpdateMealList;
