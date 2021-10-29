import React from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import './AddDestination.css';

const AddDestination = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <div className="tour-form-container">
      <Card className="rounded-3">
        <Card.Header>
            <h4>Add a New Tour Destination</h4>
        </Card.Header>
        <Card.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input placeholder="Title" {...register("title")} /> 

            {/* include validation with required or other standard HTML validation rules */}
            <textarea placeholder="Description" {...register("description", { required: true })} />
            <input placeholder="No of Days" {...register("days", { required: true })} />
            <input placeholder="Maximum People" {...register("people", { required: true })} />
            <input placeholder="Price" {...register("price", { required: true })} />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input value="Add" type="submit" />
          </form>
        </Card.Body>
      </Card>
     
    </div>
  );
};

export default AddDestination;
