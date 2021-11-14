import React from "react";
import axios from 'axios';
import { useForm } from "react-hook-form";
import '../NewOrders/NewOrders';

const NewUser = () => {
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

  return (
    <div className="add-service">
      <h2>New User</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("sl", { required: true, maxLength: 20 })} placeholder="Sl" />
        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
        <input {...register("email", { required: true, maxLength: 20 })} placeholder="Email" />
        <textarea {...register("address")} placeholder="Address" />
        <input {...register("service", { required: true, maxLength: 20 })} placeholder="Service" />
        <input {...register("status", { required: true, maxLength: 20 })} placeholder="Status" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewUser;
