import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../Context/AuthContext';
const Orders = () => {

    const [orders, setOrders] = useState([]);
    const {currentUser} = useAuth();
    // console.log(currentUser);
    const history = useHistory();
    
    useEffect(()=>{
        fetch(`http://localhost:5000/orders?name=${currentUser.name}`,{
            headers:{
                "authorization" : `Bearer ${localStorage.getItem("idToken")}`
            }
        })
        .then(res=>{
            if(res.status === 200){
               return res.json();
            }else if(res.status === 401){
                Swal.fire({
                    position: 'center',
                    icon: 'warning',
                    title: 'Your are Unauthorizied.',
                    showConfirmButton: false,
                    timer: 1500
                  });
                history('/login')
            }
        })
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