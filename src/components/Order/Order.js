import React from 'react';
import { Link } from 'react-router-dom';
import './order.css';

const Order = (props) => {
    const {_id, name, description, food} = props.order;

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
        <div className="col-md-4 order">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{food}</h5>
          <h3 className="card-text">{description}</h3>
          <p>Pending...</p>
        </div>
        <div class="card-footer">
          <Link to="">
            <button onClick={() => handleDelete(_id)} className="btn btn-danger text-center">Cancel</button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default Order;