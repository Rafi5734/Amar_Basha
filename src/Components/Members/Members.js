import React, { useState } from "react";
import "./member.css";
import {
  Button,
  Container,
  Modal,
  OverlayTrigger,
  Tooltip,
  Form,
  Dropdown,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
const Members = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="members_main">
      <div className="d-flex flex-row justify-content-around">
        <h1 className="text-center pt-3  pb-3">All Members</h1>
        <OverlayTrigger
          overlay={<Tooltip id="tooltip-disabled">Add Member</Tooltip>}
        >
          <span className="d-inline-block mt-4">
            <Link to="/add_members">
              <Button variant="primary">
                <i class="fa-solid fa-plus"></i>
              </Button>{" "}
            </Link>
          </span>
        </OverlayTrigger>
      </div>

      <Container className="overflow-auto">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Status</th>
              <th>Working Place</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto@gmail.com</td>
              <td>01987654532</td>
              <td>Student</td>
              <td>SMUCT</td>
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
                        <Modal.Title>Update Member Info.</Modal.Title>
                      </Modal.Header>
                      <Modal.Body style={{ backgroundColor: "#0f172a" }}>
                        <Form>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter update name"
                              autoFocus
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="name@example.com"
                              autoFocus
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="01......"
                              autoFocus
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Status</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter your status"
                              autoFocus
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Working Place</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter your working place"
                              autoFocus
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
                <Dropdown>
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip-disabled">Make role</Tooltip>}
                  >
                    <span className="d-inline-block">
                      <Dropdown.Toggle
                        id="dropdown-button-dark-example1"
                        variant="secondary"
                      >
                        <i class="fa-solid fa-screwdriver-wrench"></i>
                      </Dropdown.Toggle>
                    </span>
                  </OverlayTrigger>

                  <Dropdown.Menu variant="dark">
                    <Dropdown.Item>Make Member</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Make Manager</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto@gmail.com</td>
              <td>01987654532</td>
              <td>Student</td>
              <td>SMUCT</td>
              <td>
                <OverlayTrigger
                  className=""
                  overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}
                >
                  <span className="d-inline-block me-2">
                    <Button style={{ pointerEvents: "none" }}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Delete</Tooltip>}
                >
                  <span className="d-inline-block">
                    <Button style={{ pointerEvents: "none" }}>
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto@gmail.com</td>
              <td>01987654532</td>
              <td>Student</td>
              <td>SMUCT</td>
              <td>
                <OverlayTrigger
                  className=""
                  overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}
                >
                  <span className="d-inline-block me-2">
                    <Button style={{ pointerEvents: "none" }}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Delete</Tooltip>}
                >
                  <span className="d-inline-block">
                    <Button style={{ pointerEvents: "none" }}>
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto@gmail.com</td>
              <td>01987654532</td>
              <td>Student</td>
              <td>SMUCT</td>
              <td>
                <OverlayTrigger
                  className=""
                  overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}
                >
                  <span className="d-inline-block me-2">
                    <Button style={{ pointerEvents: "none" }}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Delete</Tooltip>}
                >
                  <span className="d-inline-block">
                    <Button style={{ pointerEvents: "none" }}>
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto@gmail.com</td>
              <td>01987654532</td>
              <td>Student</td>
              <td>SMUCT</td>
              <td>
                <OverlayTrigger
                  className=""
                  overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}
                >
                  <span className="d-inline-block me-2">
                    <Button style={{ pointerEvents: "none" }}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Delete</Tooltip>}
                >
                  <span className="d-inline-block">
                    <Button style={{ pointerEvents: "none" }}>
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto@gmail.com</td>
              <td>01987654532</td>
              <td>Student</td>
              <td>SMUCT</td>
              <td>
                <OverlayTrigger
                  className=""
                  overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}
                >
                  <span className="d-inline-block me-2">
                    <Button style={{ pointerEvents: "none" }}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Delete</Tooltip>}
                >
                  <span className="d-inline-block">
                    <Button style={{ pointerEvents: "none" }}>
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto@gmail.com</td>
              <td>01987654532</td>
              <td>Student</td>
              <td>SMUCT</td>
              <td>
                <OverlayTrigger
                  className=""
                  overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}
                >
                  <span className="d-inline-block me-2">
                    <Button style={{ pointerEvents: "none" }}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Delete</Tooltip>}
                >
                  <span className="d-inline-block">
                    <Button style={{ pointerEvents: "none" }}>
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto@gmail.com</td>
              <td>01987654532</td>
              <td>Student</td>
              <td>SMUCT</td>
              <td>
                <OverlayTrigger
                  className=""
                  overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}
                >
                  <span className="d-inline-block me-2">
                    <Button style={{ pointerEvents: "none" }}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Delete</Tooltip>}
                >
                  <span className="d-inline-block">
                    <Button style={{ pointerEvents: "none" }}>
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto@gmail.com</td>
              <td>01987654532</td>
              <td>Student</td>
              <td>SMUCT</td>
              <td>
                <OverlayTrigger
                  className=""
                  overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}
                >
                  <span className="d-inline-block me-2">
                    <Button style={{ pointerEvents: "none" }}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Delete</Tooltip>}
                >
                  <span className="d-inline-block">
                    <Button style={{ pointerEvents: "none" }}>
                      <i class="fa-solid fa-trash"></i>
                    </Button>
                  </span>
                </OverlayTrigger>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto@gmail.com</td>
              <td>01987654532</td>
              <td>Student</td>
              <td>SMUCT</td>
              <td>
                <OverlayTrigger
                  className=""
                  overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}
                >
                  <span className="d-inline-block me-2">
                    <Button style={{ pointerEvents: "none" }}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Button>
                  </span>
                </OverlayTrigger>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Delete</Tooltip>}
                >
                  <span className="d-inline-block">
                    <Button style={{ pointerEvents: "none" }}>
                      <i class="fa-solid fa-trash"></i>
                    </Button>
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

export default Members;
