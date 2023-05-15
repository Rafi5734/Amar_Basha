import React, { useEffect, useState } from "react";
import "./member.css";
import {
  Button,
  Container,
  OverlayTrigger,
  Tooltip,
  Dropdown,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../features/api/addUserApiSlice";
import {
  useDeleteUserMutation,
  useMakeRoleMutation,
} from "../../features/api/addUserApiSlice";
import Placeholder from "react-bootstrap/Placeholder";

const Members = () => {
  const { data: allUsers, isFetching } = useGetUsersQuery();

  const [deleteUser] = useDeleteUserMutation();
  const [makeRole] = useMakeRoleMutation();

  const [role, setRole] = useState("");
  const logInUser = localStorage.getItem("login_user");
  const parsingData = JSON.parse(logInUser);
  console.log(parsingData.category);
  const totalMessMember = localStorage.getItem("mess_member");
  const convertData = JSON.parse(logInUser);

  useEffect(() => {
    if (logInUser) {
      setRole(convertData?.category);
    }
  }, [logInUser, convertData?.category]);

  let count = 1;

  const handleDeleteUser = (id) => {
    if (id) {
      deleteUser(id);
    }
  };

  const handleMemberRole = (roleMake, id) => {
    // console.log((parsingData.category = roleMake));
    makeRole({
      id,
      data: {
        category: roleMake,
      },
    });
  };

  const handleManagerRole = (roleMake, id) => {
    // console.log((parsingData.category = roleMake));
    makeRole({
      id,
      data: {
        category: roleMake,
      },
    });
  };

  return (
    <div className="members_main">
      <div className="d-flex flex-row justify-content-around">
        <h1 className="text-center pt-3  pb-3 text-center">All Members</h1>
        {role === "superAdmin" &&
          Number(totalMessMember) === allUsers?.length && (
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">Add Member</Tooltip>}
            >
              <span className="d-inline-block mt-4">
                <Button disabled variant="primary">
                  <Link to="/add_members">
                    <i class="fa-solid fa-plus"></i>
                  </Link>
                </Button>{" "}
              </span>
            </OverlayTrigger>
          )}

        {role === "superAdmin" &&
          Number(totalMessMember) > allUsers?.length && (
            <OverlayTrigger
              overlay={<Tooltip id="tooltip-disabled">Add Member</Tooltip>}
            >
              <span className="d-inline-block mt-4">
                <Button variant="primary">
                  <Link to="/add_members">
                    <i class="fa-solid fa-plus"></i>
                  </Link>
                </Button>{" "}
              </span>
            </OverlayTrigger>
          )}
      </div>

      <Container className="overflow-auto">
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
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Status</th>
                  <th>Working Place</th>
                  <th>Category</th>

                  {role === "manager" && <th>Actions</th>}
                  {role === "superAdmin" && <th>Password</th>}
                  {role === "superAdmin" && <th>Actions</th>}
                </tr>
              </thead>
              <tbody>
                {allUsers?.map((user) => (
                  <tr key={user?._id}>
                    <td>{count++}</td>
                    <td>{user?.userName}</td>
                    <td>{user?.email}</td>
                    <td>{user?.phone}</td>
                    <td>{user?.status}</td>
                    <td>{user?.working_place}</td>
                    <td>{user?.category}</td>

                    {role === "manager" && (
                      <td>
                        <OverlayTrigger
                          className=""
                          overlay={
                            <Tooltip id="tooltip-disabled">Edit</Tooltip>
                          }
                        >
                          <span className="d-inline-block me-2">
                            <Link to={`/add_members/${user?._id}`}>
                              <Button>
                                <i className="fa-solid fa-pen-to-square"></i>
                              </Button>
                            </Link>
                          </span>
                        </OverlayTrigger>
                      </td>
                    )}
                    {role === "superAdmin" && <td>{user?.password}</td>}
                    {role === "superAdmin" && (
                      <td className="d-flex">
                        <OverlayTrigger
                          className=""
                          overlay={
                            <Tooltip id="tooltip-disabled">Edit</Tooltip>
                          }
                        >
                          <span className="d-inline-block me-2">
                            <Link to={`/add_members/${user?._id}`}>
                              <Button>
                                <i className="fa-solid fa-pen-to-square"></i>
                              </Button>
                            </Link>
                          </span>
                        </OverlayTrigger>

                        <OverlayTrigger
                          overlay={
                            <Tooltip id="tooltip-disabled">Delete</Tooltip>
                          }
                        >
                          <span className="d-inline-block me-2">
                            <Button onClick={() => handleDeleteUser(user._id)}>
                              <i class="fa-solid fa-trash"></i>
                            </Button>
                          </span>
                        </OverlayTrigger>
                        <Dropdown>
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-disabled">Make role</Tooltip>
                            }
                          >
                            <span className="d-inline-block">
                              <Dropdown.Toggle
                                id="dropdown-button-dark-example1"
                                variant="secondary"
                              >
                                <i class="fa-solid fa-screwdriver-wrench"></i>
                              </Dropdown.Toggle>
                            </span>
                          </OverlayTrigger>
                          <Dropdown.Menu variant="dark">
                            <Dropdown.Item
                              onClick={() =>
                                handleMemberRole("member", user._id)
                              }
                            >
                              Make Member
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item
                              onClick={() =>
                                handleManagerRole("manager", user._id)
                              }
                            >
                              Make Manager
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </Container>
    </div>
  );
};

export default Members;
