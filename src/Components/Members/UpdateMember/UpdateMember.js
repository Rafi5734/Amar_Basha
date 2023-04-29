import React, { useState } from "react";
import {
  Button,
  Form,
  InputGroup,
  Row,
  Col,
  Container,
  Placeholder,
} from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import {
  useGetSingleUserQuery,
  useUpdateSingleUserMutation,
} from "../../../features/api/addUserApiSlice";

export default function UpdateMember() {
  const navigate = useNavigate();
  let { id } = useParams();
  const {
    data: singleUserData,
    isFetching,
    isError,
  } = useGetSingleUserQuery(id);
  const [validated, setValidated] = useState(false);
  const [userName, setUserName] = useState(singleUserData?.userName);
  const [userEmail, setUserEmail] = useState(singleUserData?.email);
  const [phoneNumber, setPhoneNumber] = useState(singleUserData?.phone);
  const [userStatus, setUserStatus] = useState(singleUserData?.status);
  const [userCategory, setUserCategory] = useState(singleUserData?.category);
  const [userWorkPlace, setUserWorkPlace] = useState(
    singleUserData?.working_place
  );
  const [password, setPassword] = useState(singleUserData?.password);

  const [updateSingleUser] = useUpdateSingleUserMutation();
  // console.log(updateSingleUser, isLoading);

  const updateData = {
    userName: userName,
    email: userEmail,
    phone: phoneNumber,
    status: userStatus,
    category: userCategory,
    working_place: userWorkPlace,
    password: password,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    // console.log(updateData);

    updateSingleUser({
      id,
      data: {
        userName: userName,
        email: userEmail,
        phone: phoneNumber,
        status: userStatus,
        category: userCategory,
        working_place: userWorkPlace,
        password: password,
      },
    });
    navigate("/members");
    window.location.reload();

    setValidated(true);
  };
  return (
    <div>
      <div className="bg_primary add_member_form">
        <Container className="mb-5">
          <div>
            <h1 className="text-center pt-3 pb-3">
              Update Member Info - {singleUserData?.userName}
            </h1>
          </div>

          {isFetching ? (
            <>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
              </Placeholder>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
              </Placeholder>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
              </Placeholder>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
              </Placeholder>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
              </Placeholder>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
              </Placeholder>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
              </Placeholder>
              <Placeholder as="p" animation="glow">
                <Placeholder xs={12} />
              </Placeholder>
            </>
          ) : (
            <>
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
                      defaultValue={singleUserData?.userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Email</Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text id="inputGroupPrepend">
                        @
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Enter member email address"
                        aria-describedby="inputGroupPrepend"
                        required
                        name="email"
                        defaultValue={singleUserData?.email}
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
                      name="phone"
                      defaultValue={singleUserData?.phone}
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
                      name="status"
                      defaultValue={singleUserData?.status}
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
                      name="category"
                      defaultValue={singleUserData?.category}
                      onChange={(e) => setUserCategory(e.target.value)}
                      aria-label="Default select example"
                    >
                      <option style={{ backgroundColor: "#334155" }}>
                        Select a category
                      </option>
                      <option
                        style={{ backgroundColor: "#334155" }}
                        value="member"
                      >
                        Member
                      </option>
                      <option
                        style={{ backgroundColor: "#334155" }}
                        value="manager"
                      >
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
                      name="working_place"
                      defaultValue={singleUserData?.working_place}
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
                      name="password"
                      defaultValue={singleUserData?.password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid zip.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button type="submit">Update Member</Button>
              </Form>
            </>
          )}
        </Container>
      </div>
    </div>
  );
}
