import React from "react";
import { Container, Stack } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import "../../assets/global.css";
import "./style.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PieChart from "../../Layout/PieChart";
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

const Dashboard = () => {
  const percentage = 41.5;
  const data = [
    {
      name: "January",
      mealRate: 40.0,
    },
    {
      name: "February",
      mealRate: 41.56,
    },
    {
      name: "March",
      mealRate: 43.56,
    },
  ];
  const data2 = [
    {
      name: "January",
      bazarCost: 20000.0,
    },
    {
      name: "February",
      bazarCost: 17000.0,
    },
    {
      name: "March",
      bazarCost: 15000.0,
    },
  ];
  return (
    <div style={{ backgroundColor: "#0f172a" }}>
      <Container>
        <h1>
          Dashboard - <span style={{ color: "#0ce7fa" }}>Today's</span>
        </h1>
        <div className="grid-wrapper">
          <div
            className="rounded p-3 mb-3"
            style={{ backgroundColor: "#1e293b" }}
          >
            <div className="rounded p-3" style={{ backgroundColor: "#0f172a" }}>
              <p>Today Total Meal - Dinner</p>
              <p className="fs-5 fw-bold">10</p>
            </div>
          </div>
          <div
            className="rounded p-3 mb-3"
            style={{ backgroundColor: "#1e293b" }}
          >
            <div className="rounded p-3" style={{ backgroundColor: "#0f172a" }}>
              <p>Today Total Mech Member</p>
              <p className="fs-5 fw-bold">67</p>
            </div>
          </div>
          <div
            className="rounded p-3 mb-3"
            style={{ backgroundColor: "#1e293b" }}
          >
            <div className="rounded p-3" style={{ backgroundColor: "#0f172a" }}>
              <p>Today Meal Rate</p>

              <PieChart label={`${percentage} tk`}>
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                />
              </PieChart>
            </div>
          </div>
          <div
            className="rounded p-3 mb-3"
            style={{ backgroundColor: "#1e293b" }}
          >
            <div className="rounded p-3" style={{ backgroundColor: "#0f172a" }}>
              <p>Today Bazar Time</p>
              <p className="fs-5 fw-bold">
                Name: <span>Asif</span>
              </p>
            </div>
          </div>
          <div
            className="rounded p-3 mb-3"
            style={{ backgroundColor: "#1e293b" }}
          >
            <div
              className="rounded p-3 overflow-auto"
              style={{ backgroundColor: "#0f172a", height: "200px" }}
            >
              <p>Today Meal of Members</p>
              <Table
                striped
                bordered
                hover
                variant="dark"
                className=""
                style={{}}
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Lunch, Dinner</td>
                    <td>1, 1</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Lunch, Dinner</td>
                    <td>1, 0</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jack</td>
                    <td>Lunch, Dinner</td>
                    <td>0, 1</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Harley</td>
                    <td>Lunch, Dinner</td>
                    <td>0, 1</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Asif</td>
                    <td>Lunch, Dinner</td>
                    <td>0, 0</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div
            className="rounded p-3 mb-3"
            style={{ backgroundColor: "#1e293b" }}
          >
            <div
              className="rounded p-3 overflow-auto"
              style={{ backgroundColor: "#0f172a", height: "200px" }}
            >
              <p>Today Meal Items</p>
              <Table
                striped
                bordered
                hover
                variant="dark"
                className=""
                style={{}}
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Time</th>
                    <th>Item Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Lunch</td>
                    <td>Murgi, Alu Vorta</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Dinner</td>
                    <td>Dim, Mach</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Container>
      <hr style={{ border: "1px solid white" }} />
      <Container>
        <h1>
          Dashboard - <span style={{ color: "#0ce7fa" }}>This Month</span>
        </h1>
        <div className="grid-wrapper">
          <div
            className="rounded p-3 mb-3"
            style={{ backgroundColor: "#1e293b" }}
          >
            <div className="rounded p-3" style={{ backgroundColor: "#0f172a" }}>
              <p>This Month Total Deposit Amount</p>
              <p className="fs-5 fw-bold">1000000</p>
            </div>
          </div>
          <div
            className="rounded p-3 mb-3"
            style={{ backgroundColor: "#1e293b" }}
          >
            <div
              className="rounded p-3 overflow-auto"
              style={{ backgroundColor: "#0f172a", height: "200px" }}
            >
              <p>This Month Money Deposit Members</p>
              <Table
                striped
                bordered
                hover
                variant="dark"
                className=""
                style={{}}
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Date&Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>4444</td>
                    <td>9:31; 3/30/2023</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>4444</td>
                    <td>9:31; 3/30/2023</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jack</td>
                    <td>4444</td>
                    <td>9:31; 3/30/2023</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Harley</td>
                    <td>4444</td>
                    <td>9:31; 3/30/2023</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Asif</td>
                    <td>4444</td>
                    <td>9:31; 3/30/2023</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div
            className="rounded p-3 mb-3"
            style={{ backgroundColor: "#1e293b" }}
          >
            <div
              className="rounded p-3 overflow-auto"
              style={{ backgroundColor: "#0f172a", height: "200px" }}
            >
              <p>This Month Total Bazar Cost</p>
              <p className="fs-5 fw-bold">1234567890 tk/-</p>
            </div>
          </div>
        </div>
      </Container>
      <hr style={{ border: "1px solid white" }} />
      <Container>
        <h1>
          Dashboard - <span style={{ color: "#0ce7fa" }}>Others</span>
        </h1>
        <div className="grid-wrapper">
          <div
            className="rounded p-3 mb-3"
            style={{ backgroundColor: "#1e293b" }}
          >
            <div className="rounded p-3" style={{ backgroundColor: "#0f172a" }}>
              <p>Home Rent</p>
              <p className="fs-5 fw-bold">1000000</p>
            </div>
          </div>
          <div
            className="rounded p-3 mb-3"
            style={{ backgroundColor: "#1e293b" }}
          >
            <div
              className="rounded p-3 overflow-auto"
              style={{ backgroundColor: "#0f172a", height: "200px" }}
            >
              <p>Last 3 Month Meal rate</p>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width="100%"
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 20,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip style={{ backgroundColor: "#000" }} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="mealRate"
                    stroke="#8884d8"
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div
            className="rounded p-3 mb-3"
            style={{ backgroundColor: "#1e293b" }}
          >
            <div
              className="rounded p-3 overflow-auto"
              style={{ backgroundColor: "#0f172a", height: "200px" }}
            >
              <p>Last 3 Month Bazar Cost</p>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  width="100%"
                  height={300}
                  data={data2}
                  margin={{
                    top: 5,
                    right: 20,
                    left: 0,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip style={{ backgroundColor: "#000" }} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="bazarCost"
                    stroke="#8884d8"
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div
            className="rounded p-3 mb-3"
            style={{ backgroundColor: "#1e293b" }}
          >
            <div
              className="rounded p-3 overflow-auto"
              style={{ backgroundColor: "#0f172a", height: "200px" }}
            >
              <p>Next 3 Person Bazar Schedule</p>
              <Table
                striped
                bordered
                hover
                variant="dark"
                className=""
                style={{}}
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Date&Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>9:31; 3/30/2023</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>9:31; 3/30/2023</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jack</td>
                    <td>9:31; 3/30/2023</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Harley</td>
                    <td>9:31; 3/30/2023</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Asif</td>
                    <td>9:31; 3/30/2023</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div
            className="rounded p-3 mb-3"
            style={{ backgroundColor: "#1e293b" }}
          >
            <div
              className="rounded p-3 overflow-auto"
              style={{ backgroundColor: "#0f172a", height: "200px" }}
            >
              <p>Last 3 Person Bazar</p>
              <Table
                striped
                bordered
                hover
                variant="dark"
                className=""
                style={{}}
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Cost</th>
                    <th>Date&Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>456</td>
                    <td>9:31; 3/30/2023</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>456</td>
                    <td>9:31; 3/30/2023</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jack</td>
                    <td>456</td>
                    <td>9:31; 3/30/2023</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Harley</td>
                    <td>456</td>
                    <td>9:31; 3/30/2023</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Asif</td>
                    <td>456</td>
                    <td>9:31; 3/30/2023</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div
            className="rounded p-3 mb-3"
            style={{ backgroundColor: "#1e293b" }}
          >
            <div
              className="rounded p-3 overflow-auto"
              style={{ backgroundColor: "#0f172a", height: "200px" }}
            >
              <p>Last 3 Days Meal with Member</p>
              <Table
                striped
                bordered
                hover
                variant="dark"
                className=""
                style={{}}
              >
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Q</th>
                    <th>D&T</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Lunch, Dinner</td>
                    <td>1, 1</td>
                    <td>3/30/2023</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Lunch, Dinner</td>
                    <td>1, 1</td>
                    <td>3/30/2023</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Jack</td>
                    <td>Lunch, Dinner</td>
                    <td>1, 1</td>
                    <td>3/30/2023</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Harley</td>
                    <td>Lunch, Dinner</td>
                    <td>1, 1</td>
                    <td>3/30/2023</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Asif</td>
                    <td>Lunch, Dinner</td>
                    <td>1, 1</td>
                    <td>3/30/2023</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
