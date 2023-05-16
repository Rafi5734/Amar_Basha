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
} from "../../features/api/mealListApiSlice";
import { useGetUsersQuery } from "../../features/api/addUserApiSlice";
import ReactPaginate from "react-paginate";

const MealList = () => {
  const [allMemberMeal, setAllMemberMeal] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const totalMessMember = localStorage.getItem("mess_member");

  const { data: allMealList, isFetching } = useGetMealListQuery(pageNumber);
  const [deleteMealList] = useDeleteMealListMutation();
  const { data: allUser } = useGetUsersQuery();

  // console.log(allMealList);

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

      // console.log(day);

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

  // console.log(tableData);

  // console.log(totalMealCount);

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
  }, [allMealList]);

  const handleMealListDelete = (id) => {
    deleteMealList(id);
    // console.log(id);
  };

  const handlePageClick = (event) => {
    setPageNumber(event.selected + 1);
    // console.log(event.selected);
  };

  return (
    <div className="bg_primary mealList_main">
      <div>
        <div className="d-flex flex-row justify-content-around">
          <h1 className="pt-3 pb-3">Meal List current month:</h1>
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
        </div>
      </div>

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
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#Date</th>
                  <th colSpan={Number(totalMessMember)}>Name</th>
                  {/* <th>Total</th> */}
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  {allUser?.map((name) => (
                    <td key={name._id}>{name?.userName}</td>
                  ))}
                  <td></td>
                </tr>

                {Number(totalMessMember) > allUser?.length && (
                  <div>
                    <h1>
                      Add {Number(totalMessMember) - allUser?.length} more
                      member{" "}
                    </h1>
                  </div>
                )}

                {Number(totalMessMember) === allUser?.length && (
                  <>
                    {/* {allMealList?.map((meal) => (
                      <tr key={meal?._id}>
                        <td>
                          #{count++}; {meal?.date}
                        </td>
                        {Object.keys(meal?.allMeal)?.map((key) => (
                          <td key={key?._id}>{meal?.allMeal[key]}</td>
                        ))}
                        <td className="d-flex justify-content-around">
                          <OverlayTrigger
                            overlay={
                              <Tooltip id="tooltip-disabled">Edit</Tooltip>
                            }
                          >
                            <Link to={`/update_meal_list/${meal?._id}`}>
                              <Button className="me-2">
                                <i className="fa-solid fa-pen-to-square"></i>
                              </Button>
                            </Link>
                          </OverlayTrigger>

                          <OverlayTrigger
                            className=""
                            overlay={
                              <Tooltip id="tooltip-disabled">Delete</Tooltip>
                            }
                          >
                            <Button
                              onClick={() => handleMealListDelete(meal?._id)}
                            >
                              <i className="fa-solid fa-trash"></i>
                            </Button>
                          </OverlayTrigger>
                        </td>
                      </tr>
                    ))} */}
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
                            <td className="d-flex justify-content-around">
                              <OverlayTrigger
                                overlay={
                                  <Tooltip id="tooltip-disabled">Edit</Tooltip>
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

            <ReactPaginate
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={1}
              marginPagesDisplayed={2}
              pageCount={3}
              previousLabel="<"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
              // className="md-5"
            />
          </Container>
        </>
      )}
    </div>
  );
};

export default MealList;
