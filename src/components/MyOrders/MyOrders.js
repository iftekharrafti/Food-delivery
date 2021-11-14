import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import './myOrders.css';

const MyOrders = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    
        axios.post('https://eerie-grave-22895.herokuapp.com/orders', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Added successfully');
                reset();
            }
        })
      };

  const { user } = useAuth();
  const {orderId} = useParams();
  const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://eerie-grave-22895.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setOrders(data))
    },[])

    const filterOrder = orders.filter(order => (order._id == orderId))
    const orderData = filterOrder[0];

  return (
    <div className="add-service container">
      <h2>Book Your Favourite Food</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 20 })} value={user.displayName} />
        <input {...register("address", { required: true, maxLength: 20 })} placeholder="Address" />
        <input {...register("phone", { required: true, maxLength: 20 })} placeholder="Mobile Number" />
        <input {...register("description", { required: true, maxLength: 20 })} placeholder="Description" />
        <input {...register("food", { required: true, maxLength: 20 })} value={orderData?.Name} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default MyOrders;
