import React, { useEffect, useState } from "react";
import "../../assets/global.css";
import {
  Button,
  Container,
  Modal,
  OverlayTrigger,
  Tooltip,
  Form,
  Placeholder,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useGetUsersQuery } from "../../features/api/addUserApiSlice";
import {
  useAddbazarMutation,
  useDeleteAllPreviousBazarListMutation,
  useGetBazarListQuery,
} from "../../features/api/bazarListApiSlice";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";

const BazarList = () => {
  const login_user = JSON.parse(localStorage.getItem("login_user"));
  const currentDate = new Date();
  const currentMonthName = currentDate.toLocaleString("default", {
    month: "long",
  });
  let count = 1;

  const [validated, setValidated] = useState(false);
  const [addBazar, setAddBazar] = useState(false);
  const [bazarAdd, setBazarAdd] = useState({});
  const [everyUser, setEveryUser] = useState([]);
  const [sumOfAmount, setSumOfAmount] = useState("");
  const [sumOfGivenAmount, setSumOfGivenAmount] = useState("");
  const [sumOfReturnAmount, setSumOfReturnAmount] = useState("");
  const [prevFilteredData, setPrevFilteredData] = useState([]);

  const csvData = [
    ["This Month", "Total cost this month"],
    [currentMonthName, sumOfAmount],
  ];

  const { data: allUser } = useGetUsersQuery();
  const [addbazar] = useAddbazarMutation();
  const { data: allBazarList, isFetching } = useGetBazarListQuery();
  const [deleteAllPreviousBazarList] = useDeleteAllPreviousBazarListMutation();

  // const totalMessMember = localStorage.getItem("mess_member");

  const handleAddBazarClose = () => setAddBazar(false);
  const handleAddBazarShow = () => setAddBazar(true);

  useEffect(() => {
    setEveryUser(allUser?.map((user) => user?.userName));

    const sumOfAmount = allBazarList?.reduce(
      (sum, user) => sum + Number(user.amount),
      0
    );
    setSumOfAmount(sumOfAmount);

    const sumOfGivenAmount = allBazarList?.reduce(
      (sum, user) => sum + Number(user.given_amount),
      0
    );
    setSumOfGivenAmount(sumOfGivenAmount);

    const sumOfReturnAmount = allBazarList?.reduce(
      (sum, user) => sum + Number(user.return_amount),
      0
    );
    setSumOfReturnAmount(sumOfReturnAmount);
  }, [allUser, allBazarList]);

  useEffect(() => {
    const currentDate = new Date();
    const previousMonth = currentDate.getMonth() - 1;

    const filteredData = allBazarList?.filter((item) => {
      const itemDate = new Date(item.date);
      return (
        itemDate.getMonth() === previousMonth &&
        itemDate.getFullYear() === currentDate.getFullYear()
      );
    });

    setPrevFilteredData(filteredData);
  }, [allBazarList]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setValidated(true);
    }
    addbazar(bazarAdd);
    // console.log(bazarAdd);
  };

  const handleDeleteAll = () => {
    deleteAllPreviousBazarList(prevFilteredData);
    console.log("delete all");
  };

  const handleOnChange = (e) => {
    setBazarAdd({ ...bazarAdd, [e.target.name]: e.target.value });
  };
  return (
    <div className="bg_primary">
      <Container>
        <div className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <h1 className="pt-3 pb-3">Current month bazar list: </h1>
          </div>
          <div>
            {(login_user.category === "superAdmin" ||
              login_user.category === "manager") && (
              <>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Add bazar</Tooltip>}
                >
                  <span className="d-inline-block mt-4">
                    <Button variant="primary" onClick={handleAddBazarShow}>
                      <i className="fa-solid fa-plus"></i>
                    </Button>{" "}
                    <Modal
                      className="w-100"
                      show={addBazar}
                      onHide={handleAddBazarClose}
                    >
                      <Modal.Header
                        style={{ backgroundColor: "#1e293b" }}
                        closeButton
                      >
                        <Modal.Title>Add Bazar</Modal.Title>
                      </Modal.Header>
                      <Modal.Body
                        style={{
                          backgroundColor: "#0f172a",
                          borderRadius: "5px",
                        }}
                      >
                        <Form
                          noValidate
                          validated={validated}
                          onSubmit={handleSubmit}
                        >
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Date</Form.Label>
                            <Form.Control
                              type="date"
                              placeholder="Enter bazar date"
                              name="date"
                              onChange={handleOnChange}
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Name</Form.Label>
                            <Form.Select name="name" onChange={handleOnChange}>
                              <option style={{ backgroundColor: "#1e293b" }}>
                                Select a member
                              </option>
                              {everyUser?.map((name, index) => (
                                <option
                                  key={index}
                                  style={{ backgroundColor: "#1e293b" }}
                                  value={name}
                                >
                                  {name}
                                </option>
                              ))}
                            </Form.Select>
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="Enter bazar amount"
                              name="amount"
                              onChange={handleOnChange}
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Given Amount</Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="Enter given amount"
                              name="given_amount"
                              onChange={handleOnChange}
                            />
                          </Form.Group>
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Return Amount</Form.Label>
                            <Form.Control
                              type="number"
                              placeholder="Enter return amount"
                              name="return_amount"
                              onChange={handleOnChange}
                            />
                          </Form.Group>

                          <div className="mt-3 d-flex justify-content-end">
                            <Button
                              className="me-3"
                              variant="secondary"
                              onClick={handleAddBazarClose}
                            >
                              Close
                            </Button>
                            <Button
                              onClick={handleAddBazarClose}
                              type="submit"
                              variant="primary"
                            >
                              Add Bazar
                            </Button>
                          </div>
                        </Form>
                      </Modal.Body>
                    </Modal>
                  </span>
                </OverlayTrigger>
              </>
            )}
            {(login_user.category === "superAdmin" ||
              login_user.category === "manager") && (
              <CSVLink data={csvData}>
                <OverlayTrigger
                  overlay={<Tooltip id="tooltip-disabled">Export Data</Tooltip>}
                >
                  <span className="d-inline-block mt-4 ms-2">
                    <Button variant="primary">
                      <i className="fa-solid fa-file-export"></i>
                    </Button>{" "}
                  </span>
                </OverlayTrigger>
              </CSVLink>
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
                <span className="d-inline-block mt-4 ms-2">
                  <Button variant="primary" onClick={handleDeleteAll}>
                    <i className="fa-solid fa-trash"></i>
                  </Button>{" "}
                </span>
              </OverlayTrigger>
            )}
          </div>
        </div>
      </Container>
      <section className="overflow-auto">
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
          <Container fluid>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Given</th>
                  <th>Return</th>
                  {(login_user.category === "superAdmin" ||
                    login_user.category === "manager") && (
                    <>
                      <th>Actions</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {allBazarList?.map((bazar) => (
                  <tr key={bazar?._id}>
                    <td>{count++}</td>
                    <td>{bazar?.date}</td>
                    <td>{bazar?.name}</td>
                    <td>{bazar?.amount}</td>
                    <td>{bazar?.given_amount}</td>
                    <td>{bazar?.return_amount}</td>
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
                            <Link to={`/update_bazar_list/${bazar?._id}`}>
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
                  <th scope="row">Total = </th>
                  <td></td>
                  <td></td>
                  <td> = {sumOfAmount} </td>
                  <td> = {sumOfGivenAmount} </td>
                  <td> = {sumOfReturnAmount} </td>
                  {/* <td></td> */}
                </tr>
              </tbody>
            </Table>
          </Container>
        )}
      </section>
    </div>
  );
};

export default BazarList;
