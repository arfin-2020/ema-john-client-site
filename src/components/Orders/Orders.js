import React, { useEffect, useState } from 'react';
import { useAuth } from '../Context/AuthContext';
const Orders = () => {

    const [orders, setOrders] = useState([]);
    const {currentUser} = useAuth();
    // console.log(currentUser);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?name=${currentUser.name}`,{
            headers:{
                "authorization" : `Bearer ${localStorage.getItem("idToken")}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setOrders(data)
        })
    },[currentUser.name])
    return (
        <div>
            <h1>You Have Placed {orders.length} orders</h1>
            {
                orders.map(order=>
                <li key={order._id}>
                    {order.email}
                </li>)
            }
        </div>
    );
};

export default Orders;