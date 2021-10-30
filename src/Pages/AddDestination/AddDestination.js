import React from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import './AddDestination.css';

const AddDestination = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {

    fetch('https://warm-ravine-28341.herokuapp.com/addTourDestination',{
      method:"post",
      headers: {
        'content-type' : 'application/json'
      },
      body : JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        alert("New Tourist Destination Added");
        reset();
      }
    })
  };

  return (
    <div className="form-container">
      <Card className="rounded-3">
        <Card.Header>
            <h4>Add a New Tour Destination</h4>
        </Card.Header>
        <Card.Body>
        {errors.title && errors.description && errors.days && errors.people && errors.price && errors.img ?  "" : <span className="error my-5">*All Field must be full-filled</span>}
        <br />
        <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input defaultValue="" placeholder="Title" {...register("title", { required: true })} /> 
           
            {/* include validation with required or other standard HTML validation rules */}
            <textarea defaultValue="" placeholder="Description" {...register("description", { required: true })} />
            <input defaultValue="" placeholder="No of Days" {...register("days", { required: true })} />
            <input defaultValue="" placeholder="Maximum People" {...register("people", { required: true })} />
            <input defaultValue="" placeholder="Price" {...register("price", { required: true })} />
            <input defaultValue="" placeholder="Img URL" {...register("img", { required: true })} />
            {/* errors will return when field validation fails  */}
            

            <input className="add-tour" value="Add" type="submit" />
          </form>
        </Card.Body>
      </Card>
     
    </div>
  );
};

export default AddDestination;
