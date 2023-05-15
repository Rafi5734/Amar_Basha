import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useGetUsersQuery } from "../../features/api/addUserApiSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const Login = () => {
  const { data: allUser, isLoading } = useGetUsersQuery();
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [memberNumber, setMemberNumber] = useState(allUser?.length);
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

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
          // if (i.category === "superAdmin") {

          // }
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
                    {/* <Form.Group
                      className="mt-3"
                      as={Col}
                      md="12"
                      controlId="validationCustom02"
                    >
                      <Form.Label>How many member stay in house?</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter member quantity"
                        name="email"
                        value={memberNumber}
                        onChange={(e) => {
                          setMemberNumber(e.target.value);
                        }}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        Please enter your valid number.
                      </Form.Control.Feedback>
                    </Form.Group> */}
                    <Form.Group
                      className="mt-3"
                      as={Col}
                      md="12"
                      controlId="validationCustomUsername"
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
                    {allUser ? (
                      <>
                        <Form.Group
                          className="mt-3"
                          as={Col}
                          md="12"
                          controlId="validationCustom02"
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
                          controlId="validationCustom02"
                        >
                          <Form.Label>
                            How many member stay in house?
                          </Form.Label>
                          <Form.Control
                            required
                            type="email"
                            placeholder="Enter member quantity"
                            name="email"
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
                      controlId="validationCustomUsername"
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
                  <Button type="submit" onClick={handleSubmit}>
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
          </Container>
        </>
      )}
    </div>
  );
};

export default Login;
