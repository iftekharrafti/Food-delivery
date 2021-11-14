import React, {useState, useEffect} from 'react';
import Order from '../Order/Order';

const MainOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://eerie-grave-22895.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, []);

    return (
        <div>
            <h2 style={{textAlign: 'center', margin: '20px'}}>My Order</h2>
            <div className="container">
                <div className="row">
                    {
                        orders.map((order) => <Order order={order}></Order>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MainOrder;