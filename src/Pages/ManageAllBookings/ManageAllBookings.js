import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Order from "./Order/Order";
const ManageAllBookings = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <Container>
      <div>
        <h1 className="text-center my-3">All Bookings</h1>
        <Row xs={1} md={2} className="g-4">
          {orders.map((order) => (
            <Order key={order._id} order={order}></Order>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default ManageAllBookings;
