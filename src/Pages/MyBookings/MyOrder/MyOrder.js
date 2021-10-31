import React, { useEffect, useState } from "react";

const MyOrder = (props) => {
  const { order, name, people, _id, status } = props.order;
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    fetch(`https://warm-ravine-28341.herokuapp.com/tourDestinations/${order}`)
      .then((res) => res.json())
      .then((data) => setDestination(data));
  }, []);

 

  return (
    <div className="card destination-detail mb-3" style={{ maxWidth: "100%" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={destination.img}
            className="img-fluid my-order-img rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body manage-order-card">
            <h5 className="card-title">{destination.title}</h5>
            <h6>{destination.description}</h6>
            <h6>
              <small className="text-gray">Booked by: </small> {name}{" "}
            </h6>
            <h4>Total Payment: ${people * destination.price}</h4>
            <h6>Status: {status}</h6>
            <button onClick={() => props.handleDelete(_id)} className="customized-btn">Cancel Tour</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
