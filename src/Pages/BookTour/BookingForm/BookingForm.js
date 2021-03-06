import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import "./BookingForm.css";
const BookingForm = (props) => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.name = user.displayName;
    data.email = user.email;
    data.order = props.id;
    data.status = "pending";
    fetch("https://warm-ravine-28341.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Order placed");
          reset();
        }
      });
  };

  
  return (
    <div className="parallax d-flex justify-content-center">
      <div className="parallax-inner p-5 rounded">
        <h2 className="text-center">Book Your Seat</h2>
        <div className="form-container">
          {errors.title &&
          errors.description &&
          errors.days &&
          errors.people &&
          errors.price &&
          errors.img ? (
            ""
          ) : (
            <span className="error my-5">*All Field must be full-filled</span>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <input value={user.displayName || ""} {...register("name")} />

            <input
              value={user.email || ""}
              {...register("email", { required: true })}
            />
            <input
              defaultValue=""
              placeholder="No of People"
              {...register("people", { required: true })}
            />
            <input
              defaultValue=""
              placeholder="Address"
              {...register("address", { required: true })}
            />
            <input
              defaultValue=""
              placeholder="Phone No"
              {...register("phone", { required: true })}
            />

            <input className="add-tour" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
