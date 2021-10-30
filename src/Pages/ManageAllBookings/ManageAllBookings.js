import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Order from "./Order/Order";
import "./ManageAllBookings.css";
const ManageAllBookings = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const isConfirm = window.confirm("Are You Sure?");
    if (isConfirm) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Deleted Successfully");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };
  return (
    <div>
      {orders.length ? (
        <Container>
          <div>
            <h1 className="text-center my-3">All Bookings</h1>
            <Row xs={1} md={2} className="g-4">
              {orders.map((order) => (
                <Order
                  handleDelete={handleDelete}
                  key={order._id}
                  order={order}
                ></Order>
              ))}
            </Row>
          </div>
        </Container>
      ) : (
        <div className="managing-all-bookings">
          <h1>No Orders to Manage</h1>
        </div>
      )}
    </div>
  );
};

export default ManageAllBookings;
