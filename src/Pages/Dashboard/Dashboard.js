import React, { useEffect, useState } from "react";
import { Container, Placeholder } from "react-bootstrap";
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
import io from "socket.io-client";
import { useGetMealListQuery } from "../../features/api/mealListApiSlice";
import { useGetBazarListQuery } from "../../features/api/bazarListApiSlice";

const Dashboard = () => {
  const [countTotalMeal, setCountTotalMeal] = useState([]);
  const [countBazarCost, setCountBazarCost] = useState([]);

  const { data: allMealList, isFetching } = useGetMealListQuery();
  const { data: allBazarList } = useGetBazarListQuery();

  const percentage = (countBazarCost / countTotalMeal).toFixed(2);

  console.log(percentage);

  useEffect(() => {
    const sumAllMeals = (array) => {
      const mealKeys = Object.keys(array[0]?.allMeal || {});
      const totalMeals = mealKeys.reduce((acc, key) => {
        const sum = array.reduce((sum, obj) => {
          const mealValue = obj?.allMeal?.[key] || 0;
          return sum + Number(mealValue);
        }, 0);
        return { ...acc, [key]: sum };
      }, {});
      return totalMeals;
    };

    const totalMeals = sumAllMeals(allMealList || []);
    const sumOfAllMeal = Object.entries(totalMeals).map(([key, value]) => {
      return value;
    });

    const finalSumOfAllMeal = sumOfAllMeal.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue;
      },
      0
    );

    setCountTotalMeal(finalSumOfAllMeal);

    const sumOfAmount = allBazarList?.reduce(
      (sum, user) => sum + Number(user.amount),
      0
    );
    setCountBazarCost(sumOfAmount);
  }, [allMealList, allBazarList]);

  // console.log("count total meal: ", countTotalMeal);
  // console.log("count total bazar cost: ", countBazarCost);

  useEffect(() => {
    const socket = io("http://localhost:8000"); // Replace with your server URL

    // Receive data from the server
    socket.on("message", (data) => {
      console.log("Received data:", data);
    });

    // Send data to the server
    socket.emit("message", "Hello from the client!");

    return () => {
      socket.disconnect();
    };
  }, []);

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
        <h1 className="pt-3 pb-3">
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
              {isFetching ? (
                <>
                  <Placeholder as="p" animation="glow">
                    <Placeholder
                      style={{
                        width: "100%",
                        height: "100px",
                        borderRadius: "5px",
                      }}
                      xs={12}
                    />
                  </Placeholder>
                </>
              ) : (
                <>
                  <PieChart label={`${percentage} tk`}>
                    <CircularProgressbar
                      value={percentage}
                      text={`${percentage}%`}
                    />
                  </PieChart>
                </>
              )}
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
