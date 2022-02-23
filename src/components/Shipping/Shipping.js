import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../Context/AuthContext";
import classes from "./Shippiung.module.css";
const Shipping = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {currentUser} = useAuth();
//   console.log(currentUser.name)
  const onSubmit = data => console.log(data);
  return (
    <form className={classes.shippingform} onSubmit={handleSubmit(onSubmit)}>
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
