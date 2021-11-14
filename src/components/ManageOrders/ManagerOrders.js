import React, { useState, useEffect } from "react";
import ManageOrder from "../ManageOrder/ManageOrder";

const ManagerOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://eerie-grave-22895.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
      <h2 className="text-center py-4">Manage Your Order</h2>
      <div className="container">
        <div className="row">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            {orders.map((order) => (
              <ManageOrder manageOrder={order}></ManageOrder>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagerOrders;
