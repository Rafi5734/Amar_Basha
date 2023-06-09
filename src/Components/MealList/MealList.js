import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  OverlayTrigger,
  Placeholder,
  Tooltip,
} from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import {
  useDeleteMealListMutation,
  useGetMealListQuery,
  useDeleteAllPreviousMealListMutation,
} from "../../features/api/mealListApiSlice";
import { useGetUsersQuery } from "../../features/api/addUserApiSlice";
import { CSVLink } from "react-csv";

const MealList = () => {
  // const csvData = [];
  const [allMemberMeal, setAllMemberMeal] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [csvMealData, setCSVMealData] = useState([]);

  const totalMessMember = localStorage.getItem("mess_member");

  const { data: allMealList, isFetching } = useGetMealListQuery();
  const [deleteMealList] = useDeleteMealListMutation();
  const [deleteAllPreviousMealList] = useDeleteAllPreviousMealListMutation();
  const { data: allUser } = useGetUsersQuery();

  const login_user = JSON.parse(localStorage.getItem("login_user"));

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const previousMonthData = allMealList?.filter((item) => {
    const [day, month, year] = item.date.split("/");
    const itemDate = new Date(year, month - 1, day);

    return (
      itemDate.getMonth() === currentMonth - 1 &&
      itemDate.getFullYear() === currentYear
    );
  });

  useEffect(() => {
    const currentDate = new Date();

    const totalDays = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    // console.log("currentDate", currentDate);

    const generatedData = Array.from({ length: totalDays }, (_, index) => {
      const day = index + 1;
      const date = `${day}/${
        currentDate.getMonth() + 1
      }/${currentDate.getFullYear()}`;

      const meal = allMealList?.find((item) => item.date === date);

      return {
        rowNumber: day,
        date,
        allMeal: meal ? meal.allMeal : 0,
        _id: meal ? meal._id : 0,
      };
    });

    // console.log(generatedData);
    setTableData(generatedData);
  }, [allMealList]);

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
    setAllMemberMeal(totalMeals);
  }, [allMealList, allUser]);

  useEffect(() => {
    const csvData = Object.entries(allMemberMeal).map(([key, value]) => ({
      headers: key,
      data: value,
    }));

    const mealValue = csvData.map((value) => value.data);
    setCSVMealData(String(mealValue));
  }, [allMemberMeal]);

  const headerKeys = Object.keys(allMemberMeal);

  const handleMealListDelete = (id) => {
    deleteMealList(id);
  };

  const handleDeleteAll = () => {
    deleteAllPreviousMealList(previousMonthData);
  };

  return (
    <div className="bg_primary">
      <Container>
        <div className="d-flex flex-row justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <h1 className="pt-3 pb-3">Meal List current month:</h1>
          </div>
          <div>
            {(login_user.category === "superAdmin" ||
              login_user.category === "manager") && (
              <>
                {Number(totalMessMember) > allUser?.length && (
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip-disabled">Add meal</Tooltip>}
                  >
                    <span className="d-inline-block mt-4">
                      <Button disabled variant="primary">
                        <i className="fa-solid fa-plus"></i>
                      </Button>{" "}
                    </span>
                  </OverlayTrigger>
                )}
                {Number(totalMessMember) === allUser?.length && (
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip-disabled">Add meal</Tooltip>}
                  >
                    <span className="d-inline-block mt-4">
                      <Link to="/add_new_meal">
                        <Button variant="primary">
                          <i className="fa-solid fa-plus"></i>
                        </Button>{" "}
                      </Link>
                    </span>
                  </OverlayTrigger>
                )}
              </>
            )}
            {(login_user.category === "superAdmin" ||
              login_user.category === "manager") && (
              <>
                {Number(totalMessMember) > allUser?.length && (
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip-disabled">Add meal</Tooltip>}
                  >
                    <span className="d-inline-block mt-4 me-2">
                      <Button disabled variant="primary">
                        <i className="fa-solid fa-plus"></i>
                      </Button>{" "}
                    </span>
                  </OverlayTrigger>
                )}
                {Number(totalMessMember) === allUser?.length && (
                  <CSVLink data={csvMealData} headers={headerKeys}>
                    <OverlayTrigger
                      overlay={
                        <Tooltip id="tooltip-disabled">Export Data</Tooltip>
                      }
                    >
                      <span className="d-inline-block mt-4 ms-2">
                        <Button variant="primary">
                          <i className="fa-solid fa-file-export"></i>
                        </Button>{" "}
                      </span>
                    </OverlayTrigger>
                  </CSVLink>
                )}
              </>
            )}
            {(login_user.category === "superAdmin" ||
              login_user.category === "manager") && (
              <>
                {Number(totalMessMember) > allUser?.length && (
                  <OverlayTrigger
                    overlay={
                      <Tooltip id="tooltip-disabled">Export Data</Tooltip>
                    }
                  >
                    <span className="d-inline-block mt-4 me-2">
                      <Button disabled variant="primary">
                        <i className="fa-solid fa-plus"></i>
                      </Button>{" "}
                    </span>
                  </OverlayTrigger>
                )}
                {Number(totalMessMember) === allUser?.length && (
                  <OverlayTrigger
                    overlay={
                      <Tooltip id="tooltip-disabled">
                        Delete all previous data
                      </Tooltip>
                    }
                  >
                    <span className="d-inline-block mt-4 ms-2">
                      <Button variant="primary" onClick={handleDeleteAll}>
                        <i className="fa-solid fa-trash"></i>
                      </Button>{" "}
                    </span>
                  </OverlayTrigger>
                )}
              </>
            )}
          </div>
        </div>
      </Container>

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
          <Container fluid className="overflow-auto">
            {Number(totalMessMember) > allUser?.length && (
              <div>
                <h1 className="text-center">
                  Add {Number(totalMessMember) - allUser?.length} more member{" "}
                </h1>
              </div>
            )}
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#Date</th>
                  <th colSpan={Number(totalMessMember)}>Name</th>
                  {(login_user.category === "superAdmin" ||
                    login_user.category === "manager") && (
                    <>
                      <th>Actions</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  {allUser?.map((name) => (
                    <td key={name._id}>{name?.userName}</td>
                  ))}
                  {/* <td></td> */}
                </tr>

                {Number(totalMessMember) === allUser?.length && (
                  <>
                    {tableData.map((item) => (
                      <tr key={item.rowNumber}>
                        <td>{item.date}</td>
                        {item?.allMeal ? (
                          <>
                            {Object.entries(item.allMeal).map(
                              ([key, value]) => (
                                <>
                                  <td>{value}</td>
                                </>
                              )
                            )}
                            {(login_user.category === "superAdmin" ||
                              login_user.category === "manager") && (
                              <>
                                <td className="d-flex justify-content-around">
                                  <OverlayTrigger
                                    overlay={
                                      <Tooltip id="tooltip-disabled">
                                        Edit
                                      </Tooltip>
                                    }
                                  >
                                    <Link to={`/update_meal_list/${item?._id}`}>
                                      <Button className="me-2">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                      </Button>
                                    </Link>
                                  </OverlayTrigger>

                                  <OverlayTrigger
                                    className=""
                                    overlay={
                                      <Tooltip id="tooltip-disabled">
                                        Delete
                                      </Tooltip>
                                    }
                                  >
                                    <Button
                                      onClick={() =>
                                        handleMealListDelete(item?._id)
                                      }
                                    >
                                      <i className="fa-solid fa-trash"></i>
                                    </Button>
                                  </OverlayTrigger>
                                </td>
                              </>
                            )}
                          </>
                        ) : (
                          <>
                            {allUser?.map((i) => (
                              <td></td>
                            ))}
                          </>
                        )}
                      </tr>
                    ))}
                  </>
                )}

                <tr>
                  <td>Total</td>
                  {Object.keys(allMemberMeal)?.map((key) => (
                    <td key={key?._id}> = {allMemberMeal[key]}</td>
                  ))}
                </tr>
              </tbody>
            </Table>
          </Container>
        </>
      )}
    </div>
  );
};

export default MealList;
