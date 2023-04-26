import React from "react";
import "../../assets/global.css";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Modal,
  OverlayTrigger,
  Row,
  Tooltip,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import "./depositList.css";
const DepositList = () => {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="bg_primary deposit_main">
      <div className="d-flex justify-content-around">
        <h1 className="pt-3 pb-3 ps-3">Current Month Deposit List:</h1>
        <OverlayTrigger
          className=""
          overlay={<Tooltip id="tooltip-disabled">Add deposit</Tooltip>}
        >
          <span className="d-inline-block me-2">
            <Button className="mt-4" onClick={handleShow}>
              <i className="fa-solid fa-plus"></i>
            </Button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton className="background_color_secondary">
                <Modal.Title>Add deposit</Modal.Title>
              </Modal.Header>
              <Modal.Body className="bg_primary">
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group
                      className="mb-3"
                      as={Col}
                      md="12"
                      controlId="validationCustom01"
                    >
                      <Form.Label>Name</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option style={{ backgroundColor: "#1e293b" }}>
                          Open this select menu
                        </option>
                        <option
                          style={{ backgroundColor: "#1e293b" }}
                          value="1"
                        >
                          One
                        </option>
                        <option
                          style={{ backgroundColor: "#1e293b" }}
                          value="2"
                        >
                          Two
                        </option>
                        <option
                          style={{ backgroundColor: "#1e293b" }}
                          value="3"
                        >
                          Three
                        </option>
                      </Form.Select>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please choose a name.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      as={Col}
                      md="12"
                      controlId="validationCustom02"
                    >
                      <Form.Label>Deposit amount</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        placeholder="Enter a deposit amount"
                        // defaultValue="Otto"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid amount.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      as={Col}
                      md="12"
                      controlId="validationCustom02"
                    >
                      <Form.Label>Extra amount</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        placeholder="Enter a extra amount"
                        // defaultValue="Otto"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid amount.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      as={Col}
                      md="12"
                      controlId="validationCustom02"
                    >
                      <Form.Label>Get amount</Form.Label>
                      <Form.Control
                        required
                        type="number"
                        placeholder="Enter a get amount"
                        // defaultValue="Otto"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid amount.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Button type="submit">Add deposit</Button>
                </Form>
              </Modal.Body>
            </Modal>
          </span>
        </OverlayTrigger>
      </div>

      <Container fluid className="overflow-auto">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Date&Month</th>
              <th>Name</th>
              <th>Deposit Amount</th>
              <th>Extra Amount</th>
              <th>Get Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>4/26/2023</td>
              <td>Mark</td>
              <td>10000</td>
              <td>0</td>
              <td>429</td>
              <td className="d-flex flex-row">
                <OverlayTrigger
                  className=""
                  overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}
                >
                  <span className="d-inline-block me-2">
                    <Button>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>Total</td>
              <td></td>
              <td>= 23000</td>
              <td>= 23000</td>
              <td>= 23000</td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default DepositList;
