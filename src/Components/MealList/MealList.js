import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Modal,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";

const MealList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="bg_primary">
      <h1 className="pt-3 pb-3">Meal List current month:</h1>
      <Container fluid className="overflow-auto">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th colSpan={9}>Name</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>Mark</td>
              <td>Shanewaz</td>
              <td>Pranto</td>
              <td>Reza</td>
              <td>Rafi</td>
              <td>Almas</td>
              <td>Piam</td>
              <td>Dev</td>
              <td>Asif</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>#1; 4/3/2023</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td> = 18</td>
              <td className="d-flex flex-row">
                <OverlayTrigger
                  className=""
                  overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}
                >
                  <span className="d-inline-block me-2">
                    <Button onClick={handleShow}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>

                    <Modal className="w-100" show={show} onHide={handleClose}>
                      <Modal.Header
                        style={{ backgroundColor: "#1e293b" }}
                        closeButton
                      >
                        <Modal.Title>Update Meal</Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{ backgroundColor: "#0f172a" }}>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Mark</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter update name"
                              autoFocus
                              value="1 + 1"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Mark</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter update name"
                              autoFocus
                              value="1 + 1"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Mark</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter update name"
                              autoFocus
                              value="1 + 1"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Mark</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter update name"
                              autoFocus
                              value="1 + 1"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Mark</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter update name"
                              autoFocus
                              value="1 + 1"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Mark</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter update name"
                              autoFocus
                              value="1 + 1"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Mark</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter update name"
                              autoFocus
                              value="1 + 1"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Mark</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter update name"
                              autoFocus
                              value="1 + 1"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Mark</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter update name"
                              autoFocus
                              value="1 + 1"
                            />
                          </Form.Group>
                        </Form>
                      </Modal.Body>
                      <Modal.Footer style={{ backgroundColor: "#1e293b" }}>
                        <Button variant="secondary" onClick={handleClose}>
                          Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Delete</Tooltip>}
                >
                  <span className="d-inline-block me-2">
                    <Button style={{ pointerEvents: "none" }}>
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>#1; 4/3/2023</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td> = 18</td>
            </tr>
            <tr>
              <td>#1; 4/3/2023</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td> = 18</td>
            </tr>
            <tr>
              <td>#1; 4/3/2023</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td> = 18</td>
            </tr>
            <tr>
              <td>#1; 4/3/2023</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td> = 18</td>
            </tr>

            <tr>
              <td>#1; 4/3/2023</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td>1 + 1</td>
              <td> = 18</td>
            </tr>
            <tr>
              <td>Total Meal Per Person:</td>
              <td>20</td>
              <td>30</td>
              <td>40</td>
              <td>50</td>
              <td>60</td>
              <td>60</td>
              <td>60</td>
              <td>60</td>
              <td>60</td>
              <td> = 180</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default MealList;
