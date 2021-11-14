import React from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";
import './newOrders.css';

const NewOrders = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    axios.post('https://eerie-grave-22895.herokuapp.com/services', data)
    .then(res => {
        if(res.data.insertedId){
            alert('Added successfully');
            reset();
        }
    })
  };

  return (
    <div className="add-service">
      <h2>Please Add a Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Food Name" />
        <textarea {...register("description")} placeholder="Description" />
        <input type="number" {...register("price")} placeholder="Price" />
        <input {...register("img")} placeholder="Image url" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewOrders;
