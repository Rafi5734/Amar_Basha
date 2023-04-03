import React, { useState } from "react";
import "../../assets/global.css";
import {
  Button,
  Container,
  Modal,
  OverlayTrigger,
  Tooltip,
  Form,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
const BazarList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="bg_primary">
      <h1 className="pt-3 pb-3">Current month bazar list: </h1>
      <Container fluid className="overflow-auto">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Given</th>
              <th>Return</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>4/4/2023</td>
              <td>Mark</td>
              <td>10000</td>
              <td>1000</td>
              <td>500</td>
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
                        <Modal.Title>Update Bazar List</Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{ backgroundColor: "#0f172a" }}>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter bazar time"
                              autoFocus
                              value="4/4/2023"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter bazar member name"
                              autoFocus
                              value="Mark"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter bazar amount"
                              autoFocus
                              value="1000"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Given</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Given Taka"
                              autoFocus
                              value="1000"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Return</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter return Taka"
                              autoFocus
                              value="500"
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
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>4/4/2023</td>
              <td>Mark</td>
              <td>10000</td>
              <td>1000</td>
              <td>500</td>
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
                        <Modal.Title>Update Bazar List</Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{ backgroundColor: "#0f172a" }}>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter bazar time"
                              autoFocus
                              value="4/4/2023"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter bazar member name"
                              autoFocus
                              value="Mark"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter bazar amount"
                              autoFocus
                              value="1000"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Given</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Given Taka"
                              autoFocus
                              value="1000"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Return</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter return Taka"
                              autoFocus
                              value="500"
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
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>4/4/2023</td>
              <td>Mark</td>
              <td>10000</td>
              <td>1000</td>
              <td>500</td>
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
                        <Modal.Title>Update Bazar List</Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{ backgroundColor: "#0f172a" }}>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter bazar time"
                              autoFocus
                              value="4/4/2023"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter bazar member name"
                              autoFocus
                              value="Mark"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter bazar amount"
                              autoFocus
                              value="1000"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Given</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Given Taka"
                              autoFocus
                              value="1000"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Return</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter return Taka"
                              autoFocus
                              value="500"
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
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>4/4/2023</td>
              <td>Mark</td>
              <td>10000</td>
              <td>1000</td>
              <td>500</td>
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
                        <Modal.Title>Update Bazar List</Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{ backgroundColor: "#0f172a" }}>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter bazar time"
                              autoFocus
                              value="4/4/2023"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter bazar member name"
                              autoFocus
                              value="Mark"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter bazar amount"
                              autoFocus
                              value="1000"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Given</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter Given Taka"
                              autoFocus
                              value="1000"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Return</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter return Taka"
                              autoFocus
                              value="500"
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
              </td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default BazarList;
