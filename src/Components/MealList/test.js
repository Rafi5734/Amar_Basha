import React, { useState } from "react";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export default function Test() {
  const [tableData, setTableData] = useState([]);
  const tableRows = [];
  const now = new Date();
  const daysInMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  ).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    tableRows.push(
      <tr key={i}>
        <td>{i}</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
    );
  }

  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  useEffect(() => {
    const generatedData = Array.from({ length: 31 }, (_, index) => {
      const rowData = {
        rowNumber: index + 1,
        date: `${index + 1}/${
          currentDate.getMonth() + 1
        }/${currentDate.getFullYear()}`,
      };

      if (index + 1 === currentDay) {
        rowData.data = "Your data";
      }

      return rowData;
    });
    setTableData(generatedData);
  }, []);

  //   console.log(currentDay);
  //   console.log(tableData);
  return (
    <div className="bg_primary">
      <Container>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.rowNumber}</td>
                <td>{item.date}</td>
                <td>{item.data}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
