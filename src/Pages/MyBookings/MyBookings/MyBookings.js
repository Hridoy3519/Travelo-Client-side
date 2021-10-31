import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";

const MyBookings = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    if (user.email) {
      fetch("https://warm-ravine-28341.herokuapp.com/orders/user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => setMyOrders(data));
    }
  }, [user]);

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
            const remainingOrders = myOrders.filter(
              (order) => order._id !== id
            );
            setMyOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <div className="my-all-bookings">
      {myOrders.length ? (
        <Container>
          <div>
            <h1 className="text-center">My Bookings</h1>
            {myOrders.map((myOrder) => (
              <MyOrder
                key={myOrder._id}
                order={myOrder}
                handleDelete={handleDelete}
              ></MyOrder>
            ))}
          </div>
        </Container>
      ) : (
        <div className="no-orders">
          <h1 className="mt-5">No Orders to show</h1>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
