import React from "react";
import "../../assets/global.css";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  OverlayTrigger,
  Placeholder,
  Row,
  Tooltip,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import "./depositList.css";
import {
  useAddDepositMutation,
  useGetDepositListQuery,
} from "../../features/api/depositListApiSlice";
import { useGetUsersQuery } from "../../features/api/logInApiSlice";
import { Link } from "react-router-dom";
const DepositList = () => {
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [depositAdd, setDepositAdd] = useState();

  const { data: allUser } = useGetUsersQuery();
  const [addDeposit] = useAddDepositMutation();
  const { data: allDepositList, isFetching } = useGetDepositListQuery();

  // console.log(allDepositList);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    addDeposit(depositAdd);
    console.log(depositAdd);
  };

  const handleOnChange = (e) => {
    setDepositAdd({ ...depositAdd, [e.target.name]: e.target.value });
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
                      <Form.Select
                        name="name"
                        onChange={handleOnChange}
                        aria-label="Default select example"
                      >
                        <option style={{ backgroundColor: "#1e293b" }}>
                          Select a member
                        </option>
                        {allUser?.map((name) => (
                          <option
                            key={name?._id}
                            style={{ backgroundColor: "#1e293b" }}
                            value={name?.userName}
                            name={name?.userName}
                          >
                            {name?.userName}
                          </option>
                        ))}
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
                        type="text"
                        placeholder="Enter a deposit amount"
                        name="deposit_amount"
                        onChange={handleOnChange}
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
                        type="text"
                        name="extra_amount"
                        placeholder="Enter a extra amount"
                        onChange={handleOnChange}
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
                        type="text"
                        name="get_amount"
                        placeholder="Enter a get amount"
                        onChange={handleOnChange}
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
        {isFetching ? (
          <>
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
          </>
        ) : (
          <>
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
                {allDepositList?.map((deposit) => (
                  <tr>
                    <td>{deposit?.date}</td>
                    <td>{deposit?.name}</td>
                    <td>{deposit?.deposit_amount}</td>
                    <td>{deposit?.extra_amount}</td>
                    <td>{deposit?.get_amount}</td>
                    <td className="d-flex flex-row">
                      <OverlayTrigger
                        className=""
                        overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}
                      >
                        <span className="d-inline-block me-2">
                          <Link to={`/update_deposit_list/${deposit?._id}`}>
                            <Button>
                              <i className="fa-solid fa-pen-to-square"></i>
                            </Button>
                          </Link>
                        </span>
                      </OverlayTrigger>
                    </td>
                  </tr>
                ))}

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
          </>
        )}
      </Container>
    </div>
  );
};

export default DepositList;
