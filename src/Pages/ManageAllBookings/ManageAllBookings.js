import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Order from "./Order/Order";
import "./ManageAllBookings.css";
const ManageAllBookings = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://warm-ravine-28341.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleDelete = (id) => {
    const isConfirm = window.confirm("Are You Sure?");
    if (isConfirm) {
      const url = `https://warm-ravine-28341.herokuapp.com/orders/${id}`;
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

  const handleUpdate = (id) => {
    const url = `https://warm-ravine-28341.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="managing-all-bookings">
      {orders.length ? (
        <Container>
          <div>
            <h3 className="mt-3">All Bookings</h3>
            <div className="underscore mb-5"></div>

            <Row xs={1} md={2} className="g-4">
              {orders.map((order) => (
                <Order
                  handleUpdate={handleUpdate}
                  handleDelete={handleDelete}
                  key={order._id}
                  order={order}
                ></Order>
              ))}
            </Row>
          </div>
        </Container>
      ) : (
        <div className="no-orders">
          <h1 className="mt-5">No Orders to Manage</h1>
        </div>
      )}
    </div>
  );
};

export default ManageAllBookings;
