import React from "react";
import { Link } from "react-router-dom";
import "./service.css";

const Service = (props) => {
  const { _id, Name, description, img } = props.food;
  return (
    <div className="col-md-4 service">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{Name}</h5>
          <p className="card-text">{description}</p>
        </div>
        <div class="card-footer">
          <Link to={`/myOrders/${_id}`}>
            <button className="btn btn-primary">Order Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
