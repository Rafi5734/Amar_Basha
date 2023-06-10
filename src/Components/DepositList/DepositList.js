import React, { useEffect } from "react";
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
import { useGetUsersQuery } from "../../features/api/addUserApiSlice";
import { Link } from "react-router-dom";
const DepositList = () => {
  const login_user = JSON.parse(localStorage.getItem("login_user"));

  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);
  const [depositAdd, setDepositAdd] = useState();
  const [totalDepositAmount, setTotalDepositAmount] = useState(0);
  const [totalExtraAmount, setTotalExtraAmount] = useState(0);
  const [totalGetAmount, setTotalGetAmount] = useState(0);
  const [prevFilteredData, setPrevFilteredData] = useState([]);

  const { data: allUser } = useGetUsersQuery();
  const [addDeposit] = useAddDepositMutation();
  const { data: allDepositList, isFetching } = useGetDepositListQuery();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const sumOfTotalDepositAmount = allDepositList?.reduce(
      (sum, deposit_amount) => sum + Number(deposit_amount?.deposit_amount),
      0
    );
    setTotalDepositAmount(sumOfTotalDepositAmount);

    const sumOfTotalExtraAmount = allDepositList?.reduce(
      (sum, extra_amount) => sum + Number(extra_amount?.extra_amount),
      0
    );
    setTotalExtraAmount(sumOfTotalExtraAmount);

    const sumOfTotalGetAmount = allDepositList?.reduce(
      (sum, get_amount) => sum + Number(get_amount?.get_amount),
      0
    );
    setTotalGetAmount(sumOfTotalGetAmount);
  }, [allDepositList]);

  useEffect(() => {
    const currentDate = new Date();
    const previousMonth = currentDate.getMonth() - 1;

    const filteredData = allDepositList?.filter((item) => {
      const itemDate = new Date(item.date);
      return (
        itemDate.getMonth() === previousMonth &&
        itemDate.getFullYear() === currentDate.getFullYear()
      );
    });

    setPrevFilteredData(filteredData);
  }, [allDepositList]);

  console.log(prevFilteredData);

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

  const handleDeleteAll = (e) => {
    console.log("deleteAll");
  };

  return (
    <div className="bg_primary">
      <Container>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <h1 className="pt-3 pb-3 ps-3">Current Month Deposit List:</h1>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-center">
            {(login_user.category === "superAdmin" ||
              login_user.category === "manager") && (
              <>
                <OverlayTrigger
                  className=""
                  overlay={<Tooltip id="tooltip-disabled">Add deposit</Tooltip>}
                >
                  <span className="d-inline-block me-2">
                    <Button className="" onClick={handleShow}>
                      <i className="fa-solid fa-plus"></i>
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header
                        closeButton
                        className="background_color_secondary"
                      >
                        <Modal.Title>Add deposit</Modal.Title>
                      </Modal.Header>
                      <Modal.Body className="bg_primary">
                        <Form
                          noValidate
                          validated={validated}
                          onSubmit={handleSubmit}
                        >
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
                              <Form.Control.Feedback>
                                Looks good!
                              </Form.Control.Feedback>
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
                              <Form.Control.Feedback>
                                Looks good!
                              </Form.Control.Feedback>
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
                              <Form.Control.Feedback>
                                Looks good!
                              </Form.Control.Feedback>
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
                              <Form.Control.Feedback>
                                Looks good!
                              </Form.Control.Feedback>
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
              </>
            )}
            {(login_user.category === "superAdmin" ||
              login_user.category === "manager") && (
              <OverlayTrigger
                overlay={<Tooltip id="tooltip-disabled">Export Data</Tooltip>}
              >
                <span className="d-inline-block ms-2">
                  <Button variant="primary">
                    <i className="fa-solid fa-file-export"></i>
                  </Button>{" "}
                </span>
              </OverlayTrigger>
            )}
            {(login_user.category === "superAdmin" ||
              login_user.category === "manager") && (
              <OverlayTrigger
                overlay={
                  <Tooltip id="tooltip-disabled">
                    Delete all previous data
                  </Tooltip>
                }
              >
                <span className="d-inline-block ms-3">
                  <Button variant="primary" onClick={handleDeleteAll}>
                    <i className="fa-solid fa-trash"></i>
                  </Button>{" "}
                </span>
              </OverlayTrigger>
            )}
          </div>
        </div>
      </Container>

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
                  {(login_user.category === "superAdmin" ||
                    login_user.category === "manager") && (
                    <>
                      <th>Action</th>
                    </>
                  )}
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
                    {(login_user.category === "superAdmin" ||
                      login_user.category === "manager") && (
                      <td className="d-flex flex-row">
                        <OverlayTrigger
                          className=""
                          overlay={
                            <Tooltip id="tooltip-disabled">Edit</Tooltip>
                          }
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
                    )}
                  </tr>
                ))}

                <tr>
                  <td>Total</td>
                  <td></td>
                  <td>= {totalDepositAmount}</td>
                  <td>= {totalExtraAmount}</td>
                  <td>= {totalGetAmount}</td>
                  {/* <td></td> */}
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
