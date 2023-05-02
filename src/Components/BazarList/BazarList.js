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
import Pagination from "react-bootstrap/Pagination";
import { useGetUsersQuery } from "../../features/api/logInApiSlice";
import {
  useAddbazarMutation,
  useGetBazarListQuery,
} from "../../features/api/bazarListApiSlice";
import { Link } from "react-router-dom";


const BazarList = () => {
  let count = 1;
  const [validated, setValidated] = useState(false);
  const [addBazar, setAddBazar] = useState(false);
  const [bazarAdd, setBazarAdd] = useState();
  const [everyUser, setEveryUser] = useState([]);

  const { data: allUser } = useGetUsersQuery();
  // const [addbazar] = useAddbazarMutation();
  // const { data: allBazarList, isFetching } = useGetBazarListQuery();

  // console.log(allBazarList);

  const handleAddBazarClose = () => setAddBazar(false);
  const handleAddBazarShow = () => setAddBazar(true);

  useEffect(() => {
    setEveryUser(allUser?.map((user) => user?.userName));
  }, [allUser]);

  // console.log(everyUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setValidated(true);
    }
    // addbazar(bazarAdd);
    // console.log(bazarAdd);
  };

  const handleOnChange = (e) => {
    setBazarAdd({ ...bazarAdd, [e.target.name]: e.target.value });
  };
  return (
    <div className="bg_primary">
      <div className="d-flex flex-row justify-content-around">
        <h1 className="pt-3 pb-3">Current month bazar list: </h1>
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
              <Modal.Header style={{ backgroundColor: "#1e293b" }} closeButton>
                <Modal.Title>Add Bazar</Modal.Title>
              </Modal.Header>
              <Modal.Body
                style={{ backgroundColor: "#0f172a", borderRadius: "5px" }}
              >
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                    <Form.Select onChange={handleOnChange}>
                      <option style={{ backgroundColor: "#1e293b" }}>
                        Select a member
                      </option>
                      {everyUser?.map((name) => (
                        <option
                          style={{ backgroundColor: "#1e293b" }}
                          name={name}
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
      </div>

      <Container fluid className="overflow-auto">
        {/* <Table striped bordered hover variant="dark">
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
                {allBazarList?.map((bazar) => (
                  <tr key={bazar?._id}>
                    <td>{count++}</td>
                    <td>{bazar?.date}</td>
                    <td>{bazar?.name}</td>
                    <td>{bazar?.amount}</td>
                    <td>{bazar?.given_amount}</td>
                    <td>{bazar?.return_amount}</td>
                    <td className="d-flex flex-row">
                      <OverlayTrigger
                        className=""
                        overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}
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
                  </tr>
                ))}
              </tbody>
            </Table> */}
        <Pagination>
          <Pagination.Item>Prev</Pagination.Item>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item active>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          <Pagination.Item>{6}</Pagination.Item>
          <Pagination.Item>Next</Pagination.Item>
        </Pagination>
      </Container>
    </div>
  );
};

export default BazarList;
