import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Placeholder,
  Row,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleBazarQuery,
  useUpdateSingleBazarMutation,
} from "../../../features/api/bazarListApiSlice";
import "./updateBazarList.css";
export default function UpdateBazarList() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: singleBazar, isFetching } = useGetSingleBazarQuery(id);
  const [updateSingleBazar] = useUpdateSingleBazarMutation();

  const [validated, setValidated] = useState(false);
  const [date, setDate] = useState();
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [givenAmount, setGivenAmount] = useState();
  const [returnAmount, setReturnAmount] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);

    updateSingleBazar({
      id,
      data: {
        date: date || singleBazar?.date,
        name: name || singleBazar?.name,
        amount: amount || singleBazar?.amount,
        given_amount: givenAmount || singleBazar?.given_amount,
        return_amount: returnAmount || singleBazar?.return_amount,
      },
    });
    navigate("/bazar_list");
  };
  return (
    <div>
      <div className="bg_primary update_bazarList_form">
        <Container>
          <div>
            <h1 className="text-center pt-3 pb-3">Update bazar list info</h1>
          </div>
          {isFetching ? (
            <>
              <Placeholder as="p" animation="glow">
                <Placeholder
                  style={{
                    width: "100%",
                    height: "100px",
                    borderRadius: "5px",
                  }}
                  xs={12}
                />
              </Placeholder>
              <Placeholder as="p" animation="glow">
                <Placeholder
                  style={{
                    width: "100%",
                    height: "100px",
                    borderRadius: "5px",
                  }}
                  xs={12}
                />
              </Placeholder>
              <Placeholder as="p" animation="glow">
                <Placeholder
                  style={{
                    width: "100%",
                    height: "100px",
                    borderRadius: "5px",
                  }}
                  xs={12}
                />
              </Placeholder>
              <Placeholder as="p" animation="glow">
                <Placeholder
                  style={{
                    width: "100%",
                    height: "100px",
                    borderRadius: "5px",
                  }}
                  xs={12}
                />
              </Placeholder>
              <Placeholder as="p" animation="glow">
                <Placeholder
                  style={{
                    width: "100%",
                    height: "100px",
                    borderRadius: "5px",
                  }}
                  xs={12}
                />
              </Placeholder>
              <Placeholder as="p" animation="glow">
                <Placeholder
                  style={{
                    width: "100%",
                    height: "100px",
                    borderRadius: "5px",
                  }}
                  xs={12}
                />
              </Placeholder>
            </>
          ) : (
            <>
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
                      onChange={(e) => setDate(e.target.value)}
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
                    <Form.Label>Amount</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter bazar member amount"
                      name={singleBazar?.amount}
                      defaultValue={singleBazar?.amount}
                      onChange={(e) => setAmount(e.target.value)}
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
                      onChange={(e) => setGivenAmount(e.target.value)}
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
                      onChange={(e) => setReturnAmount(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button type="submit">Update bazar</Button>
              </Form>
            </>
          )}
        </Container>
      </div>
    </div>
  );
}
