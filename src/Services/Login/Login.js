import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useGetUsersQuery } from "../../features/api/logInApiSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
const Login = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { data: allUser, isLoading } = useGetUsersQuery();

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
          navigate("/");
          window.location.reload();
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
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please enter your valid password.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Button type="submit">Login</Button>
            </Form>
          </Container>
        </>
      )}
    </div>
  );
};

export default Login;
