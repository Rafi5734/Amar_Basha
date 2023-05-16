import React, { useState } from "react";
import { Container, Button, InputGroup } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./profile.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Profile = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="bg_primary pb-5">
      <h1 className="text-center pt-3 pb-3">Profile</h1>
      <Container
        className="mb-3 rounded overflow-auto"
        style={{ backgroundColor: "#334155" }}
      >
        <Row className="marginBottom: 5px">
          <Col sm={12} md={6} lg={6}>
            <Row>
              <Col sm={12} md={4} className="">
                <img
                  src="https://dashcode.codeshaper.net/assets/user-1-ad58ce72.jpg"
                  alt="profile_image"
                  className="profile_picture"
                ></img>
                <div>
                  <InputGroup size="sm" className="mb-3">
                    <InputGroup.Text id="inputGroup-sizing-sm">
                      Small
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    />
                  </InputGroup>
                  <Button
                    onClick={handleShow}
                    className="mb-3"
                    variant="secondary"
                  >
                    Edit Profile
                  </Button>{" "}
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header
                      closeButton
                      style={{ backgroundColor: "#334155" }}
                    >
                      <Modal.Title>Update Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: "#334155" }}>
                      <Form>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Change your name"
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Member category</Form.Label>
                          <Form.Select
                            style={{
                              backgroundColor: "#334155",
                              color: "#fff",
                            }}
                            size="sm"
                            aria-label="Default select example"
                          >
                            <option>Select a option</option>
                            <option value="member">Member</option>
                            <option value="manager">Manager</option>
                            {/* <option value="3">Three</option> */}
                          </Form.Select>
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Change your email"
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Phone</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Change your phone number"
                            autoFocus
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>Work Place</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Change your work place"
                            autoFocus
                          />
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer style={{ backgroundColor: "#334155" }}>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={handleClose}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </Col>
              <Col
                sm={12}
                md={8}
                className="d-flex justify-content-start align-items-center"
              >
                <div className="">
                  <div className="d-flex justify-content-center align-items-center">
                    <p className="fw-bold">Waren Waden</p>
                  </div>
                  <div>
                    <p className="fw-bold">member</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={6}
            className="d-flex justify-content-center align-items-center flex-column"
          >
            <p>
              Total deposit this month: <span className="">10000</span>
            </p>
            <p>
              Total meal this month: <span className="">10000</span>
            </p>
            <p>
              Total bazar done this month: <span className="">4</span>
            </p>
          </Col>
        </Row>
      </Container>
      <Container
        className="rounded overflow-auto"
        style={{ backgroundColor: "#334155" }}
      >
        <Row className="marginBottom: 5px">
          <Col sm={12} md={4} lg={4}>
            <h4 className="mt-3">Info</h4>
            <hr />
            <div className="d-flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1.5em"
                height="1.5em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                class="iconify iconify--heroicons"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                ></path>
              </svg>
              <div className="ms-2 d-flex flex-column">
                <span>Email</span>
                <span className="mt-0 mb-3">Email@gmail.com</span>
              </div>
            </div>
            <div className="d-flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1.5em"
                height="1.5em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                class="iconify iconify--heroicons"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21a12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                ></path>
              </svg>
              <div className="ms-2 d-flex flex-column">
                <span>Phone</span>
                <span className="mt-0 mb-3">01887766556</span>
              </div>
            </div>
            <div className="d-flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="1.5em"
                height="1.5em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
                class="iconify iconify--heroicons"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934a1.12 1.12 0 0 1-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689A1.125 1.125 0 0 0 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934a1.12 1.12 0 0 1 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
                ></path>
              </svg>
              <div className="ms-2 d-flex flex-column">
                <span>Work Place</span>
                <span className="mt-0 mb-3">Glushan</span>
              </div>
            </div>
          </Col>
          <Col sm={12} md={8} lg={8} className="pt-3">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
