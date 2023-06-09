import "./App.css";
import React, { useEffect, useState } from "react";
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
import UpdateMealList from "./Components/MealList/UpdateMealList";
import UpdateDepositList from "./Components/DepositList/UpdateDeposit";
import { Badge, Button, Dropdown } from "react-bootstrap";
import Notification from "./Pages/Notifications/Notification";
import Profile from "./Components/Profile/Profile";
import UpdateProfile from "./Components/Profile/UpdateProfile";
import Login from "./Services/Login/Login";
import AddMember from "./Components/Members/AddMember";
import { useNavigate } from "react-router-dom";
import PrivateComponent from "./Layout/PrivateComponent";
import UpdateMember from "./Components/Members/UpdateMember/UpdateMember";
import AddNewMeal from "./Components/MealList/AddNewMeal";
import UpdateBazarList from "./Components/BazarList/UpdateBazarList/UpdateBazarList";
import Questionary from "./Pages/Questionaries/Questionary";
import Test from "../src/Components/MealList/test";
// import { useGetUsersQuery } from "./features/api/logInApiSlice";

function App() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  // const [name, setName] = useState("");
  const logInUser = localStorage.getItem("login_user");
  const convertData = JSON.parse(logInUser);

  useEffect(() => {
    if (logInUser) {
      setRole(convertData?.category);
      // setName(convertData?.userName);
    }
  }, [convertData?.category, convertData?.userName, logInUser]);

  const handleLogout = () => {
    localStorage.removeItem("login_user");
    navigate("/login");
    window.location.reload();
  };

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
              {role === "member" && (
                <>
                  <>
                    <NavDropdown
                      title="Members"
                      id="basic-nav-dropdown"
                      className="member_dropdown"
                    >
                      <NavDropdown.Item>
                        <Link
                          to="/members"
                          className="text-white text-decoration-none"
                        >
                          All Member
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="Meal List"
                      id="basic-nav-dropdown"
                      className="member_dropdown"
                    >
                      <NavDropdown.Item>
                        <Link
                          to="/meal_list"
                          className="text-white text-decoration-none"
                        >
                          Meal-List
                        </Link>
                      </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown
                      title="bazar List"
                      id="basic-nav-dropdown"
                      className="member_dropdown"
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
                      className="member_dropdown"
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
                      className="mb-2"
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
                    <img
                      src="https://dashcode.codeshaper.net/assets/user-1-ad58ce72.jpg"
                      className="rounded me-0 ms-2"
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
                        <span>{convertData?.userName}</span>
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
                        <Dropdown.Item>
                          <span onClick={handleLogout}>Logout</span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </>
                </>
              )}

              {role === "manager" && (
                <>
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
                    className="member_dropdown"
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
                    className="member_dropdown"
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
                    className="member_dropdown"
                  >
                    <NavDropdown.Item>
                      <Link
                        to="/deposit_list"
                        className="me-5 text-white text-decoration-none"
                      >
                        Deposit-List
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Dropdown
                    className="mb-2"
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
                  <img
                    src="https://dashcode.codeshaper.net/assets/user-1-ad58ce72.jpg"
                    className="rounded me-0 ms-2"
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
                      <span>{convertData?.userName}</span>
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
                      <Dropdown.Item>
                        <span onClick={handleLogout}>Logout</span>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              )}

              {role === "superAdmin" && (
                <>
                  <NavDropdown
                    title="Members"
                    id="basic-nav-dropdown"
                    className="member_dropdown"
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
                    className="member_dropdown"
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
                    className="member_dropdown"
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
                    className="member_dropdown"
                  >
                    <NavDropdown.Item>
                      <Link
                        to="/deposit_list"
                        className="me-5 text-white text-decoration-none"
                      >
                        Deposit-List
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Dropdown
                    className="mb-2 me-2"
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
                  <img
                    src="https://dashcode.codeshaper.net/assets/user-1-ad58ce72.jpg"
                    className="rounded me-0 ms-2"
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
                      <span>{convertData?.userName}</span>
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
                      <Dropdown.Item>
                        <span onClick={handleLogout}>Logout</span>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* start contact button in bottom position */}
      <Navbar fixed="bottom" className="bottom_navbar">
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
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/members" element={<Members />}></Route>
          <Route path="/add_members" element={<AddMember />}></Route>
          <Route path="/add_members/:id" element={<UpdateMember />}></Route>
          <Route path="/meal_list" element={<MealList />}></Route>
          <Route path="/add_new_meal" element={<AddNewMeal />}></Route>
          <Route
            path="/update_meal_list/:id"
            element={<UpdateMealList />}
          ></Route>
          <Route path="/bazar_list" element={<BazarList />}></Route>
          <Route
            path="/update_bazar_list/:id"
            element={<UpdateBazarList />}
          ></Route>
          <Route path="/deposit_list" element={<DepositList />}></Route>
          <Route
            path="/update_deposit_list/:id"
            element={<UpdateDepositList />}
          ></Route>
          <Route path="/notification" element={<Notification />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/update_profile" element={<UpdateProfile />}></Route>
        </Route>
        {/* <Route path="/" element={<Dashboard />}></Route>
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
          <Route path="/notification" element={<Notification />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/update_profile" element={<UpdateProfile />}></Route>
          <Route path="/logout" element={<Logout />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/question" element={<Questionary />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </div>
  );
}

export default App;
