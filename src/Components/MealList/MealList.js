import React, { useEffect, useState } from "react";
import { Button, Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useGetMealListQuery } from "../../features/api/mealListApiSlice";
import { useGetUsersQuery } from "../../features/api/logInApiSlice";

const MealList = () => {
  const [allMemberMeal, setAllMemberMeal] = useState([]);
  var count = 1;
  const { data: allMealList } = useGetMealListQuery();
  const { data: allUser } = useGetUsersQuery();

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

  console.log(allMemberMeal);

  return (
    <div className="bg_primary">
      <div>
        <div className="d-flex flex-row justify-content-around">
          <h1 className="pt-3 pb-3">Meal List current month:</h1>
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
        </div>
      </div>

      <Container fluid className="overflow-auto">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th colSpan={allUser?.length}>Name</th>
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

            {allMealList?.map((meal) => (
              <tr key={meal?._id}>
                <td>
                  #{count++}; {meal?.date}
                </td>
                {Object.keys(meal?.allMeal)?.map((key) => (
                  <td key={key?._id}>{meal?.allMeal[key]}</td>
                ))}
                <td>
                  <OverlayTrigger
                    className=""
                    overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}
                  >
                    <span className="d-inline-block me-2">
                      <Link to={`/update_meal_list/${meal?._id}`}>
                        <Button>
                          <i className="fa-solid fa-pen-to-square"></i>
                        </Button>
                      </Link>
                    </span>
                  </OverlayTrigger>
                </td>
              </tr>
            ))}

            <tr>
              <td>Total</td>
              {Object.keys(allMemberMeal)?.map((key) => (
                <td key={key?._id}> = {allMemberMeal[key]}</td>
              ))}
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default MealList;
