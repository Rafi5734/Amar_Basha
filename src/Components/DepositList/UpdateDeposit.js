import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleDepositQuery,
  useUpdateSingleDepositMutation,
} from "../../features/api/depositListApiSlice";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from "react";

const UpdateDeposit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [validated, setValidated] = useState(false);
  const [name, setName] = useState();
  const [depositAmount, setDepositAmount] = useState();
  const [extraAmount, setExtraAmount] = useState();
  const [getAmount, setGetAmount] = useState();

  const { data: singleDeposit, isFetching } = useGetSingleDepositQuery(id);
  const [updateSingleDeposit] = useUpdateSingleDepositMutation();

  // console.log(singleDeposit);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    updateSingleDeposit({
      id,
      data: {
        name: name || singleDeposit?.name,
        deposit_amount: depositAmount || singleDeposit?.deposit_amount,
        extra_amount: extraAmount || singleDeposit?.extra_amount,
        get_amount: getAmount || singleDeposit?.get_amount,
      },
    });

    // navigate("/bazar_list");
  };
  return (
    <div>
      <div className="bg_primary add_member_form">
        <Container>
          <div>
            <h1 className="text-center pt-3 pb-3">
              Update deposit list info - {singleDeposit?.name}
            </h1>
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
                  placeholder="Enter bazar member name"
                  name={singleDeposit?.name}
                  defaultValue={singleDeposit?.name}
                  onChange={(e) => setName(e.target.value)}
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
                <Form.Label>Deposit amount</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter deposit amount"
                  name={singleDeposit?.deposit_amount}
                  defaultValue={singleDeposit?.deposit_amount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Enter valid deposit amount.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                as={Col}
                md="4"
                controlId="validationCustom01"
              >
                <Form.Label>Extra amount</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter extra amount"
                  name={singleDeposit?.extra_amount}
                  defaultValue={singleDeposit?.extra_amount}
                  onChange={(e) => setExtraAmount(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Enter valid extra amount.
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
                <Form.Label>Get amount</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter get amount"
                  name={singleDeposit?.get_amount}
                  defaultValue={singleDeposit?.get_amount}
                  onChange={(e) => setGetAmount(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Enter valid get amount.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit">Update deposit</Button>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default UpdateDeposit;
