import React from "react";
import useAuth from '../../hooks/useAuth';

const ManageOrder = (props) => {
    const {_id, name, address, phone} = props.manageOrder;
    const {user} = useAuth();

    const handleDelete = (id) => {
        const url = `https://eerie-grave-22895.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            window.confirm('Are you sure. You want to cancel order')
            console.log(data)
            
        })
    }

  return (
    <tbody>
      <tr>
        <td>{name}</td>
        <td>{user.email}</td>
        <td>{address}</td>
        <td>{phone}</td>
        <td>Approved</td>
        <td><button onClick={() => handleDelete(_id)} className="btn btn-danger">Delete</button></td>
      </tr>
    </tbody>
  );
};

export default ManageOrder;
