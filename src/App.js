import "./App.css";
import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Members from "./Components/Members/Members";
import MealList from "./Components/MealList/MealList";
import BazarList from "./Components/BazarList/BazarList";
import DepositList from "./Components/DepositList/DepositList";
import UpdateMember from "./Components/Members/UpdateMember";
import UpdateMealList from "./Components/MealList/UpdateMealList";
import UpdateBazarList from "./Components/BazarList/updateBazarList";
import UpdateDepositList from "./Components/DepositList/UpdateDeposit";
import { Badge, Button, Dropdown } from "react-bootstrap";
import Notification from "./Pages/Notifications/Notification";
import Profile from "./Components/Profile/Profile";
import UpdateProfile from "./Components/Profile/UpdateProfile";
import Logout from "./Services/Logout/Logout";
import Login from "./Services/Login/Login";
import AddMember from "./Components/Members/AddMember";
import { useGetUsersQuery } from "./features/api/logInApiSlice";

function App() {
  const { data: allUser, isLoading, isError } = useGetUsersQuery();

  // console.log(allUser);

  // if (allUser) {
  //   allUser.map((i) => console.log(i.userName));
  // }
  return (
    <div className="App">
      <Navbar style={{ backgroundColor: "#1e293b" }} expand="lg" sticky="top">
        <Container>
          <Navbar.Brand>
            <Link className="text-decoration-none" to="/">
              <p className="logo_name text-info fw-bold fs-3">Amar Basha</p>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto text-white">
              <NavDropdown
                title="Members"
                id="basic-nav-dropdown"
                className="member_dropdown me-5"
              >
                <NavDropdown.Item>
                  <Link
                    to="/members"
                    className="me-5 text-white text-decoration-none"
                  >
                    All Member
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Meal List"
                id="basic-nav-dropdown"
                className="member_dropdown me-5"
              >
                <NavDropdown.Item>
                  <Link
                    to="/meal_list"
                    className="me-5 text-white text-decoration-none"
                  >
                    Meal-List
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="bazar List"
                id="basic-nav-dropdown"
                className="member_dropdown me-5"
              >
                <NavDropdown.Item>
                  <Link
                    to="/bazar_list"
                    className="me-5 text-white text-decoration-none"
                  >
                    Bazar-List
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Deposit List"
                id="basic-nav-dropdown"
                className="member_dropdown me-5"
              >
                <NavDropdown.Item>
                  <Link
                    to="/deposit_list"
                    className="me-5 text-white text-decoration-none"
                  >
                    Deposit-List
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    to="/update_deposit_list"
                    className="me-5 text-white text-decoration-none"
                  >
                    Update Deposit-List
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Dropdown
                className="mb-2 me-5"
                style={{ background: "transparent" }}
              >
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                  <i class="fa-solid fa-envelope"></i>{" "}
                  <Badge bg="secondary">9</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu
                  style={{
                    background: "#1e293b",
                    border: "0.5px solid #fff",
                  }}
                  variant="dark"
                >
                  <h5 className="text-light ps-3 pe-3 fw-bold mb-3">
                    Notifications
                  </h5>
                  <Dropdown.Item
                    className=" d-flex text-light"
                    href="#/action-1"
                  >
                    <img
                      src="https://dashcode.codeshaper.net/assets/user-1-ad58ce72.jpg"
                      className="rounded"
                      style={{ width: "30px", height: "35px" }}
                      alt="user-logo"
                    ></img>
                    <div className="d-flex flex-column">
                      <span className="ms-2">Wadern Warren</span>
                      <span
                        className="ms-2 text-muted"
                        style={{ fontSize: "13px" }}
                      >
                        Hi! What are you doing?...
                      </span>
                      <span
                        className="ms-2 text-muted"
                        style={{ fontSize: "13px" }}
                      >
                        3m ago
                      </span>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    className=" d-flex text-light"
                    href="#/action-1"
                  >
                    <img
                      src="https://dashcode.codeshaper.net/assets/user-1-ad58ce72.jpg"
                      className="rounded"
                      style={{ width: "30px", height: "35px" }}
                      alt="user-logo"
                    ></img>
                    <div className="d-flex flex-column">
                      <span className="ms-2">Wadern Warren</span>
                      <span
                        className="ms-2 text-muted"
                        style={{ fontSize: "13px" }}
                      >
                        Hi! What are you doing?...
                      </span>
                      <span
                        className="ms-2 text-muted"
                        style={{ fontSize: "13px" }}
                      >
                        3m ago
                      </span>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    className=" d-flex text-light"
                    href="#/action-1"
                  >
                    <img
                      src="https://dashcode.codeshaper.net/assets/user-1-ad58ce72.jpg"
                      className="rounded"
                      style={{ width: "30px", height: "35px" }}
                      alt="user-logo"
                    ></img>
                    <div className="d-flex flex-column">
                      <span className="ms-2">Wadern Warren</span>
                      <span
                        className="ms-2 text-muted"
                        style={{ fontSize: "13px" }}
                      >
                        Hi! What are you doing?...
                      </span>
                      <span
                        className="ms-2 text-muted"
                        style={{ fontSize: "13px" }}
                      >
                        3m ago
                      </span>
                    </div>
                  </Dropdown.Item>
                  <Button className="text-decoration-none" variant="link">
                    <Link
                      className="text-decoration-none text-light"
                      to="/notification"
                    >
                      Load More...
                    </Link>
                  </Button>
                </Dropdown.Menu>
                <Dropdown.Divider />
              </Dropdown>
              <Button className="me-5 mb-2" variant="info">
                <Link to="/login" className="text-decoration-none text-light">
                  Login
                </Link>
              </Button>{" "}
              <img
                src="https://dashcode.codeshaper.net/assets/user-1-ad58ce72.jpg"
                className="rounded me-0"
                style={{
                  width: "30px",
                  height: "35px",
                  // marginTop: "-30px",
                }}
                alt="user-logo"
              ></img>
              <Dropdown className="ms-0">
                <Dropdown.Toggle
                  style={{ background: "transparent" }}
                  variant="secondary"
                  id="dropdown-basic"
                  className="border-0"
                >
                  <span>Waren Waden</span>
                </Dropdown.Toggle>

                <Dropdown.Menu
                  style={{
                    background: "#1e293b",
                    border: "0.5px solid #fff",
                  }}
                  variant="dark"
                >
                  <Dropdown.Item>
                    <Link
                      className="text-decoration-none text-light"
                      to="/profile"
                    >
                      Profile
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <Link
                      className="text-decoration-none text-light"
                      to="/logout"
                    >
                      Logout
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* start contact button in bottom position */}
      <Navbar fixed="bottom">
        <Container fluid>
          <Navbar.Collapse className="justify-content-end">
            <Button>
              <i className="fa-regular fa-paper-plane"></i>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* end contact button in bottom position */}
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/members" element={<Members />}></Route>
        <Route path="/update_members" element={<UpdateMember />}></Route>
        <Route path="/add_members" element={<AddMember />}></Route>
        <Route path="/meal_list" element={<MealList />}></Route>
        <Route path="/update_meal_list" element={<UpdateMealList />}></Route>
        <Route path="/bazar_list" element={<BazarList />}></Route>
        <Route path="/update_bazar_list" element={<UpdateBazarList />}></Route>
        <Route path="/deposit_list" element={<DepositList />}></Route>
        <Route
          path="/update_deposit_list"
          element={<UpdateDepositList />}
        ></Route>
        {/* <Route path="/all_members" element={<AllMembers />}></Route> */}
        <Route path="/notification" element={<Notification />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/update_profile" element={<UpdateProfile />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
