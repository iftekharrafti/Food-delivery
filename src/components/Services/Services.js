import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./services.css";

const Services = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://eerie-grave-22895.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div className="services">
      <div className="container">
        <h2>Our Foods Services</h2>
        <div className="row">
          {foods.map((food) => (
            <Service food={food}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
