import React from "react";
import { Container } from "react-bootstrap";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useAddAdminUserMutation } from "../../features/api/addUserApiSlice";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const initKeys = {
    userName: "",
    email: "",
    phone: "",
    category: "superAdmin",
    status: "",
    working_place: "",
    password: "",
  };
  const [validated, setValidated] = useState(false);
  const [adminInfo, setAdminInfo] = useState(initKeys);

  const [addAdminUser] = useAddAdminUserMutation();

  const handleSubmit = (event) => {
    event.preventDefault();
    addAdminUser(adminInfo);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    navigate("/login");
  };

  const onChange = (e) => {
    setAdminInfo({
      ...adminInfo,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div style={{ backgroundColor: "#0f172a" }}>
      <Container>
        <h3 className="pt-5 text-center pb-5">Admin Login</h3>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="12"
              className="mb-3"
              controlId="validationCustom01"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                onChange={onChange}
                name="userName"
                placeholder="Name"
                // defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="12"
              className="mb-3"
              controlId="validationCustom02"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                onChange={onChange}
                name="email"
                placeholder="Email"
                // defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="12"
              className="mb-3"
              controlId="validationCustomUsername"
            >
              <Form.Label>Phone number</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Phone number"
                  onChange={onChange}
                  name="phone"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group
              as={Col}
              md="12"
              className="mb-3"
              controlId="validationCustomUsername"
            >
              <Form.Label>Category</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Category"
                  aria-describedby="inputGroupPrepend"
                  onChange={onChange}
                  name="category"
                  required
                  defaultValue="superAdmin"
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group
              as={Col}
              md="12"
              className="mb-3"
              controlId="validationCustomUsername"
            >
              <Form.Label>Status</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Category"
                  onChange={onChange}
                  name="status"
                  aria-describedby="inputGroupPrepend"
                  required
                  //   defaultValue="superAdmin"
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group
              as={Col}
              md="12"
              className="mb-3"
              controlId="validationCustomUsername"
            >
              <Form.Label>Work place</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Work place"
                  onChange={onChange}
                  name="working_place"
                  aria-describedby="inputGroupPrepend"
                  required
                  //   defaultValue="superAdmin"
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group
              as={Col}
              md="12"
              className="mb-3"
              controlId="validationCustomUsername"
            >
              <Form.Label>Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={onChange}
                  name="password"
                  aria-describedby="inputGroupPrepend"
                  required
                  //   defaultValue="superAdmin"
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Button className="mb-5" type="submit">
            Submit form
          </Button>
        </Form>
      </Container>
    </div>
  );
}
