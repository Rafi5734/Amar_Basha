import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "./member.css";
import axios from "axios";
import baseURL from "../../config";
import { useAddUserMutation } from "../../features/api/addUserApiSlice";

const AddMember = () => {
  const [addUser, data, isLoading, isError] = useAddUserMutation();
  console.log(data);
  const [validated, setValidated] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userStatus, setUserStatus] = useState("");
  const [userCategory, setUserCategory] = useState("");
  const [userWorkPlace, setUserWorkPlace] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(baseURL);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    addUser({
      userName: userName,
      email: userEmail,
      phone: phoneNumber,
      status: userStatus,
      category: userCategory,
      working_place: userWorkPlace,
      password: password,
    });

    setValidated(true);
  };
  return (
    <div className="bg_primary add_member_form">
      <Container className="mb-5">
        <h1 className="pt-3 pb-3">Add Member</h1>
        <Form
          className="background_color_secondary p-3 rounded"
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter member name"
                name="userName"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter member email address"
                  aria-describedby="inputGroupPrepend"
                  required
                  name="userEmail"
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter member phone number"
                required
                name="phoneNumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter member status"
                required
                name="userStatus"
                onChange={(e) => setUserStatus(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom04">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="userCategory"
                onChange={(e) => setUserCategory(e.target.value)}
                aria-label="Default select example"
              >
                <option style={{ backgroundColor: "#334155" }}>
                  Select a category
                </option>
                <option style={{ backgroundColor: "#334155" }} value="member">
                  Member
                </option>
                <option style={{ backgroundColor: "#334155" }} value="manager">
                  Manager
                </option>
              </Form.Select>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom05">
              <Form.Label>Work Place</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter member work place"
                required
                name="userWorkPlace"
                onChange={(e) => setUserWorkPlace(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mt-3"
              as={Col}
              md="4"
              controlId="validationCustom05"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter member password"
                required
                name="userWorkPlace"
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit">Add Member</Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddMember;
