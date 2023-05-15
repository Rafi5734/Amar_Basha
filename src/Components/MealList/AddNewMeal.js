import React, { useState } from "react";
import {
  Container,
  Row,
  Form,
  Button,
  Col,
  Placeholder,
} from "react-bootstrap";
import { useAddMealMutation } from "../../features/api/mealListApiSlice";
import { useGetUsersQuery } from "../../features/api/addUserApiSlice";
import { useNavigate } from "react-router-dom";

export default function AddNewMeal() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [addMeal] = useAddMealMutation();
  const { data: allUsers, isLoading } = useGetUsersQuery();
  const [formValues, setFormValues] = useState();

  // console.log(allUsers);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      addMeal(formValues);
      setValidated(true);
    }

    navigate("/meal_list");

    // console.log(formValues);
  };

  const handleOnChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="bg_primary add_member_form">
        <h1 className="pt-3 pb-3 text-center">Add New Meal</h1>

        {isLoading ? (
          <>
            <Placeholder xs={4} />
            <Placeholder xs={4} />
            <Placeholder xs={4} />
            <Placeholder xs={4} />
            <Placeholder xs={4} />
            <Placeholder xs={4} />
            <Placeholder xs={4} />
          </>
        ) : (
          <>
            <Container className="mb-5">
              <Form
                className="background_color_secondary p-3 rounded"
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
              >
                <Row className="mb-3">
                  {allUsers?.map((i) => (
                    <Form.Group
                      key={i._id}
                      className="mb-3"
                      as={Col}
                      md="4"
                      controlId="validationCustom01"
                    >
                      <Form.Label>{i.userName}</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        placeholder={`Enter the ${i.userName} meal quantity`}
                        name={i.userName}
                        defaultValue=""
                        onChange={handleOnChange}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please choose a username.
                      </Form.Control.Feedback>
                    </Form.Group>
                  ))}
                </Row>
                <Button type="submit">Add Member</Button>
              </Form>
            </Container>
          </>
        )}
      </div>
    </div>
  );
}
