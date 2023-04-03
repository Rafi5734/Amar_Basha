import React from "react";
import "../../assets/global.css";
import {
  Button,
  Container,
  Form,
  Modal,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import "./depositList.css";
const DepositList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="bg_primary deposit_main">
      <h1>Current Month Deposit List:</h1>
      <Container fluid className="overflow-auto">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Month</th>
              <th>Name</th>
              <th>Deposit Amount</th>
              <th>Total Meal</th>
              <th>Extra Amount</th>
              <th>Get Amount</th>
              <th>Action</th>
              <th>Meal Rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={9}>March</td>
              <td>Mark</td>
              <td>10000</td>
              <td>23</td>
              <td>0</td>
              <td>429</td>
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
                        <Modal.Title>Update Deposit</Modal.Title>
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
                              value="Mark"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Deposit Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter update deposit amount"
                              autoFocus
                              value="1000"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Total Meal</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter total meal"
                              autoFocus
                              value="33"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Extra Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter extra"
                              autoFocus
                              value="300"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Get amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter get amount"
                              autoFocus
                              value="400"
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
              <td rowSpan={9}>41.19</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>10000</td>
              <td>23</td>
              <td>0</td>
              <td>429</td>
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
                        <Modal.Title>Update Deposit</Modal.Title>
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
                              value="Mark"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Deposit Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter update deposit amount"
                              autoFocus
                              value="1000"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Total Meal</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter total meal"
                              autoFocus
                              value="33"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Extra Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter extra"
                              autoFocus
                              value="300"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Get amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter get amount"
                              autoFocus
                              value="400"
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
              <td>Mark</td>
              <td>10000</td>
              <td>23</td>
              <td>0</td>
              <td>429</td>
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
                        <Modal.Title>Update Deposit</Modal.Title>
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
                              value="Mark"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Deposit Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter update deposit amount"
                              autoFocus
                              value="1000"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Total Meal</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter total meal"
                              autoFocus
                              value="33"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Extra Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter extra"
                              autoFocus
                              value="300"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Get amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter get amount"
                              autoFocus
                              value="400"
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
              <td>Mark</td>
              <td>10000</td>
              <td>23</td>
              <td>0</td>
              <td>429</td>
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
                        <Modal.Title>Update Deposit</Modal.Title>
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
                              value="Mark"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Deposit Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter update deposit amount"
                              autoFocus
                              value="1000"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Total Meal</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter total meal"
                              autoFocus
                              value="33"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Extra Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter extra"
                              autoFocus
                              value="300"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Get amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter get amount"
                              autoFocus
                              value="400"
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
              <td>Mark</td>
              <td>10000</td>
              <td>23</td>
              <td>0</td>
              <td>429</td>
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
                        <Modal.Title>Update Deposit</Modal.Title>
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
                              value="Mark"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Deposit Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter update deposit amount"
                              autoFocus
                              value="1000"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Total Meal</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter total meal"
                              autoFocus
                              value="33"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Extra Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter extra"
                              autoFocus
                              value="300"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Get amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter get amount"
                              autoFocus
                              value="400"
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
              <td>Mark</td>
              <td>10000</td>
              <td>23</td>
              <td>0</td>
              <td>429</td>
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
                        <Modal.Title>Update Deposit</Modal.Title>
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
                              value="Mark"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Deposit Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter update deposit amount"
                              autoFocus
                              value="1000"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Total Meal</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter total meal"
                              autoFocus
                              value="33"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Extra Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter extra"
                              autoFocus
                              value="300"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Get amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter get amount"
                              autoFocus
                              value="400"
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
              <td>Mark</td>
              <td>10000</td>
              <td>23</td>
              <td>0</td>
              <td>429</td>
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
                        <Modal.Title>Update Deposit</Modal.Title>
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
                              value="Mark"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Deposit Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter update deposit amount"
                              autoFocus
                              value="1000"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Total Meal</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter total meal"
                              autoFocus
                              value="33"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Extra Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter extra"
                              autoFocus
                              value="300"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Get amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter get amount"
                              autoFocus
                              value="400"
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
              <td>Mark</td>
              <td>10000</td>
              <td>23</td>
              <td>0</td>
              <td>429</td>
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
                        <Modal.Title>Update Deposit</Modal.Title>
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
                              value="Mark"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Deposit Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter update deposit amount"
                              autoFocus
                              value="1000"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Total Meal</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter total meal"
                              autoFocus
                              value="33"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Extra Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter extra"
                              autoFocus
                              value="300"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Get amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter get amount"
                              autoFocus
                              value="400"
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
              <td>Mark</td>
              <td>10000</td>
              <td>23</td>
              <td>0</td>
              <td>429</td>
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
                        <Modal.Title>Update Deposit</Modal.Title>
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
                              value="Mark"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Deposit Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter update deposit amount"
                              autoFocus
                              value="1000"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Total Meal</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter total meal"
                              autoFocus
                              value="33"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Extra Amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter extra"
                              autoFocus
                              value="300"
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Get amount</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="Enter get amount"
                              autoFocus
                              value="400"
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
              <td>Total</td>
              <td></td>
              <td> = 23000</td>
              <td> = 23000</td>
              <td> = 23000</td>
              <td className="d-flex flex-row">= 23000</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default DepositList;
