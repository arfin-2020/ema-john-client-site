import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { clearTheCart, getStoredCart } from "../../utilities/fakedb";
import { useAuth } from "../Context/AuthContext";
import classes from "./Shippiung.module.css";

const Shipping = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {currentUser} = useAuth();
  const form = useRef();
 
//   console.log(currentUser.name)
  const onSubmit = (data,e) => {
    const savedCart = getStoredCart();
    data.order = savedCart;
   
      fetch('http://localhost:5000/orders',{
        method: 'POST',
        headers: {
          'content-type' : 'application/json'
          // 'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.insertedId){
          Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your Order placed successfull.',
              showConfirmButton: false,
              timer: 1500
            });
            
            clearTheCart()
            e.target.reset()
            emailjs.sendForm('service_gmnfsef', 'template_2lx7e69', form.current, 'user_zU3VcJU814AmbyZosk6iH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
           
      }
      })
 
  
  };
  
 
  return (
    <form ref={form} className={classes.shippingform} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={`${classes.shippingForm} ${classes.input}`}
        placeholder="name"
        {...register("name" ,{required:true})}
        defaultValue={currentUser.name}
      /> 
      {errors.name && (
        <span className={classes.error}>This name field is required</span>
      )}
     
      <input placeholder="email"
        className={`${classes.shippingForm} ${classes.input}`}
        {...register("email", { required: true })}
        defaultValue={currentUser.email}
      />
   
      {errors.email && (
        <span className={classes.error}>This email field is required</span>
      )}
     
      <input placeholder="address"
        className={`${classes.shippingForm} ${classes.input}`}
        {...register("address", { required: true })}
      />
    
      {errors.address && (
        <span className={classes.error}>This address field is required</span>
      )}
     
      <input placeholder="city"
        className={`${classes.shippingForm} ${classes.input}`}
        {...register("city", { required: true })}
      />
      
      {errors.city && (
        <span className={classes.error}>This city field is required</span>
      )}
      
      <input placeholder="phone"
        className={`${classes.shippingForm} ${classes.input}`}
        {...register("phone", { required: true })}
      />
     
      {errors.phone && (
        <span className={classes.error}>This phone field is required</span>
      )}
     
      <br /><br />
      <input type="submit" />
    </form>
  );
};

export default Shipping;
