import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";

const MyBookings = () => {
  const [myOrders, setMyOrders] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    if (user.email) {
      fetch("http://localhost:5000/orders/user", {
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
        const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                alert("Deleted Successfully");
                const remainingOrders = myOrders.filter(order => order._id!==id);
                setMyOrders(remainingOrders);
            }
        });
    }
  };

  return (
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
  );
};

export default MyBookings;
