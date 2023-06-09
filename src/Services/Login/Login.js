import React, { useState, useRef } from "react";
import { Container, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useGetUsersQuery } from "../../features/api/addUserApiSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import emailjs from "@emailjs/browser";

const Login = () => {
  const { data: allUser, isLoading } = useGetUsersQuery();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [adminName, setAdminName] = useState("");
  const [email, setEmail] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [memberNumber, setMemberNumber] = useState(allUser?.length);
  const [password, setPassword] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_75hoxfm",
        "template_574ifsu",
        form.current,
        "BZE2Y3xOG53-NSKI2"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            "Please follow up your providing email address to get credentials"
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleAdminSubmit = (event) => {
    event.preventDefault();

    if (allUser) {
      const filterAdminUser = allUser.filter((i) => {
        return (
          i.userName === adminName &&
          "rafi" &&
          i.email === adminEmail &&
          "rafi789@gmail.com" &&
          i.password === adminPassword &&
          "11223344"
        );
      });

      if (filterAdminUser.length > 0) {
        filterAdminUser.map((i) => {
          if (i?.category === "superAdmin") {
            localStorage.setItem("login_user", JSON.stringify(i));
            localStorage.setItem(
              "mess_member",
              memberNumber || allUser?.length
            );
            navigate("/");
          }
          return i;
        });
      }
    }
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (allUser) {
      const filterUser = allUser.filter((i) => {
        return (
          i.userName === name && i.email === email && i.password === password
        );
      });
      if (filterUser.length > 0) {
        filterUser.map((i) => {
          localStorage.setItem("login_user", JSON.stringify(i));
          localStorage.setItem("mess_member", memberNumber || allUser?.length);
          navigate("/");
          return i;
        });
      }
    }
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div
      className="bg_primary"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Login</h1>
      {isLoading ? (
        <>
          <>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </>
        </>
      ) : (
        <>
          <Container>
            {isChecked ? (
              <>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please enter your valid name.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      className="mt-3"
                      as={Col}
                      md="12"
                      controlId="validationCustom02"
                    >
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter your email address"
                        name="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please enter your valid email address.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      className="mt-3"
                      as={Col}
                      md="12"
                      controlId="validationCustomPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="password"
                          placeholder="Enter your password"
                          aria-describedby="inputGroupPrepend"
                          required
                          name="password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Please enter your valid password.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Button type="submit">Login</Button>
                </Form>
              </>
            ) : (
              <>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={adminName}
                        onChange={(e) => {
                          setAdminName(e.target.value);
                        }}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please enter your valid name.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      className="mt-3"
                      as={Col}
                      md="12"
                      controlId="validationCustom05"
                    >
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter your email address"
                        name="email"
                        value={adminEmail}
                        onChange={(e) => {
                          setAdminEmail(e.target.value);
                        }}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please enter your valid email address.
                      </Form.Control.Feedback>
                    </Form.Group>
                    {allUser ? (
                      <>
                        <Form.Group
                          className="mt-3"
                          as={Col}
                          md="12"
                          controlId="validationCustom03"
                        >
                          <Form.Label>
                            How many member stay in house?
                          </Form.Label>
                          <Form.Control
                            required
                            type="number"
                            placeholder="Enter member quantity"
                            name="messMember"
                            defaultValue={allUser?.length}
                            onChange={(e) => {
                              setMemberNumber(e.target.value);
                            }}
                          />
                          <Form.Control.Feedback>
                            Looks good!
                          </Form.Control.Feedback>
                          <Form.Control.Feedback type="invalid">
                            Please enter your valid number.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </>
                    ) : (
                      <>
                        <Form.Group
                          className="mt-3"
                          as={Col}
                          md="12"
                          controlId="validationCustom04"
                        >
                          <Form.Label>
                            How many member will be allowed in house?
                          </Form.Label>
                          <Form.Control
                            required
                            type="number"
                            placeholder="Enter member quantity"
                            name="messMember"
                            value={memberNumber}
                            onChange={(e) => {
                              setMemberNumber(e.target.value);
                            }}
                          />
                          <Form.Control.Feedback>
                            Looks good!
                          </Form.Control.Feedback>
                          <Form.Control.Feedback type="invalid">
                            Please enter your valid number.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </>
                    )}

                    <Form.Group
                      className="mt-3"
                      as={Col}
                      md="12"
                      controlId="validationCustomPassword"
                    >
                      <Form.Label>Password</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="password"
                          placeholder="Enter your password"
                          aria-describedby="inputGroupPrepend"
                          required
                          name="password"
                          value={adminPassword}
                          onChange={(e) => {
                            setAdminPassword(e.target.value);
                          }}
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                          Please enter your valid password.
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Button type="submit" onClick={handleAdminSubmit}>
                    Login
                  </Button>
                </Form>
              </>
            )}

            <Form.Check
              className="mt-3"
              onClick={handleCheckboxChange}
              type="switch"
              id="custom-switch"
              label="Are you member?"
            />

            <Button variant="primary" className="mt-2" onClick={handleShow}>
              Request for Admin
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header style={{ backgroundColor: "#1e293b" }} closeButton>
                <Modal.Title>Request for becoming an admin</Modal.Title>
              </Modal.Header>
              <Modal.Body style={{ backgroundColor: "#1e293b" }}>
                <Form ref={form} onSubmit={sendEmail}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput0"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="user_name"
                      placeholder="Enter a name"
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
                      name="user_email"
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                    name="message"
                  >
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" name="message" rows={3} />
                  </Form.Group>
                  <Modal.Footer style={{ backgroundColor: "#1e293b" }}>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button
                      type="submit"
                      value="Send"
                      variant="primary"
                      onClick={handleClose}
                    >
                      Send request
                    </Button>
                  </Modal.Footer>
                </Form>
              </Modal.Body>
            </Modal>
          </Container>
        </>
      )}
    </div>
  );
};

export default Login;
