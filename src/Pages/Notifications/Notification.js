import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Notification = () => {
  return (
    <div className="bg_primary">
      <h1 className="text-center pt-3 pb-3">Notification</h1>
      <Container className="overflow-auto">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Message</th>
              <th>Date&Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>This is from message 1</td>
              <td>4/4/2023</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>This is from message 2</td>
              <td>5/4/2023</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Notification;
